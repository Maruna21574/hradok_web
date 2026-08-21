
<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: https://www.hotelhradok.eu');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Povolená je iba metóda POST.']);
    exit();
}

// Obmedz počet požiadaviek ešte pred odoslaním emailu.
function is_rate_limited() {
    $ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
    $file = sys_get_temp_dir() . '/hotel-hradok-mail-rate-' . hash('sha256', $ip) . '.json';
    $now = time();
    $window = 600;
    $maxRequests = 5;
    $handle = fopen($file, 'c+');
    if (!$handle) {
        return false;
    }
    flock($handle, LOCK_EX);
    $contents = stream_get_contents($handle);
    $timestamps = json_decode($contents ?: '[]', true);
    if (!is_array($timestamps)) {
        $timestamps = [];
    }
    $timestamps = array_values(array_filter($timestamps, function ($timestamp) use ($now, $window) {
        return is_int($timestamp) && $timestamp > $now - $window;
    }));
    $limited = count($timestamps) >= $maxRequests;
    if (!$limited) {
        $timestamps[] = $now;
        ftruncate($handle, 0);
        rewind($handle);
        fwrite($handle, json_encode($timestamps));
    }
    flock($handle, LOCK_UN);
    fclose($handle);
    return $limited;
}

// Funkcia na logovanie
function log_mail($msg) {
    $logfile = __DIR__ . '/mail.log';
    file_put_contents($logfile, date('c') . ' ' . $msg . "\n", FILE_APPEND);
}

// Rozlíš medzi JSON a multipart/form-data
if (isset($_POST['name']) || isset($_FILES['attachments'])) {
    // multipart/form-data
    $name = trim($_POST['name'] ?? '');
    $email = trim($_POST['email'] ?? '');
    $phone = trim($_POST['phone'] ?? '');
    $eventType = trim($_POST['eventType'] ?? '');
    $dateFrom = trim($_POST['dateFrom'] ?? '');
    $dateTo = trim($_POST['dateTo'] ?? '');
    $guests = trim($_POST['guests'] ?? '');
    $extraInfo = trim($_POST['extraInfo'] ?? '');
    $website = trim($_POST['website'] ?? '');
    $formStartedAt = (int) ($_POST['formStartedAt'] ?? 0);
    // Honeypot antispam
    if (!empty($website)) {
        http_response_code(200);
        echo json_encode(['success' => true, 'antispam' => true]);
        exit();
    }
    $attachments = [];
    if (isset($_FILES['attachments'])) {
        $files = $_FILES['attachments'];
        $count = is_array($files['name']) ? count($files['name']) : 0;
        for ($i = 0; $i < $count; $i++) {
            if ($files['error'][$i] === UPLOAD_ERR_OK && $files['size'][$i] <= 5*1024*1024) {
                $attachments[] = [
                    'name' => $files['name'][$i],
                    'type' => $files['type'][$i],
                    'content' => chunk_split(base64_encode(file_get_contents($files['tmp_name'][$i])))
                ];
            }
        }
    }
    $hasAttachment = count($attachments) > 0;
} else {
    // JSON
    $data = json_decode(file_get_contents('php://input'), true);
    $name = trim($data['name'] ?? '');
    $email = trim($data['email'] ?? '');
    $phone = trim($data['phone'] ?? '');
    $eventType = trim($data['eventType'] ?? '');
    $dateFrom = trim($data['dateFrom'] ?? '');
    $dateTo = trim($data['dateTo'] ?? '');
    $guests = trim($data['guests'] ?? '');
    $extraInfo = trim($data['extraInfo'] ?? '');
    $website = trim($data['website'] ?? '');
    $formStartedAt = (int) ($data['formStartedAt'] ?? 0);
    // Honeypot antispam
    if (!empty($website)) {
        http_response_code(200);
        echo json_encode(['success' => true, 'antispam' => true]);
        exit();
    }
    $hasAttachment = false;
}

if (is_rate_limited()) {
    http_response_code(429);
    echo json_encode(['error' => 'Príliš veľa požiadaviek. Skúste to znova neskôr.']);
    exit();
}

if (!$name || !$email || !$eventType) {
    log_mail('ERROR: Chýbajú povinné údaje. name=' . $name . ' email=' . $email . ' eventType=' . $eventType);
    http_response_code(400);
    echo json_encode(['error' => 'Chýbajú povinné údaje.']);
    exit();
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL) || strlen($name) > 120 || strlen($email) > 254 || strlen($phone) > 40 || strlen($extraInfo) > 5000) {
    http_response_code(400);
    echo json_encode(['error' => 'Údaje formulára nie sú platné.']);
    exit();
}
if (stripos($eventType, 'kontakt') !== false) {
    if ($formStartedAt > 0 && (time() * 1000 - $formStartedAt < 3000 || time() * 1000 - $formStartedAt > 7200000)) {
        http_response_code(400);
        echo json_encode(['error' => 'Formulár bol odoslaný príliš rýchlo alebo jeho platnosť vypršala.']);
        exit();
    }
    if (strlen($extraInfo) < 10) {
        http_response_code(400);
        echo json_encode(['error' => 'Správa je príliš krátka.']);
        exit();
    }
}

$year = date('Y');
$replace = [
    '{{name}}' => $name,
    '{{email}}' => $email,
    '{{phone}}' => $phone,
    '{{eventType}}' => $eventType,
    '{{dateFrom}}' => $dateFrom,
    '{{dateTo}}' => $dateTo,
    '{{guests}}' => $guests,
    '{{extraInfo}}' => $extraInfo,
    '{{year}}' => $year
];

// Rozlíšenie typu formulára podľa eventType (ak obsahuje "kontakt")
$isContact = (stripos($eventType, 'kontakt') !== false);

// Admin šablóna (HTML alebo TXT)
if ($isContact && file_exists('admin-notification-contact.html')) {
    $adminTpl = file_get_contents('admin-notification-contact.html');
    $adminBody = str_replace(array_keys($replace), array_values($replace), $adminTpl);
} else if ($isContact && file_exists('admin-notification-contact.txt')) {
    $adminTpl = file_get_contents('admin-notification-contact.txt');
    $adminBody = str_replace(array_keys($replace), array_values($replace), $adminTpl);
} else if (file_exists('admin-notification-booking.html')) {
    $adminTpl = file_get_contents('admin-notification-booking.html');
    $adminBody = str_replace(array_keys($replace), array_values($replace), $adminTpl);
} else if (file_exists('admin-notification-booking.txt')) {
    $adminTpl = file_get_contents('admin-notification-booking.txt');
    $adminBody = str_replace(array_keys($replace), array_values($replace), $adminTpl);
} else {
    $adminBody = "Nový dopyt:\nMeno: $name\nE-mail: $email\nTelefón: $phone\nTyp podujatia: $eventType\nSpráva: $extraInfo";
}

// Klient šablóna (HTML alebo TXT)
if ($isContact && file_exists('client-confirmation-contact.html')) {
    $clientTpl = file_get_contents('client-confirmation-contact.html');
    $clientBody = str_replace(array_keys($replace), array_values($replace), $clientTpl);
} else if ($isContact && file_exists('client-confirmation-contact.txt')) {
    $clientTpl = file_get_contents('client-confirmation-contact.txt');
    $clientBody = str_replace(array_keys($replace), array_values($replace), $clientTpl);
} else if (file_exists('client-confirmation-booking.html')) {
    $clientTpl = file_get_contents('client-confirmation-booking.html');
    $clientBody = str_replace(array_keys($replace), array_values($replace), $clientTpl);
} else if (file_exists('client-confirmation-booking.txt')) {
    $clientTpl = file_get_contents('client-confirmation-booking.txt');
    $clientBody = str_replace(array_keys($replace), array_values($replace), $clientTpl);
} else {
    $clientBody = "Ďakujeme za váš dopyt, $name!\nVaša požiadavka bola prijatá.\n\nKópia vašej správy:\n$extraInfo";
}

// Loguj vstupné údaje
log_mail('INPUT: name=' . $name . ' email=' . $email . ' phone=' . $phone . ' eventType=' . $eventType . ' dateFrom=' . $dateFrom . ' dateTo=' . $dateTo . ' guests=' . $guests . ' extraInfo=' . $extraInfo . ' hasAttachment=' . ($hasAttachment ? '1' : '0'));

$adminMail = 'info@hotelhradok.eu';
$from = "Hotel Hrádok <info@hotelhradok.eu>";

if ($hasAttachment) {
    $boundary = md5(uniqid(time()));
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "From: $from\r\n";
    $headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";

    $body = "--$boundary\r\n";
    $body .= "Content-Type: text/html; charset=UTF-8\r\n";
    $body .= "Content-Transfer-Encoding: 8bit\r\n\r\n";
    $body .= $adminBody . "\r\n";
    foreach ($attachments as $att) {
        $body .= "--$boundary\r\n";
        $body .= "Content-Type: {$att['type']}; name=\"{$att['name']}\"\r\n";
        $body .= "Content-Transfer-Encoding: base64\r\n";
        $body .= "Content-Disposition: attachment; filename=\"{$att['name']}\"\r\n\r\n";
        $body .= $att['content'] . "\r\n";
    }
    $body .= "--$boundary--";
    $subjectAdmin = '=?UTF-8?B?' . base64_encode("Nový dopyt z webu: $eventType") . '?=';
    log_mail('ADMIN MAIL: subject=' . $subjectAdmin . ' headers=' . $headers);
    $sentAdmin = mail($adminMail, $subjectAdmin, $body, $headers);
    log_mail('ADMIN MAIL SENT: ' . ($sentAdmin ? 'OK' : 'ERROR'));

    // Klientovi bez prílohy
    $headersClient = "MIME-Version: 1.0\r\n";
    $headersClient .= "Content-type: text/html; charset=UTF-8\r\n";
    $headersClient .= "From: $from\r\n";
    $subjectClient = '=?UTF-8?B?' . base64_encode("Potvrdenie prijatia dopytu | Hotel Hrádok") . '?=';
    log_mail('CLIENT MAIL: subject=' . $subjectClient . ' headers=' . $headersClient);
    $sentClient = mail($email, $subjectClient, $clientBody, $headersClient);
    log_mail('CLIENT MAIL SENT: ' . ($sentClient ? 'OK' : 'ERROR'));
} else {
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8\r\n";
    $headers .= "From: $from\r\n";
    $subjectAdmin = '=?UTF-8?B?' . base64_encode("Nový dopyt z webu: $eventType") . '?=';
    $subjectClient = '=?UTF-8?B?' . base64_encode("Potvrdenie prijatia dopytu | Hotel Hrádok") . '?=';
    log_mail('ADMIN MAIL: subject=' . $subjectAdmin . ' headers=' . $headers);
    $sentAdmin = mail($adminMail, $subjectAdmin, $adminBody, $headers);
    log_mail('ADMIN MAIL SENT: ' . ($sentAdmin ? 'OK' : 'ERROR'));
    log_mail('CLIENT MAIL: subject=' . $subjectClient . ' headers=' . $headers);
    $sentClient = mail($email, $subjectClient, $clientBody, $headers);
    log_mail('CLIENT MAIL SENT: ' . ($sentClient ? 'OK' : 'ERROR'));
}

// Výsledok loguj aj do odpovede
echo json_encode([
    'success' => true,
    'adminMailSent' => $sentAdmin,
    'clientMailSent' => $sentClient
]);

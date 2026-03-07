
<?php
header('Access-Control-Allow-Origin: https://www.hotelhradok.eu');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$to = "info@hotelhradok.eu";
$from = "Hotel Hrádok <info@hotelhradok.eu>";
$year = date('Y');

// Načítaj polia z POST
$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$subject = trim($_POST['subject'] ?? '');
$message = trim($_POST['message'] ?? '');
$phone = trim($_POST['phone'] ?? '');
$eventType = trim($_POST['eventType'] ?? '');
$dateFrom = trim($_POST['dateFrom'] ?? '');
$dateTo = trim($_POST['dateTo'] ?? '');
$guests = trim($_POST['guests'] ?? '');
$extraInfo = trim($_POST['extraInfo'] ?? '');

// Rozpoznanie typu formulára
$isBooking = $eventType || $dateFrom || $dateTo || $guests;

// Validácia
if (!$name || !$email || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo "Neplatné údaje.";
    exit;
}

// Priprav nahradenia
$replace = [
    '{{name}}' => htmlspecialchars($name),
    '{{email}}' => htmlspecialchars($email),
    '{{subject}}' => htmlspecialchars($subject),
    '{{message}}' => nl2br(htmlspecialchars($message)),
    '{{year}}' => $year,
    '{{phone}}' => htmlspecialchars($phone),
    '{{eventType}}' => htmlspecialchars($eventType),
    '{{dateFrom}}' => htmlspecialchars($dateFrom),
    '{{dateTo}}' => htmlspecialchars($dateTo),
    '{{guests}}' => htmlspecialchars($guests),
    '{{extraInfo}}' => nl2br(htmlspecialchars($extraInfo)),
];

// Výber šablóny
if ($isBooking) {
    $adminTpl = file_exists(__DIR__ . '/admin-notification-booking.html') ? file_get_contents(__DIR__ . '/admin-notification-booking.html') : '';
    $clientTpl = file_exists(__DIR__ . '/client-confirmation-booking.html') ? file_get_contents(__DIR__ . '/client-confirmation-booking.html') : '';
    $adminSubject = "Nová rezervácia z webu | Hotel Hrádok";
    $clientSubject = "Potvrdenie rezervácie | Hotel Hrádok";
} else {
    $adminTpl = file_exists(__DIR__ . '/admin-notification-contact.html') ? file_get_contents(__DIR__ . '/admin-notification-contact.html') : '';
    $clientTpl = file_exists(__DIR__ . '/client-confirmation-contact.html') ? file_get_contents(__DIR__ . '/client-confirmation-contact.html') : '';
    $adminSubject = "Nový kontakt z webu | Hotel Hrádok";
    $clientSubject = "Potvrdenie prijatia dopytu | Hotel Hrádok";
}

$adminBody = $adminTpl ? str_replace(array_keys($replace), array_values($replace), $adminTpl) : "Nový dopyt: " . print_r($replace, true);
$clientBody = $clientTpl ? str_replace(array_keys($replace), array_values($replace), $clientTpl) : "Ďakujeme za váš dopyt!";

// Hlavičky
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=UTF-8\r\n";
$headers .= "From: $from\r\n";
$headers .= "Reply-To: $email\r\n";

// Odoslanie adminovi
$sentAdmin = mail($to, $adminSubject, $adminBody, $headers);
// Odoslanie klientovi
$sentClient = mail($email, $clientSubject, $clientBody, $headers);

if ($sentAdmin && $sentClient) {
    echo "Email úspešne odoslaný.";
} else {
    http_response_code(500);
    echo "Chyba pri odosielaní emailu.";
}

<?php
// CORS povolenie pre doménu (upraviť podľa potreby)
header('Access-Control-Allow-Origin: https://www.hotelhradok.eu');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Tento skript funguje takto:
// - mail.php a emailové šablóny (napr. contact.html) majú byť v rovnakom priečinku
// - web formulár posiela POST (JSON alebo multipart/form-data) na mail.php
// - admin email nastavíš tu ($to)
// - server musí podporovať PHP a funkciu mail()
// - CORS nastav podľa domény
// - šablónu uprav podľa potreby
// Nastav email príjemcu
$to = "info@hotelhradok.eu";

// Načítaj polia z POST
$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$subject = trim($_POST['subject'] ?? '');
$message = trim($_POST['message'] ?? '');

// Validácia
if (!$name || !$email || !$subject || !$message || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo "Neplatné údaje.";
    exit;
}

// Priprav HTML template
$year = date('Y');
$html = file_get_contents(__DIR__ . '/contact.html');
$html = str_replace([
    '{{name}}',
    '{{email}}',
    '{{subject}}',
    '{{message}}',
    '{{year}}'
], [
    htmlspecialchars($name),
    htmlspecialchars($email),
    htmlspecialchars($subject),
    nl2br(htmlspecialchars($message)),
    $year
], $html);

// Hlavičky
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=UTF-8\r\n";
$headers .= "From: Hotel Hrádok <info@hotelhradok.eu>\r\n";
$headers .= "Reply-To: " . $email . "\r\n";

// Odoslanie
if (mail($to, "Nový dopyt z webu | Hotel Hrádok", $html, $headers)) {
    echo "Email úspešne odoslaný.";
} else {
    http_response_code(500);
    echo "Chyba pri odosielaní emailu.";
}

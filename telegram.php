<?php

/* https://api.telegram.org/bot6108143346:AAHdV_A4NvadvGx2HFbXfnLzSusSbcJnDPk/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['user-name'];
$phone = $_POST['user-phone'];
$date = $_POST['user-date'];
$time = $_POST['user-time'];
$token = "6108143346:AAHdV_A4NvadvGx2HFbXfnLzSusSbcJnDPk";
$chat_id = "-934508863";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Дата' => $date
  'Время' => $time
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: thank-you.html');
} else {
  echo "Error";
}
?>
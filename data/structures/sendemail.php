<?php

require_once('email/PHPMailer.php');
require_once('email/SMTP.php');
require_once('email/Exception.php');
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
$mail=new PHPMailer(true);

try{
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;
	$mail->isSMTP();
    $mail->SMTPSecure = 'tsl';
	$mail->Host = 'smtp.gmail.com';
	$mail->SMTPAuth = true;
	$mail->Username = '1@email';
	$mail->Password = '1senha';
	$mail->Port = 587;

	$mail->setFrom('2@email');
	$mail->addAddress('2@email');
	$mail->isHTML(true);
	$mail->Subject = 'Teste';
    $mail->AddEmbeddedImage('data/img.jpg', 'img');
	$mail->Body = "<img src='cid:img' style='max-height: 100px;'>";
	$mail->AltBody = 'Teste';
 
	if($mail->send()) {
		echo 'Email enviado com sucesso';
	} else {
		echo 'Email nao enviado';
	}
}catch(Exception $e){
    print_r("Erro ao enviar {$mail->ErrorInfo}");
}
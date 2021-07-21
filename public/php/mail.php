<?php

include("class.phpmailer.php");
include("class.smtp.php");

$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];


  date_default_timezone_set("Europe/Paris"); 
  $mail             = new PHPMailer(); 
  $body             = "Test de PHPMailer."; 
  $mail->IsSMTP();
  $mail->SMTPAuth   = true;
  $mail->SMTPOptions = array('ssl' => array('verify_peer' => false,'verify_peer_name' => false,'allow_self_signed' => true)); // ignorer l'erreur de certificat.
  $mail->Host       = "smtp.gmail.com";  
  $mail->Port       = 25 ;
  $mail->Username   = "eelobayid@gmail.com";
  $mail->Password   = "cngacqlqnhlcgutj";        
  $mail->From       = $email; //adresse d’envoi correspondant au login entré précédemment
  $mail->FromName   = $name; // nom qui sera affiché
  $mail->Subject    = "from my site: "+$subject; // sujet
  $mail->AltBody    = $message; //Body au format texte
  $mail->WordWrap   = 50; // nombre de caractères pour le retour à la ligne automatique
  $mail->MsgHTML($body); 
  $mail->AddReplyTo("votre mail","votre nom");
  $mail->AddAttachment("./examples/images/phpmailer.gif");// pièce jointe si besoin
  $mail->AddAddress("eelobayid@gmail.com");
  $mail->IsHTML(false); // envoyer au format html, passer a false si en mode texte 
  if(!$mail->Send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
  } else {
    echo "Le message à bien été envoyé";
  } 

?> 
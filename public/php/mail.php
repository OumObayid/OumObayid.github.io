<?php


$emailexped = $_POST['email'];

if (isset($emailexped) && $emailexped !=""){
$name = $_POST['name'];
$to = "support@oumcreation";
$subject = $_POST['subject'];
$message = $_POST['message'];
$headers = "Content-Type: text/html;\n";
$headers .= "From: ".$emailexped;

$message = utf8_decode( $message )."\r\n";
$message = "De : ".$emailexped .",<br /><br /><strong>Sujet :".$subject."</strong><br/><br />".$message."\r\n";
$message ="<html><body>".$message."</body></html>";

$reussi=mail($to,$subject,$message,$headers);

if($reussi) {
    echo "Le message à bien été envoyé";
   
  } else {
    echo "Mailer Error: " . $mail->ErrorInfo;
  } 
}


?>  
<?php
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];


$from = "From: Mail Contact Form <" . $email . ">";
$to = "support@oumcreation.ml";

$body = $message;

if(mail($to,$subject,$body,$from)){
    echo 'E-mail message sent!';
} else {
    echo 'E-mail delivery failure!';
}

?>
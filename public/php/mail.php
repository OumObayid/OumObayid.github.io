<?php
$errorMSG = "";
 
// NAME
if (empty($_POST["name"])) {
    $errorMSG = "Veuillez indiquer votre Nom et Prénom";
} else {
    $name = $_POST["name"];
}
 
// EMAIL
if (empty($_POST["email"])) {
    $errorMSG .= "Veuillez indiquer votre Email";
} else {
    $email = $_POST["email"];
}

// TEL
if (empty($_POST["tel"])) {
    $errorMSG .= "Veuillez indiquer votre numéro de téléphone";
} else {
    $tel = $_POST["tel"];
}

// ENTREPRISE
if (empty($_POST["entreprise"])) {
    $errorMSG .= "Veuillez indiquer votre entreprise";
} else {
    $entreprise = $_POST["entreprise"];
}


// MESSAGE
if (empty($_POST["message"])) {
    $errorMSG .= "Message is required ";
} else {
    $message = $_POST["message"];
}
 
 
$name = $_POST["name"];
$email = $_POST["email"];
$tel = $_POST["tel"];
$entreprise = $_POST["entreprise"];
$message = $_POST["message"];
 
$EmailTo = "votreemail@gmail.com,autreemail@hotmail.fr";
$Subject = "Nouveau message de monsite.com";
 
// le corps du mail
$Body .= "Name: ";
$Body .= $name;
$Body .= "\n";
 
$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";
 
$Body .= "Tel: ";
$Body .= $tel;
$Body .= "\n";

$Body .= "Entreprise: ";
$Body .= $entreprise;
$Body .= "\n";

$Body .= "Message: ";
$Body .= $message;
$Body .= "\n";
 
// envoi email
$success = mail($EmailTo, $Subject, $Body, "From:".$email);
 
// redirection vers le message de validation
if ($success && $errorMSG == ""){
   echo "success";
}else{
    if($errorMSG == ""){
        echo "Something went wrong :(";
    } else {
        echo $errorMSG;
    }
}

?>
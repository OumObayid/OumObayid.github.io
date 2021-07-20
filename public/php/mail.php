<?php
// SendPulse's PHP Library: https://github.com/sendpulse/sendpulse-rest-api-php
require_once( 'api/sendpulseInterface.php' );
require_once( 'api/sendpulse.php' );
$SPApiProxy = new SendpulseApi( API_USER_ID, API_SECRET, 'file' );

$email = array(
  'html'    => 'Your email content goes here',
  'text'    => 'Your email text version goes here',
  'subject' => 'Testing SendPulse API',
  'from'    => array(
    'name'  => 'Your Sender Name',
    'email' => 'your-sender-email@gmail.com'
  ),
  'to'      => array(
    array(
      'name'  => 'Subscriber Name',
      'email' => 'subscriber@gmail.com'
    )
  )
);
var_dump( $SPApiProxy->smtpSendMail( $email ) );
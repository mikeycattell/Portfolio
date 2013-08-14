<?php
$field_name = $_POST['mc_name'];
$field_email = $_POST['mc_email'];
$field_message = $_POST['mc_message'];

$mail_to = 'michael.a.cattell@gmail.com';
$subject = 'Message from a site visitor '.$field_name;

$body_message = 'From: '.$field_name."\n";
$body_message .= 'E-mail: '.$field_email."\n";
$body_message .= 'Message: '.$field_message;

$headers = 'From: '.$field_email."\r\n";
$headers .= 'Reply-To: '.$field_email."\r\n";

$mail_status = mail($mail_to, $subject, $body_message, $headers);

if ($mail_status) { ?>
	<script language="javascript" type="text/javascript">
		alert('Thank you for the message, you cool dude! Now sit down, pour yourself a little drink whilst I conjure up a great response.');
		window.location = 'contact.html';
	</script>
<?php
}
else { ?>
	<script language="javascript" type="text/javascript">
		alert('Message failed. Please, send an email to michae.a.cattell@gmail.com');
		window.location = 'contact.html';
	</script>
<?php
}
?>
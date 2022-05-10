<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <title>Envoi d'un message par formulaire</title>
</head>

<body>
<?php
    if (isset($_POST['message'])) {
        $entete  = 'MIME-Version: 1.0' . "\r\n";
        $entete .= 'Content-type: text/html; charset=utf-8' . "\r\n";
        $entete .= 'From: postmaster@zitoonn.com' . "\r\n";
        $entete .= 'Reply-to: ' . $_POST['email'];

        $message = '<h1>Vous venez de reçevoir un e-mail</h1>
        <p><b>Email : </b>' . $_POST['email'] . '<br>
        <b>Message : </b>' . htmlspecialchars($_POST['message']) . '</p>';

        $retour = mail('durand.olivier.34@gmail.com', 'Envoi depuis page Reservation', $message, $entete);
        if($retour)
            echo '<div style="display: flex; justify-content: center; align-items: center; width: 100%; height: 500px;"><p>Votre message a bien été envoyé.</p></div>';
    }
    ?>
</body>
</html>
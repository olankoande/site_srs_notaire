<?php
// Configuration
$recipient_email = "infos@srs-notaires.com";
$subject_prefix = "Nouveau message depuis SRS Notaires - ";

// Vérifier si le formulaire a été soumis
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Récupérer et nettoyer les données du formulaire
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $phone = strip_tags(trim($_POST["phone"]));
    $service = strip_tags(trim($_POST["service"]));
    $message = strip_tags(trim($_POST["message"]));
    
    // Validation des champs
    $errors = array();
    
    if (empty($name)) {
        $errors[] = "Le nom est requis.";
    }
    
    if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Une adresse email valide est requise.";
    }
    
    if (empty($message)) {
        $errors[] = "Le message est requis.";
    }
    
    // Si pas d'erreurs, envoyer l'email
    if (empty($errors)) {
        
        // Construire le sujet
        $subject = $subject_prefix . $service;
        
        // Construire le corps de l'email
        $email_content = "Nouveau message de contact depuis le site SRS Notaires\n\n";
        $email_content .= "----------------------------------------\n\n";
        $email_content .= "Nom: $name\n";
        $email_content .= "Email: $email\n";
        $email_content .= "Téléphone: $phone\n";
        $email_content .= "Service demandé: $service\n\n";
        $email_content .= "Message:\n";
        $email_content .= "$message\n\n";
        $email_content .= "----------------------------------------\n";
        $email_content .= "Envoyé le: " . date('d/m/Y à H:i:s') . "\n";
        
        // En-têtes de l'email
        $email_headers = "From: $name <$email>\r\n";
        $email_headers .= "Reply-To: $email\r\n";
        $email_headers .= "X-Mailer: PHP/" . phpversion();
        
        // Envoyer l'email
        if (mail($recipient_email, $subject, $email_content, $email_headers)) {
            // Rediriger vers une page de confirmation
            header("Location: contact.html?success=1");
            exit;
        } else {
            $errors[] = "Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer.";
        }
        
    }
    
    // S'il y a des erreurs, les afficher
    if (!empty($errors)) {
        echo "<!DOCTYPE html>";
        echo "<html lang='fr'>";
        echo "<head>";
        echo "<meta charset='UTF-8'>";
        echo "<title>Erreur - SRS Notaires</title>";
        echo "<style>";
        echo "body { font-family: Arial, sans-serif; padding: 50px; background: #f5f5f5; }";
        echo ".error-container { max-width: 600px; margin: 0 auto; background: white; padding: 30px; border-radius: 10px; box-shadow: 0 5px 20px rgba(0,0,0,0.1); }";
        echo "h1 { color: #dc3545; }";
        echo "ul { color: #721c24; background: #f8d7da; padding: 20px; border-radius: 5px; }";
        echo ".back-button { display: inline-block; margin-top: 20px; padding: 12px 30px; background: #2c5f8d; color: white; text-decoration: none; border-radius: 5px; }";
        echo "</style>";
        echo "</head>";
        echo "<body>";
        echo "<div class='error-container'>";
        echo "<h1>⚠️ Erreur</h1>";
        echo "<ul>";
        foreach ($errors as $error) {
            echo "<li>$error</li>";
        }
        echo "</ul>";
        echo "<a href='contact.html' class='back-button'>← Retour au formulaire</a>";
        echo "</div>";
        echo "</body>";
        echo "</html>";
    }
    
} else {
    // Si la page est accédée directement, rediriger vers le formulaire
    header("Location: contact.html");
    exit;
}
?>

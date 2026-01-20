<?php
// Configuration des emails
$recipient_email = "infos@srs-notaires.com";
$cc_email = "srsnotaires@gmail.com";
$subject_prefix = "Nouveau message depuis SRS Notaires - ";

// Vérifier si le formulaire a été soumis
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Récupérer et nettoyer les données du formulaire
    $prenom = strip_tags(trim($_POST["prenom"] ?? ""));
    $nom = strip_tags(trim($_POST["nom"] ?? ""));
    $email = filter_var(trim($_POST["email"] ?? ""), FILTER_SANITIZE_EMAIL);
    $telephone = strip_tags(trim($_POST["telephone"] ?? ""));
    $service = strip_tags(trim($_POST["service"] ?? "Non spécifié"));
    $sujet = strip_tags(trim($_POST["sujet"] ?? ""));
    $message = strip_tags(trim($_POST["message"] ?? ""));
    
    // Nom complet
    $nom_complet = trim($prenom . " " . $nom);
    
    // Validation des champs
    $errors = array();
    
    if (empty($prenom)) {
        $errors[] = "Le prénom est requis.";
    }
    
    if (empty($nom)) {
        $errors[] = "Le nom est requis.";
    }
    
    if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Une adresse email valide est requise.";
    }
    
    if (empty($telephone)) {
        $errors[] = "Le téléphone est requis.";
    }
    
    if (empty($sujet)) {
        $errors[] = "Le sujet est requis.";
    }
    
    if (empty($message)) {
        $errors[] = "Le message est requis.";
    }
    
    // Si pas d'erreurs, envoyer l'email
    if (empty($errors)) {
        
        // Construire le sujet
        $email_subject = $subject_prefix . $sujet;
        
        // Construire le corps de l'email
        $email_content = "Nouveau message de contact depuis le site SRS Notaires\n\n";
        $email_content .= "============================================\n\n";
        $email_content .= "INFORMATIONS DU CONTACT\n\n";
        $email_content .= "Nom complet: $nom_complet\n";
        $email_content .= "Prénom: $prenom\n";
        $email_content .= "Nom: $nom\n";
        $email_content .= "Email: $email\n";
        $email_content .= "Téléphone: $telephone\n";
        $email_content .= "Service demandé: $service\n";
        $email_content .= "Sujet: $sujet\n\n";
        $email_content .= "============================================\n\n";
        $email_content .= "MESSAGE\n\n";
        $email_content .= "$message\n\n";
        $email_content .= "============================================\n\n";
        $email_content .= "Envoyé le: " . date('d/m/Y à H:i:s') . "\n";
        $email_content .= "Depuis: Site web SRS Notaires\n";
        
        // En-têtes de l'email avec CC
        $email_headers = "From: SRS Notaires <no-reply@srsnotaire.com>\r\n";
        $email_headers .= "Reply-To: $nom_complet <$email>\r\n";
        $email_headers .= "Cc: $cc_email\r\n";
        $email_headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
        $email_headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
        
        // Envoyer l'email
        if (mail($recipient_email, $email_subject, $email_content, $email_headers)) {
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
        echo "<meta name='viewport' content='width=device-width, initial-scale=1.0'>";
        echo "<title>Erreur - SRS Notaires</title>";
        echo "<style>";
        echo "* { margin: 0; padding: 0; box-sizing: border-box; }";
        echo "body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding: 50px 20px; background: linear-gradient(135deg, #2c5f8d, #1e4a6f); min-height: 100vh; }";
        echo ".error-container { max-width: 600px; margin: 0 auto; background: white; padding: 40px; border-radius: 20px; box-shadow: 0 20px 60px rgba(0,0,0,0.3); }";
        echo "h1 { color: #dc3545; font-size: 2rem; margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.75rem; }";
        echo "ul { color: #721c24; background: linear-gradient(135deg, #f8d7da, #f5c6cb); padding: 20px 20px 20px 40px; border-radius: 12px; margin-bottom: 1.5rem; border-left: 4px solid #dc3545; }";
        echo "ul li { margin-bottom: 0.5rem; line-height: 1.6; }";
        echo ".back-button { display: inline-block; padding: 14px 32px; background: linear-gradient(135deg, #c5cf67, #b3bd55); color: white; text-decoration: none; border-radius: 12px; font-weight: 600; transition: all 0.3s ease; box-shadow: 0 4px 12px rgba(197, 207, 103, 0.3); }";
        echo ".back-button:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(197, 207, 103, 0.4); }";
        echo "</style>";
        echo "</head>";
        echo "<body>";
        echo "<div class='error-container'>";
        echo "<h1>⚠️ Erreur de validation</h1>";
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

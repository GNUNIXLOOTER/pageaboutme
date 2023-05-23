<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los datos del formulario
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);
    
    // Configurar destinatario, asunto y cabeceras

    $destinatario = "tuemail@ejemplo.com"; // Cambiar por tu email
    $asunto = "Nuevo mensaje de: $name";
    
    $cabeceras  = "MIME-Version: 1.0" . "\r\n";
    $cabeceras .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $cabeceras .= "From: $name <$email>" . "\r\n";    
    
    // Construir el cuerpo del correo en formato HTML
    $cuerpoMensaje = "<html><body>";
    $cuerpoMensaje .= "<table>";
    $cuerpoMensaje .= "<tr><td>Nombre: </td><td>$name</td></tr>";
    $cuerpoMensaje .= "<tr><td>Email: </td><td>$email</td></tr>";
    $cuerpoMensaje .= "<tr><td>Mensaje: </td><td>$message</td></tr>";
    $cuerpoMensaje .= "</table>";
    $cuerpoMensaje .= "</body></html>";

    // Enviar el correo
    if (mail($destinatario, $asunto, $cuerpoMensaje, $cabeceras)) {
        header("Location: index.html?mail_send=1#contact-form");
    } else {
        echo 'Lo sentimos, ocurrió un error al enviar su mensaje. Por favor, intente nuevamente más tarde.';
    }
} else {
    header("Location: index.html");
}
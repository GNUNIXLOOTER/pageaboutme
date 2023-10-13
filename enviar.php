<?php

error_reporting(-1);
ini_set('display_errors', 'On');
set_error_handler("var_dump");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los datos del formulario y realizar la validación
    $name = isset($_POST["name"]) ? strip_tags(trim($_POST["name"])) : '';
    $email = isset($_POST["email"]) ? filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL) : '';
    $message = isset($_POST["message"]) ? trim($_POST["message"]) : '';

    // Validar que los campos requeridos no estén vacíos
    if (empty($name) || empty($email) || empty($message)) {
        //echo 'Por favor, complete todos los campos del formulario.';
        echo '<script>
        Swal.fire({
            position: "center",
            icon: "error",
            title: "¡Por favor, complete todos los campos del formulario.!",
            showConfirmButton: true,
        }).then(() =>{               
            window.location = "https://gnunixlooter.github.io/pageaboutme/#contacto";
        });
        </script>';
    } else {
        // Configurar destinatario, asunto y cabeceras
        $destinatario = "andresparradoparrado@gmail.com"; // Cambiar por tu email
        $asunto = "Nuevo mensaje de: $name";

        $cabeceras  = "MIME-Version: 1.0" . "\r\n";
        $cabeceras .= "Content-type:text/html;charset=UTF-8" . "\r\n";
        $cabeceras .= 'From: <' . $email . '>' . "\r\n";

        // Construir el cuerpo del correo en formato HTML
        $cuerpoMensaje = "<html><body>";
        $cuerpoMensaje .= "<table>";
        $cuerpoMensaje .= "<tr><td>Nombre: </td><td>$name</td></tr>";
        $cuerpoMensaje .= "<tr><td>Email: </td><td>$email</td></tr>";
        $cuerpoMensaje .= "<tr><td>Mensaje: </td><td>$message</td></tr>";
        $cuerpoMensaje .= "</table>";
        $cuerpoMensaje .= "</body></html>";

        $enviar = mail($destinatario, $asunto, $cuerpoMensaje, $cabeceras);

        // Enviar el correo
        if ($enviar) {
            //header("Location: index.html?mail_send=1#contact-form");
            echo '<script>
				Swal.fire({
					position: "center",
					icon: "success",
					title: "¡El mensaje se envió exitosamente!",
					showConfirmButton: false,
					timer: 1500
				}).then(() =>{               
					window.location = "https://gnunixlooter.github.io/pageaboutme/#contacto";
				});
				</script>';
        } else {
            //echo 'Lo sentimos, ocurrió un error al enviar su mensaje. Por favor, intente nuevamente más tarde.';
            echo '<script>
				Swal.fire({
					position: "center",
					icon: "error",
					title: "¡SE PRODUJO UN ERROR AL ENVIAR EL MENSAJE, VERIFICA QUE EL CORREO SEA VALIDO Y EXISTENTE!",
					showConfirmButton: true,
				}).then(() =>{               
					window.location = "https://gnunixlooter.github.io/pageaboutme/#contacto";
				});
				</script>';
        }
    }
} else {
    header("Location: index.html");
}
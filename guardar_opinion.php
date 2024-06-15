<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $opinion = $_POST['opinion'];
    $archivo = 'opiniones.txt';

    // Guardar la opinión en el archivo
    file_put_contents($archivo, $opinion . PHP_EOL, FILE_APPEND);

    echo "Opinión guardada";
} else {
    echo "Método no permitido";
}
?>
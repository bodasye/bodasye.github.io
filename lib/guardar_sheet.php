<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $guests = $_POST['guests'];
    $event = $_POST['event'];
    $message = $_POST['message'];

    // Abre o crea el archivo CSV (la hoja de cálculo simulada)
    $csvFile = fopen('datos.csv', 'a');

    // Escribe los datos en el archivo CSV
    fputcsv($csvFile, [$name, $email, $guests, $event, $message]);

    // Cierra el archivo CSV
    fclose($csvFile);

    echo 'Datos guardados exitosamente.';
} else {
    echo 'Método no permitido.';
}

?>
s
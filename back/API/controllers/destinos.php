<?php
require "../models/destino.php"; // Importar el modelo
$destinoModel= new Destino($pdo); // Crear una instancia del modelo
function obtenerDestinos() {
    global $destinoModel;
    echo json_encode($destinoModel->obtenerTodos());
}
?>
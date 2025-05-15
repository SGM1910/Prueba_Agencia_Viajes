<?php
require "../models/destino.php"; // Importar el modelo
function obtenerDestinos() {
    global $destinoModel;
    echo json_encode($destinoModel->obtenerTodos());
}
?>
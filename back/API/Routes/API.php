<?php
require "../controllers/destinos.php";
$requestMethod = $_SERVER["REQUEST_METHOD"];
$seccion = $_GET["seccion"];

if ($requestMethod == "GET") {

    if ($seccion == "destinos") {
        
        obtenerDestinos();
}}
?>
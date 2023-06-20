<?php
error_reporting(0);
include 'php/class/DB.php';
$user = $_POST['usuario'];
$pass = $_POST['password'];

$login= DB::verUsuario($user, $pass);
if($_SESSION['conn']===true){
     echo '<input type="button" value="Tu cuenta" class="boton botoncolor" id="botonen5">';  
}else{
    echo '<input type="button" value="Registrarse" class="boton botoncolor" id="botonen6">';
}


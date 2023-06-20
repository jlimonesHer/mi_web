<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of DB
 *
 * @author luism
 */
class DB {

    public static function conn() {

        try {
            include '.env.php';
            $conn = new PDO("mysql:host=" . SERVIDOR . ";dbname=" . BD, USUARIO, PASSWORD);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $conn;
        } catch (PDOException $e) {
            echo "HA FALLADO LA CONEXIÓN: " . $e->getMessage();
        }
    }

    /**
     * consulta un usuario por nombre
     * @param string $nombre
     * @return array
     * 
     * 
     * 
     * ESTA NO ES!!!!!!!
     * 
     * 
     */
       public static function verUsuario($nombre, $pass) {
        $result = [];
        $conexion = self::conn();
        $sentencia = "SELECT * from usuarios where nombre = :nom";
        $consulta = $conexion->prepare($sentencia);
        $consulta->execute(array(":nom" => $nombre));
        while ($fila = $consulta->fetch(PDO::FETCH_ASSOC)) {
            if(password_verify($_POST['password'], $fila['pass'])){
                session_start();
                $_SESSION['conn'] = true;
                $_SESSION['id'] = $fila['id'];
                $_SESSION['nombre'] = $fila['nombre'];
                $_SESSION['pass'] = $fila['pass'];
                $_SESSION['email'] = $fila['email'];
                $_SESSION['telefono'] = $fila['telefono'];
                $_SESSION['rol'] = $fila['rol'];
                
            }   
        }

        $consulta->closeCursor();
        $conexion = null;
        return $result;
        
       }

    public static function verTodos() {
        $result = [];
        $conexion = self::conn();
        $sentencia = "Select * from usuarios";
        $consulta = $conexion->prepare($sentencia);
        $consulta->execute();
        while ($fila = $consulta->fetch(PDO::FETCH_OBJ)) {
            array_push($result, $fila);
        }
        $consulta->closeCursor();
        $conexion = null;
        return $result;
    }

    /**
     * inserta en la tabla usuarios
     * @param string $nombre
     * @param string $email
     * @param string $contrasena
     */
    public static function insertar($nombre, $email, $contrasena) {
        $conexion = self::conn();
        $sentencia = 'INSERT INTO usuarios (nombre, email, contrasena) VALUES (:nombre, :email, :contrasena)';
        $consulta = $conexion->prepare($sentencia);
        $consulta->bindParam(":nombre", $nombre);
        $consulta->bindParam(":email", $email);
        $consulta->bindParam(":contrasena", $contrasena);
        $consulta->execute();
        $consulta->closeCursor();
        $conexion = null;
        echo "registro insertado";
    }

    public static function actualizar($nuevoNombre, $nombre) {

        $conexion = self::conn();
        $sentencia = "UPDATE usuarios SET nombre = :nuevoNombre WHERE  nombre = :nombre";
        $consulta = $conexion->prepare($sentencia);
        $consulta->bindParam(":nombre", $nombre);
        $consulta->bindParam(":nuevoNombre", $nuevoNombre);
        $consulta->execute();
        $consulta->closeCursor();
        $conexion = null;
        echo "registro actualizado";
    }

    public static function borrar($nombre) {


        $conexion = self::conn();
        $sentencia = "DELETE FROM usuarios WHERE nombre = :nombre ";
        $consulta = $conexion->prepare($sentencia);
        $consulta->bindParam(":nombre", $nombre);
        $consulta->execute();
        $consulta->closeCursor();
        $conexion = null;
        echo "registro borrado";
    }

}

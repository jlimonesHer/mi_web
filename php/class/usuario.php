<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of usuario
 *
 * @author User
 */
class usuario {
    private static $id;
    private $nombre;
    private $pass;
    private $email;
    private $telefono;
    private $rol = array('usuario','cliente');
    
    public function __construct($nombre, $pass, $email, $telefono, $rol) {
        $this->nombre = $nombre;
        $this->pass = $pass;
        $this->email = $email;
        $this->telefono = $telefono;
        $this->rol = $rol;
    }
    public static function getId() {
        return self::$id;
    }

    public function getNombre() {
        return $this->nombre;
    }

    public function getPass() {
        return $this->pass;
    }

    public function getEmail() {
        return $this->email;
    }

    public function getTelefono() {
        return $this->telefono;
    }

    public function getRol() {
        return $this->rol;
    }

    public static function setId($id): void {
        self::$id = $id;
    }

    public function setNombre($nombre): void {
        $this->nombre = $nombre;
    }

    public function setPass($pass): void {
        $this->pass = $pass;
    }

    public function setEmail($email): void {
        $this->email = $email;
    }

    public function setTelefono($telefono): void {
        $this->telefono = $telefono;
    }

    public function setRol($rol): void {
        $this->rol = $rol;
    }
    
    public static function loginUser($param) {
        
    }






    public function loginUsuario() {
        
        include 'DB.php';
        
         $user = $_POST['nombre'];
         $pass = $_POST['password'];
        
        if($_SESSION['conn']===true){
            echo 'siiiiiiiiiiiiiiiiiii';
        }
    }

}

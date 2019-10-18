<?php

$host     = "localhost";
$port     = 3307;
$socket   = "MySQL";
$user     = "user";
$password = "root";
$dbname   = "gastosdb";

$conexion = new mysqli($host, $user, $password, $dbname, $port, $socket)
    or die ('Could not connect to the database server' . mysqli_connect_error());
 if (!$conexion) {

        die("Connection failed: " . mysqli_connect_error());
     
     }
     
 

?>
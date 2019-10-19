<?php

include 'conexion.php';


$descripcion = $_POST['descripcion'];
$precio = $_POST['precio'];
$fecha = $_POST['fecha'];
$fecha = explode("/", $fecha);


$dia = $fecha[1];
$mes = $fecha[0];
$año = $fecha[2];
$fecha = $año . '/'. $mes . '/'. $dia;

if (isset($descripcion) && isset($precio)){

    $query = "INSERT INTO gastos (descripcion , cantidad, fecha) VALUES ('$descripcion', '$precio', '$fecha')";

    $result = mysqli_query($conexion, $query);

   

  if (!$result) {
    die("Error " . mysqli_error($conexion));
    
  }

}

?>
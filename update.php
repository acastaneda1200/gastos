<?php

include 'conexion.php';



$descripcion = $_POST['descripcion'];
$precio = $_POST['precio'];
$fecha = $_POST['fecha'];
$fecha = explode("/", $fecha);
$id = $_POST['id'];


$dia = $fecha[0];
$mes = $fecha[1];
$año = $fecha[2];
$fecha = $año . '/'. $mes . '/'. $dia;

if (isset($descripcion) && isset($precio) && isset($fecha)){

    $query = "UPDATE  gastos SET descripcion = '$descripcion', cantidad = $precio, fecha = '$fecha' where idgastos = $id";

    

    $result = mysqli_query($conexion, $query);

   

  if (!$result) {
    die("Error " . mysqli_error($conexion));
    
  }

}

?>
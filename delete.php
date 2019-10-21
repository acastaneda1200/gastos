<?php

include 'conexion.php';


$id = $_POST['id'];

    $query = "delete from gastos where idgastos = $id";

    $result = mysqli_query($conexion, $query);

   

  if (!$result) {
    die("Error " . mysqli_error($conexion));
    
  }



?>
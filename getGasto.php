<?php

include 'conexion.php';

    $id = $_POST['id'];

    $query = "select idgastos, descripcion, cantidad, DATE_FORMAT(fecha, '%d/%m/%Y') as fecha from gastos where idgastos = $id";

    $result = mysqli_query($conexion, $query);

    while($row = mysqli_fetch_assoc($result))
    {
        $data[] = $row;
    }
    $data = json_encode($data);
    echo $data;
   

  if (!$result) {
    die("Error " . mysqli_error($conexion));
    
  }



?>
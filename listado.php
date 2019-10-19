<?php

include 'conexion.php';


$query = "select idgastos, descripcion, cantidad, DATE_FORMAT(fecha, '%d-%M-%Y') as fecha from gastos";
$result = mysqli_query($conexion, $query);
if(!$result) {
  die('Query Failed'. mysqli_error($conexion));
}


while($row = mysqli_fetch_assoc($result))
{
    $data[] = $row;
}
$data = json_encode($data);
echo $data;
?>
<?php

include 'conexion.php';


$query = "SELECT * from gastos";
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
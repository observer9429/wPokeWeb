<?php

include("conexion.php");

$elpdo=conectar();

$idmaestro=$_POST['id'];

try {


$sql_leer='SELECT * FROM lospokemones WHERE idmaestro=? ';

    $leer=$elpdo->prepare($sql_leer);
    $leer->execute(array($idmaestro));

    $resultado=$leer->fetchAll();

     
    echo json_encode($resultado);

} catch (PDOException $e) {

    print "este Error:".$e->getMessage()."<br/>";

    die();
    
}



?>
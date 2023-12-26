<?php

include("conexion.php");

$elpdo=conectar();

$idpokemon=$_POST['idpokemon'];
$linkimagen=$_POST['linkimagen'];
$nombre=$_POST['nombre'];
$ataque=$_POST['ataque'];
$defensa=$_POST['defensa'];
$idmaestro=$_POST['idmaestro'];

try {

    

    
    
    //echo json_encode('Base conectada');

    $sql_agregar='INSERT INTO lospokemones(idpokemon,linkimagen, nombre,ataque, defensa, idmaestro)
     VALUES (?,?,?,?,?,?)';

     $sentencia_agregar=$elpdo->prepare($sql_agregar);
    //colocamos el nombre que se le ha asignado al guardarlos en variables
     $sentencia_agregar->execute(array($idpokemon,$linkimagen,$nombre,$ataque,$defensa,$idmaestro));


    echo json_encode("pokemon agregado con éxito");

   // $elpdo=null;
} catch (PDOException $e) {

    print "este Error:".$e->getMessage()."<br/>";

    die();
    
}



?>


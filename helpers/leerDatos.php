<?php

/*
$usuario=$_POST['usuario'];
$clave=$_POST['clave'];

if($usuario==='' || $clave===''){
    echo json_encode('Debe llenar todos los campos');
}else{
    echo json_encode('correcto: <br> Usuario:'.$usuario.'<br> Pass:'.$clave);
}
*/

// Configuración de la conexión a la base de datos
/*
$link='mysql:host=localhost;dbname=usuarios_pokemon';

$usuario='root';
$clave='';
*/
include("conexion.php");

$elpdo=conectar();

try {

   // $pdo= new PDO($link,$usuario,$clave); 

    

    //echo json_encode('Base conectada');

    $sql_leer='SELECT * FROM lista_usuarios';
    $_dato=$elpdo->prepare($sql_leer);
    $_dato->execute();

    $resultado=$_dato->fetchAll();

    echo json_encode($resultado);
} catch (PDOException $e) {

    print "este Error:".$e->getMessage()."<br/>";

    die();
    
}








?>
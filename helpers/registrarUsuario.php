<?php



include("conexion.php");
//la funcion conectar ya viene del conexion.php
$elpdo=conectar();


$nombre=$_POST['nombre'];
$paterno=$_POST['aPaterno'];
$materno=$_POST['aMaterno'];
$email=$_POST['elEmail'];
$usuario=$_POST['usuario'];
$clave=$_POST['clave'];

$values = [$nombre,$materno,$paterno, $usuario,$email, $clave];


try {

    

    

    //echo json_encode('Base conectada');

    $sql_agregar='INSERT INTO lista_usuarios(nombres,apellido_paterno, apellido_materno,correo,usuario, clave)
     VALUES (?,?,?,?,?,?)';

     $sentencia_agregar=$elpdo->prepare($sql_agregar);
    //colocamos el nombre que se le ha asignado al guardarlos en variables
     $sentencia_agregar->execute(array($nombre,$paterno,$materno,$email,$usuario,$clave));


    echo json_encode("agregado con éxito");
} catch (PDOException $e) {

    print "este Error:".$e->getMessage()."<br/>";

    die();
    
}



?>
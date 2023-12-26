<?php



include("conexion.php");

$elpdo=conectar();

$usuario=$_POST['usuario'];
$clave=$_POST['clave'];
/*
$elpdo=conectar();


$nombre=$_POST['nombre'];
$paterno=$_POST['aPaterno'];
$materno=$_POST['aMaterno'];
$email=$_POST['elEmail'];
$usuario=$_POST['usuario'];
$clave=$_POST['clave'];

$values = [$nombre,$materno,$paterno, $usuario,$email, $clave];

*/


try {

    

    

    //echo json_encode('Base conectada');

    /*
    $sql_leer='SELECT USUARIO, CLAVE FROM lista_usuarios ';

    $leer=$elpdo->prepare($sql_leer);
    $leer->execute();

    $resultado=$leer->fetchAll();
*/
$sql_leer='SELECT * FROM lista_usuarios WHERE usuario=? and clave=?';

    $leer=$elpdo->prepare($sql_leer);
    $leer->execute(array($usuario,$clave));

    $resultado=$leer->fetchAll();

     
    echo json_encode($resultado);

} catch (PDOException $e) {

    print "este Error:".$e->getMessage()."<br/>";

    die();
    
}


?>
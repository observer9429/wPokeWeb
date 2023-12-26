<?php



include("conexion.php");

$elpdo=conectar();

$id_eliminar=$_POST['id'];
//$id_eliminar = json_decode($_POST['idBotonDelete'], true);
//$id_eliminar = json_decode($_POST['idBotonDelete'], true);
/*
$nombre=$_POST['nombre'];
$paterno=$_POST['aPaterno'];
$materno=$_POST['aMaterno'];
$email=$_POST['elEmail'];
$usuario=$_POST['usuario'];
$clave=$_POST['clave'];

$values = [$nombre,$materno,$paterno, $usuario,$email, $clave];
*/
//$id_eliminar="";

//echo json_encode($id_eliminar);



try {

    
    $sql_eliminar='DELETE FROM lista_usuarios  WHERE id =?';
    //$sql_leer='SELECT * FROM lista_usuarios WHERE usuario=? and clave=?';

    $eliminar=$elpdo->prepare($sql_eliminar);
    $eliminar->execute(array($id_eliminar));

    //$resultado=$leer->fetchAll();

     
    echo json_encode("Usuario Eliminado");
} catch (PDOException $e) {

    print "este Error:".$e->getMessage()."<br/>";

    die();
    
}









?>
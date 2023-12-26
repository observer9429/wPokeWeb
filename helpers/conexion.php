<?php

function conectar(){

    $link='mysql:host=localhost;dbname=usuarios_pokemon';

    $usuario='root';
    $clave='';

    try {

       $pdo= new PDO($link,$usuario,$clave);

        return $pdo;

       // echo json_encode("la conexión tuvo éxito 007");
    } catch (PDOException $e) {

        print "este Error:".$e->getMessage()."<br/>";

        die();
        
    }

}





?>
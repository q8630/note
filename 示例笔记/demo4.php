<?php
/**
 * Created by PhpStorm.
 * User: 高先生
 * Date: 2018/10/22
 * Time: 16:03
 */

if(isset($_GET["user"]) && isset($_GET["age"])){
    $user = $_GET["user"];
    $age = $_GET["age"];
//    echo "user is $user<br>";
//    echo "pass is $pass<br>";
    $json = array();
    $json["user"]=$user;
    $json["age"] = $age;
//    var_dump($json);
//    json_encode()
//    json_decode()
     echo json_encode($json);
}
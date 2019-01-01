<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<?php
//1   链接
//$host = '', $user = '', $password = '', $database = '', $port = '',
   $link =  mysqli_connect("localhost",
        "root",
        "",
        "shop");
// 1.1  设置编码
    mysqli_set_charset($link,"utf8");
//2   编写sql语句
//   $sql = "INSERT INTO tb_shop(shopname,shopdescribe,shopprice) VALUES ('大白菜','产自长白山的大白菜',12.5)";
    $sql = "select * from tb_shop";
//3   运行
    //$link, $query
//* For successful SELECT, SHOW, DESCRIBE or EXPLAIN queries, mysqli_query() will return a mysqli_result object.
// * For other successful queries mysqli_query() will return TRUE.
   $result = mysqli_query($link,$sql);

//4   看结果
//Fetch a result row as an associative, a numeric array, or both.
  ;
//   var_dump($arr)
//
//    while ( $arr =  mysqli_fetch_array($result) ){
//        echo $arr["shopname"];
//        echo $arr["shopdescribe"];
//        echo "<hr>";
//    }
?>
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>

<?php
// 插入功能
// 2链接数据库
$link = mysqli_connect("localhost",
    "root",
    "",
    "shop");
mysqli_set_charset($link,"utf8");
// 1 获取从前台传递过来的数据
    // 验证数据存不存在
    if(isset($_GET["shopname"])
&& isset($_GET["shopdescribe"])
&& isset($_GET["shopprice"])){

        $name = $_GET["shopname"];
        $des= $_GET["shopdescribe"];
        $price = $_GET["shopprice"];
// 3 编写sql语句
        $sql = "INSERT INTO  tb_shop
                    (shopname,shopdescribe,shopprice) 
                VALUES ('$name','$des',$price)";
        // 4 执行
        $result = mysqli_query($link,$sql);
        // 5  ok  弹出插入成功  filed 弹出插入失败
        if($result){
            echo "<script>alert('插入成功')</script>";

        }else{
            echo "<script>alert('插入失败')</script>";
        }
    }
?>

<form action="demo2.php">

    <input type="text" name="shopname">
    <input type="text" name="shopdescribe">
    <input type="text" name="shopprice">
    <input type="submit">
</form>

<ul>

    <li>
        <h3>name</h3>
        <h4>describe</h4>
        <h5>price</h5>
    </li>
</ul>


</body>
</html>
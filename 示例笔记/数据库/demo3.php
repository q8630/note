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
        echo "<script>location.href = 'demo2.php'</script>";
    }
?>

<form action="demo2.php">

    <input type="text" name="shopname">
    <input type="text" name="shopdescribe">
    <input type="text" name="shopprice">
    <input type="submit">
</form>






<ul>
    <?php
    $sql = "select * from tb_shop";
    $result = mysqli_query($link,$sql);
    while ( $arr =  mysqli_fetch_array($result) ){
        ?>
        <li>
            <h3 style="color: red"><?php echo $arr["shopname"];?></h3>
            <h4 style="color: green"><?php  echo $arr["shopdescribe"];?></h4>
            <h5 style="color: blue"><?php echo $arr["shopprice"];?></h5>
        </li>
        <?php
    }
    ?>
</ul>


</body>
</html>
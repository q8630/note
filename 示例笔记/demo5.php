<?php
/**
 * Created by PhpStorm.
 * User: 高先生
 * Date: 2018/10/22
 * Time: 17:11
 */

//{
//    "id": 1,
//    "image": "img/1.jpg",
//    "name":" 长袖套装中长款毛衣件套时尚2018新款",
//    "shop":"喵喵旗舰店",
//    "price":"138.80"
//  }

if (isset($_GET["page"])){
    $page = $_GET["page"];
}else{
    $page = 0;
}
//  arr代表数据库中所有的商品
//  arr中暂时存在四页数据
//  根据page传递过来的值返回数据
$arr = array();
$arr[0] = array();

for ($i = 0;$i<10;$i++){
    $arr[0][] = array("id"=>1,
        "image"=>"img/1.jpg",
        "name"=>" 长袖套装中长款毛衣件套时尚2018新款",
        "shop"=>"喵喵旗舰店",
        "price"=>"138.80");

}
for ($i = 0;$i<10;$i++){
    $arr[1][] = array("id"=>1,
        "image"=>"img/2.jpg",
        "name"=>" 长袖套装中长款毛衣件套时尚2018新款",
        "shop"=>"喵喵旗舰店",
        "price"=>"138.80");

}
for ($i = 0;$i<10;$i++){
    $arr[2][] = array("id"=>1,
        "image"=>"img/3.jpg",
        "name"=>" 长袖套装中长款毛衣件套时尚2018新款",
        "shop"=>"喵喵旗舰店",
        "price"=>"138.80");

}
for ($i = 0;$i<10;$i++){
    $arr[3][] = array("id"=>1,
        "image"=>"img/4.jpg",
        "name"=>" 长袖套装中长款毛衣件套时尚2018新款",
        "shop"=>"喵喵旗舰店",
        "price"=>"138.80");

}
//  从从数组中获取对应页码的数据
$json = $arr["$page"];

echo  json_encode($json);


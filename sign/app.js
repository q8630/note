/**
 * Created by 雨 on 2018/12/13.
 */
// 项目执行文件
/*引入express res.send
中间件：express-router express.static()  bodyparser
* sessinon cookie use
*
* */
var express = require("express");
// 处理post请求
var bodyParser = require("body-parser");
// 处理cookie信息
var cookieParser = require("cookie-parser");
// 处理错误日志
var morgan = require("morgan");
// 保存session信息      有可能存储失效     connect-flash中间件解决
/*
* 下载 npm i connect-flash --save
* 引入 var flash= require("connect-flash")
* app.use(flash())
*
* */
var session = require("express-session");
//var MongoStore = require("connect-mongo")(session);
//path  node内置的模块
var path = require("path");
var Index = require("./model/index");

var app = express();
// 接收post请求
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
// 使用cookie
app.use(cookieParser());
// 错误处理日志  dev pro
app.use(morgan("dev"));
// 处理session
//console.log(session);
//session和cookie的区别？    web安全 xss csrf
app.use(session({
    secret:"fcht",  // session 的名称
    name:"fcht",  // session 的名称
    cookie:{maxAge:99999},  // 失效时间 ms
    resave:false,       // 是否每次重新获取session信息
    saveUninitialized:true,     //是否每次初始化
    //store:new MongoStore({
    //    host:"locahost",
    //    port:27017,
    //    db:"app"
    //})
}));

// 静态资源目录   path.join(去掉多余的“/”)    path.resovle
app.use(express.static(path.join(__dirname,"public")));


//跨域处理  配置参数和配置参数的意思   app.all()
// cors  get  post
app.all("*",function(req,res,next){
    "use strict";
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Content-type");
    res.header("Access-Control-Allow-methods","GET POST DELETE PATCH OPTIONS");
    res.header("Access-Control-Max-Age",9999); //过期时间
    // 允许接收cookie信息
    next()
});

app.use("/Handler",Index);
var db = require("./model/db");
module.exports=app;

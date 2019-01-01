// 编写接口的正式文件
var express = require("express");
var fs = require("fs");

// 路由
var router = express.Router();
// 处理表单
var fd = require("formidable");
// 时间
var sd = require("silly-datetime");
//  加密
var crypto = require("crypto");
// 引入数据库文件
var db = require("./db");
var ObjectID = require("mongodb").ObjectId;

//  接口文件
//验证码
/*
* 路径    http://127.0.0.1:3000/Handler/AdminHandler?type=veri
* req.url
* veri 验证码
* 随机数  Math.random()

* */

router.get("/AdminHandler",function(req,res){
    var type = req.query.type;
    switch (type){
        case "veri":
        var random = function(max,min){
            return Math.floor(Math.random()*(max-min)+min);
        };
        var str ="ABCDEFGHIGKLMNOPQRSTUVWXYZ0123456789";
        var rTxt = '';
            for (var i = 0; i < 4; i++) {
                var txt = str[random(0,str.length)];
                rTxt+=txt;
            }
            req.session.veri =rTxt;

            res.send({"success":"ok","data":rTxt});
        break;
        case "checkveri":
            if(req.query.veri === req.session.veri){
                res.send({"success":"校验成功"})
            }else {
                res.send({"success":"验证码不正确"})
            }
        break;
        case "returnInfo":
            /*
             * 如果id存在的话就去查找当前的用户的信息
             *
             * */
            if(req.session.username&&req.session._id){
                var newid = new ObjectID(req.session._id); // 如果存储时变量时为id，生成的id 会覆盖（更新）
                //var obj = new ObjectID(new );
                console.log(req.session.id);
                db.find("admin",{"_id":newid},
                    function(err,result){
                        res.send(result)
                    })
            }else {
                res.send({"err":"未登录"})
            }
            break;
        case "quit":
            if(req.session.username && req.session.password &&req.session._id){
                req.session.username ="";
                req.session.password ="";
                req.session._id ="";
            }
            res.send({"success":"退出成功"});
        break;
    }
    //if(name == session.username){
    //    if(password == session.password){
    //        res.send("登录成功")
    //    }else {
    //        res.send("密码错误")
    //    }
    //}else {
    //    res.send('用户名不存在')
    //}
});
router.post("/AdminLoginHandler",function(req,res){
    var type = req.query.type;
    //var name = req.query.username;
    //var password = req.query.password;
    switch (type){
        case "login":
            db.find("admin",{
                /*
                * md5 加密
                * 加密方式 base64 digest(req.body.password)
                * md5 加密方式的特点
                *
                * hash  base64 ssh 对等加密
                *
                * */
                "username":req.body.username,
                "password":req.body.password},function(err,result){
                if(result.length == 0){
                    res.send({"err":"灭有此用户或密码错误"});
                    //  &&result[0].password===password
                }else if(result.length!=0){
                    req.session.username =req.body.username;
                    req.session.password =req.body.password;
                    //id
                    req.session._id = result[0]._id;
                    console.log(result[0]._id);
                    res.send({"success":"登录成功"})
                }
            });
        break;
    }
});



module.exports=router;

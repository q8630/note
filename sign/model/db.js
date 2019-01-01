// 创建客户端
var MongoClient = require("mongodb").MongoClient;
// 取到数据库路径
var setting = require("./settings");
// mongodb：27017默认数据库地址
function connectDB(callback) {
    var url = setting.url;
    // 连接
    MongoClient.connect(url, function(err,db){
        var dbName =db.db("text");
        if (err) {
            callback(err, null);
            return
        }
        callback(err, db,dbName)
    });
}
//collectionName  集合名称  json 数据  callback回调函数
// 添加
exports.add = function(collectionName,json,callback){
    connectDB(function(err,db,dbName){

        dbName.collection(collectionName).insertOne(json,function(err,result){
            callback(err,result);
            db.close()
        })
    })
};
// 删除
exports.del = function(collectionName,json,callback){
    connectDB(function(err,db,dbName){

        dbName.collection(collectionName).removeOne(json,function(err,result){
            callback(err,result);
            db.close()
        })
    })
};

// 更新
exports.update = function(collectionName,oldjson,newjson,callback){
    connectDB(function(err,db,dbName){

        dbName.collection(collectionName).updateOne(oldjson,newjson,function(err,result){
            callback(err,result);
            db.close();
        })
    })
};
//查找
exports.find = function(collectionName,json,callback){
    connectDB(function(err,db,dbName){

        dbName.collection(collectionName).find(json).toArray(function(err,result){
            callback(err,result);
            db.close()
        })
    })
};


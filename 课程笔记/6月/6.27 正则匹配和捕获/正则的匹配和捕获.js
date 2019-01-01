


//let str = 'gebilaowang2018laowang 2019kk21212hhj';
//let reg = /\d+/g;
//
////console.log(reg.exec('gebilaowang'));
////console.log(reg.exec(str));
////
//////LAST-INDEX 不变导致了正则捕获的懒惰性
////console.log(reg.lastIndex); //正则捕获从0开始 ，
////// 下一次在字符串中开始查找索引
////console.log(reg.exec(str));
////
//////手动修改lastIndex不起作用
////console.log(reg.lastIndex);
////console.log(reg.exec(str));
////console.log(reg.exec(str));
////
////console.log(reg.lastIndex);
//
//
//
//
//RegExp.prototype.myExecAll =function(str){
//    // this:reg 当前操作的正则
//    // str: 我们要补货的字符串
//    // 执行EXEC开始捕获，集体捕获多少次不定，但是一直捕获不到内容（null）为止，
// //   期间把捕获到的内容存储到数组中即可
// //   为了防止出现死循环L我们检测一个正则是否加 g  ，
// //   没有加G 只把第一次捕获结果返回即可
//    if (!this.global){
//        return this.exec(str)
//    }
//    let result =[],
//       valAry = this.exec(str);
//    while (valAry){ //this.lastIdex <str.length
//        result.push(valAry[0]); //把每次捕获到的结果第一项（具体捕获的内容）存储到容器中
//        valAry = this.exec(str);
//    }return result;
//};
//console.log(reg.myExecAll(str));
//console.log(str.match(reg));

//let str = 'gebilaowang2018';
//let reg = /\d+/g;
//console.log(reg.exec(str));
////console.log(str.match(reg));
////console.log(reg.lastIndex);
////console.log(8);
//console.log(reg.exec('gebilaowang2018sfsdfs2019'));



//时间字符串格式化的简单处理
//
//let str= "2018/3/23 20-50-07";
//ary = str.split(/(?:\/| |-)/);
//let [,month,day,hours,minutes,s]=ary,
//    result = `${month}:${day} ${hours}:${minutes}:${s}`;
//console.log(result);


//let str= "2018/3/23 20-50-07";
//let ary= str.match(/\d+/g).map(item => {
//    return item < 10? '0' +item : item ;
//});
////    MAP相当与FOR-EACH来讲多了返回值，函数中RETURN的是什么，
////   就是把当前数组中迭代的这一项替换成什么
//console.log(ary);



////时间字符串格式化
//
//String.prototype.myFormatTime =
//    function (template = '{0}年{1}月{2}日 {3}时{4}分{5}秒'){
//        let ary = this.match(/\d+/g).map(item => (item <10 ? '0' + item : item));
//        return template.replace(/\{(\d)\}/g,(...[, index]) =>ary [index] ||'00');
//
//    };
//let str = "2018-20-30";
//
//console.log(str.myFormatTime('{1}-{2} {3}:{4}'));


//var str = "abaabbaekehksjdfkjfasjfj";
//
////1、统计每个字母出现的次数-利用对象不重名的特质
//// 把每个字符作为属性名存入对象中，独处次数作为属性值
//var obj = {};
//for (var i = 0; i < str.length; i++) {
//    var cur = str.charAt(i);
//    if (obj[cur]){
//        obj[cur]++;
//    }else {
//        obj[cur]=1;
//    }
//}
//console.log(obj);
//
////2、 找出次数最多的字母
////假设法
//
//var maxStr = ""; //出现最多的字母
//var max = 0;  //出现最多的次数
//for (var key in obj ){
//    // obj[key] 次数
//    if (obj[key]>max){
//        max = obj[key];
//        maxStr = key;
//    }else  if(obj[key] ==max){
//        maxStr +="," +key;
//    }
//}
//console.log(maxStr, max);


var str = "abaabbaekehksjdfkjfasjfj";

var arg = str.split("");
console.log(arg);
arg.sort(function(a,b){
    return a.localeCompare(b);
});
str = arg.join("");
var reg = /(\w)\1*/g; //匹配相同的字母
var maxStr = "";
var max = 0;
str.replace(reg,function ($0,$1){
//$1 字母 $0.length 匹配字符出现的次数
    if($0.length>max){
        max =$0.length;
        maxStr = $1;
    }else if($0.length == max){
        maxStr +=","+ $1;
    }
});
console.log(maxStr, max);











////正则：用来处理字符串的规则
//1、正则只能用来处理字符串，
//2、处理一般包含 “正则获取/匹配”、“正则捕获”
//     1、验证当前字符串是否符号某个规则‘正则匹配’
//      2、把一个字符串中符合规则的字符串获取到‘正则捕获’

// 学习正则其实就是在学习如何编写规则，每一个正则都是由修饰“元字符”、“符”两部分组成

//如何编写规则
//每个正则都是 由修饰"元字符"，“符”两部分组成

//1、正则创建 的两种方式
 let reg1 = /^\d+$/g; //字面量方式
 let reg2 = new RegExp("^\\d+$","g"); //构造函数方式

//2、正则来攻斜杠直接包起来的都是“元字符”，
// 斜杠后面出现的都是“修饰符”
let reg = /^\d+$/g;

//3、常用的修饰符
//   i :ignoreCase 忽略大小写匹配
//   m: multiline 多行匹配
//   g: global 全局匹配


//4、常用的元字符
/*
*     特殊元字符
*     \d 0~9 之间的数字
*     \ D 非0~9 之间的任意字符
*     \w “数字、字母、下划线”中的任意一个 =>/[0-9a-zA-Z_]/等价与\w
*     \W 非“数字、字母、下划线”中的任意一个 =>/[^0-9a-zA-Z_]/等价与\W
*     \s 匹配任意的一个空白字符 （包括\t 制表符[TAB 键四个空格]）
*     \b 匹配边界符'zhu'(z 左边和u右边就是边界) 'zhu-feng'(z左边、u右边、f、左边、g右边是边界)
*     \n 匹配一个换行符
*     \转义字符（把一个普通字符转义为特殊的字符，例如：\d, 把有特殊含义的转换为普通的意思，例如 \. 此处的点不是任意字符，而是小数点）
*     . 不仅仅是小数点，代表除了\n 以外的任意字符
*     ^ 以某个元字符开头
*     $ 以某个元字符结尾
*     x|y x或y 中的任意一个（a\z...）
*     [xyz] x 或者y 或者 z 中的任意一个
*     [^xyz] 除了 x\y\z 以外的任意字符
*     [a-z] 获取a-z 中的任意一个字符
*     [^a-z]  除了 a-z 的任意字符
*     () 正则分组
*     (?:) 当前分组只匹配不捕获
*     (?=) 正向预查
*     (?!) 负向预查
*
*
*
*
* 【量词元字符： 让其左边的元字符出现多少次】
*
*   * 出现零到多次
*   ? 出现零到一次
*   + 出现一道多次
*   {n} 出现N次
*   {n,}  出现N 到多次
*   {n,m} 出现N到 M次
*
*
* 【普通元字符】
*   只要在正则中出现的元字符 （在基于字面方式创建），
 *  处理特殊和有量词意义的以外，其余的都是普通元字符
*

正则的捕获和匹配
 1、基于EXEC可以实现正则的捕获
   1、如果当前正则和字符串不匹配，捕获的结果是NULL
   2、如果匹配，捕获的结果是一个数组
     0： 大正则捕获的内容
     index ：正则捕获的起始索引
     input：原始操作的字符串
   懒惰性：   执行一次EXEC 只能捕获第一个和正则匹配的内容
          其余匹配的内容无法捕获，执行多次并无作用，“正则的捕获有懒惰性”
          只能捕获第一个匹配的内容，剩余的默认捕获不到
           解决方法：捕获的时候让全局匹配  加  g

            MATCH 方法有局限性，在正则设置了G的情况下，
          基于MATCH捕获的内容只有大正则匹配
          小分组的内容没有匹配出来（不加G的情况下和 EXEC的执行结果一样）

   贪婪性：

          正则捕获还具有贪婪性：每次匹配捕获的时候总是捕获和正则匹配中最长的内容
          例如： '2' 符号\d+ '2018' 也符合\d+ ，但是捕获的是最长的内容'2018'

          let str = 'gebilaowang{2018}laowang 2019kk21212hhj';
          let reg = /\d+?/g; // 把问号放到量词元字符后面
          //代表的就不是出现零次或者一次了，而是取消捕获的贪婪性

          console.log(reg.exec(str));  // ['2']
          console.log(reg.exec(str));  // ['2']
          console.log(str.match(rge));//  ['2']

 懒惰性
     2018a2019
     exec =>2018  exec =>2018  exec =>2018
     exec 捕获LAST-INDEX 不变导致了正则捕获的懒惰性
     解决懒惰性： 捕获的时候让全局匹配  +g
     exec =>2018   exec =>2019    exec =>null
 贪婪性
    2018a2019   \d+   2   2018   匹配到的是最长的字符串
    exec =>2018
    解决贪婪性 ： \d+?  可以解决贪婪 （匹配到的是最短的字符串）
    exec => 2

通过text捕获  通过$1 进行获取


test,exec,  match, replace

特长：
     match 能一次性把匹配的内容都拿到 str.match(reg)
     exec  在于处理分组，能拿到分组里的内容 reg.exec(str)
     replace 是字符串替换 str.replace ()
     str.replace(值类型或正则，数值类型和回调函数)

      时间格式化 fomatTime
      统计字符串中字符串出现的个数 已经出现次数最多的
      获取url地址 问号号码的值 （问号传参）
      获取url 地址 #（哈希 hash）后面的值（hash传参）

*/

//内置类 -String 类

/* charAt() 查找当前索引的对应的字符串
 charCodeA() 查找单曲索引的对应的字符串的 code 码
 concat()   字符串拼接
 indexOf()  检测某个字符（第一个字符） 在字符串中是否存在 不存在返回 -1  存在返回对应索引
 lastIdexOf()   检测某个字符（最后一个字符） 在字符串中是否存在 不存在返回 -1  存在返回对应索引

 match() 正则捕获
 replace() 替换
 search() 检索

 slice() 截取 （含头不含尾）
 split() 分割为数组
 substr() 截取
 substring() 截取 （含头不含尾）

 toLocaleLowerCase ()
 toLocaleUpperCase()
 toLowerCase()小写
 toUppercase() 大写

 trim() 去除空格 （存在兼容问题 利用正则解决兼容）
 trimLeft() 去除右边的空格
 trimRight()去除左边的空格
 valueOf() 返回的值
 */




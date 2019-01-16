var fs = require('fs');
fs.stat('D:/1111111.txt', fun); // 读取文件信息  回调函数有两个参数 错误和 stats 类
function fun (e, stats) {
  if (e) { console.log("wrong"); }
  else { console.log(stats) }

} //stats类中也有些方法 可以查看 api文档
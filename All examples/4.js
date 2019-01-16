var fs = require('fs');
try {
  console.log("writing");
  fs.writeFileSync('D:/1111111.txt', '这个参数放数据'); //同步写入数据
} catch (e) {
  console.log('出错');//发生错误后处理方式
}
//同步处理要用try catch 来检测错误防止 因错误导致文件退出

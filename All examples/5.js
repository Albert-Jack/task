var fs = require('fs');
console.log('开始写入');
fs.writeFile('D:/222222222222.txt', '这个参数放数据', fun);//对调函数只有一个参数  错误；
function fun (e) {
  if (e) { console.log("wrong"); }
  else { console.log('successed'); }
}//fun是对回调函数的声明 也可以直接在 函数参数时 声明
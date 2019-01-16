var fs = require('fs');
fs.appendFile('D:/1111111.txt', '      追加的内容', fun);
function fun (e) {
  if (e) { console.log("wrong"); }
  else { console.log('successed'); }
}
var fs = require('fs');
function copy (src, dist) {
  fs.readFile(src, fun);//先读取文件  然后在回调函数中将数据 写入另一个文件
  function fun (e, data) {
    if (e) { console.log("wrong when read"); }
    else {
      fs.writeFile(dist, data, function (e) { if (e) { console.log("wrong when write"); } else { console.log("succeed"); } })
    }
  }
}
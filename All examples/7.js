var fs = require('fs');
fs.readFile('D:/1111111.html', fun);
function fun (e, data) {
  if (e) { console.log("wrong"); }
  else {
    fs.writeFile('D:/test.html', data, function (e) { if (e) console.log('no') })
  }
}
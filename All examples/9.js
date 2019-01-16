var net = require('net');//加载 net模块
var servce = net.createServer(); //创建服务器
servce.on('connection', function () { console.log("someone appear") });//当有连接时
servce.on('listening', function () { console.log('监听成功') });//当监听成功时
servce.listen(3000, '127.0.0.1'); //监听的地址
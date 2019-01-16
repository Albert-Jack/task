var net = require('net');
var servce = net.createServer();
var count = 0;//用于统计人数
servce.on('connection', function (socket) {
  count++;
  console.log("there are" + count + "peoples");
  socket.write('ip' + socket.remoteAddress + '\n');
  socket.write(socket.remotePort.toString());     //必须是字符或者buffer流
});
servce.listen(3000, '127.0.0.1', function () { console.log('监听成功等待连接') });
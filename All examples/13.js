var net = require('net');
var servce = net.createServer();
servce.on('connection', function (socket) {
  socket.on('data', function (data) {
    console.log(data.toString());//on data 当客户端给服务器发送信息的时候触发 用于处理信息
  });
});
servce.listen(3000, '127.0.0.1');

/*
总结
net 模块 创建的服务器
被触发事件
servce.on('connection',callback(socket));//回调函数是一个套接字
套接字被触发事件
socket.on('data',callback(data))//回调函数是当前的数据
*/
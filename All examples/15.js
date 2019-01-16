var net = require('net');
var servce = net.createServer();
var users = []; //不同的用户有不同的套接字
var counts = 0; //计算用户数量
servce.on('connection', function (socket) {
  counts++;
  console.log("有" + counts + "台客户端连接");
  users.push(socket);//将当前套接字 加入到
  socket.on('data', function (data) {  //当客户端通过套接字写入数据时 接受数据
    data = data.toString().trim();
    console.log(data); //
    users.forEach(function (client) {  //遍历所有套接字
      if (client !== socket) {
        client.write(client.remotePort + ':' + data);//发送数据给客户端
      }
    });
  });
  socket.on('error', function () { console.log("有客户异常") })
});
servce.listen(3000, '127.0.0.1');

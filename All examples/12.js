var net = require('net');
var client = net.createConnection({ port: 3000 });//返回的cilent是一个socket对象
client.on('connect', function () {
  console.log('succeed'); //表明连接成功
  client.write("hello");//客户端发送给服务端的信息
});
client.on("data", function (data) {
  console.log(data.toString());
});//用于处理 服务端 发送过来的数据
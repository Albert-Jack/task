var net = require('net');
var cilent = net.createConnection({ port: 3000, host: '127.0.0.1' }); //建立客户端
cilent.on('connect', function () {
  process.stdin.on('data', function (data) {
    data = data.toString().trim();
    cilent.write(data); //将消息发送给服务端
  });
});
cilent.on('data', function (data) {
  console.log(data.toString())
});//当服务器发来消息时 触发 并处理消息
/*服务器与客户端 交互（通过套接字） 都要  发送数据 与 接受数据 */
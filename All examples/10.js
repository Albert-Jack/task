var net = require('net');
var server = net.createServer();
server.on('connection', function (socket) { console.log(socket); socket.write('<h1>hello</h1>') });//给客户终端 输出信息
server.listen(3000, '127.0.0.1');


/*
客户端
*/
var net = require('net');
//引用 net 模块
var config = require('./config');
//引用 自定义模块
var client = net.createConnection(
  {
    port: config.port,
    host: config.host
  }
);
//创建客户端（为一个套接字）
var userName;
client.on('connect', function () {
  console.log('请输入用户名');
  process.stdin.on('data', function (data) {
    data = data.toString().trim();
    if (!userName) {
      var send = {
        protocal: 'signup',
        userName: data
      }
      client.write(JSON.stringify(send));
      return;
    }
    var regex = /(.{1,18}):(.+)/;
    //正则表达式（用于判断所输入的内容）
    var matches = regex.exec(data);
    //将正则表达式与用户输入的数据匹配 比较
    if (matches) {
      var from = userName;
      var to = matches[1];
      var message = matches[2];
      var send = {
        protocal: 'p2p',
        from: from,
        to: to,
        message: message
      }
      client.write(JSON.stringify(send));
      //如果匹配成功 send 所发送的数据 从用户输入里提取
    } else {
      var send = {
        protocal: 'broadcast',
        from: userName,
        message: data
      }
      client.write(JSON.stringify(send));
    }
  });
})


//处理接收到的数据

client.on('data', function (data) {
  data = JSON.parse(data);
  switch (data.protocal) {
    case 'signup':
      switch (data.code) {
        case 1000:
          userName = data.userName;
          //  console.log(data.message);
          break;
        case 1001:
          //console.log(data.message);
          break;
        default: break;
      }
    case 'broadcast':
      console.log(data.message);
      break;
    case 'p2p':
      switch (data.code) {
        case 2000:
          console.log(data.message);
          break;
        case 2001:
          console.log(data.message);
          break;
        default: break;
      }
      break;
    default: break;
  }
})

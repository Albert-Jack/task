/*send = {
        protocal: 'p2p',
        from: from,
        to: to,
        message: message
      }*/
//p2p 点对点发送消息 参数当前套接字 数据 所有用户套接字
exports.p2p = function (socket, data, users) {
  var message = data.from + '对你悄悄说' + data.message
  var to = data.to;
  var receiver = users[to]
  if (!receiver) {
    var send = {
      protocal: 'p2p',
      code: 2001,
      message: '用户不存在'
    }
    socket.write(JSON.stringify(send));
  }
  else {
    var send = {
      protocal: 'p2p',
      code: 2000,
      from: data.from,
      message: message
    }
    receiver.write(JSON.stringify(send));
  }
}
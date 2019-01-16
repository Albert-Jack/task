/*send = {
  protocal: 'broadcast',
  from: userName,
  message: data
}*/
//参数 用户发送的数据 和 所有用户套接字
exports.broadcast = function (data, users) {
  var message = data.from + '说：' + data.message
  var send = {
    protocal: 'broadcast',
    message: message
  }
  for (var userName in users) {
    var tmpSocket = users[userName];
    tmpSocket.write(JSON.stringify(send));
  }
}
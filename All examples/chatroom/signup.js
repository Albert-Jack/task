/*var send = {
        protocal: 'signup',
        userName: data
}*/
//用户注册时发送的数据
//参数 当前用户套接字 用户发送的数据 所有用户的套接字
exports.signup = function (socket, data, users) {
  var userName = data.userName;
  if (!users[userName]) {
    users[userName] = socket;
    var send = {
      protocal: 'signup',
      code: 1000,
      userName: userName,
      message: '注册成功'
    }
    socket.write(JSON.stringify(send));
  }
  else {
    var send = {
      protocal: 'signup',
      code: 1001,
      message: '用户名已被占用'
    }
    socket.write(JSON.stringify(send));
  }
}
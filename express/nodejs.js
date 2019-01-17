var express = require('express');  //加载框架
var path = require('path');         //加载模块
var bodyParser = require('body-parser'); //加载模块 解析post数据的模块
var ejs = require('ejs');     //加载ejs模板引擎
var app = express(); //实例
var users = [] //用于存放前端 post 过来的数据
app.set('view engine', 'ejs'); //设置 
app.use(bodyParser.urlencoded({ extended: false }))//中间件 
app.use(bodyParser.json()) //中间件 配置后才能解析post
app.use(express.static(path.join(__dirname, 'static'))) //中间件 static文件夹静态资源可以访问

app.get('/', function (req, res) {
  res.sendfile('views/index.html');
})


//在接受到 post 后
app.post('/houduan', function (req, res) {
  console.log(req.body);
  //req.body是post过来的表单对象
  users.push(req.body);
  //将其加入用户

  var std = '';//std为暂存所有要用模板替换掉的内容
  users.forEach(function (sb) {
    //sb = JSON.parse(sb);  //因为有单引号 我想转换 结果报错了 发现不用换
    std += '<tr> <th>' + sb.姓名 + '</th> <th>' + sb.学号 + '</th> <tr>'
  })
  //遍历函数 我就不说了
  var TAB = {
    TABLE: std
  }
  //模板的用法
  res.render('output', TAB);







})
app.listen(3000);
//监听端口
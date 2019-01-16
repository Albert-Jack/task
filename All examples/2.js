exports.name = "Alerbt";// 初始返回一个对象 不能改变返回的 返回数据类型
module.exports.age = "18";// 初始返回一个对象可以单独定义返回类型
module.exports.say = function () { console.log("hello") };
global.foo = "jklk";
module.exports = ['1', '2']; // 这步操作 替换掉了上面的内容
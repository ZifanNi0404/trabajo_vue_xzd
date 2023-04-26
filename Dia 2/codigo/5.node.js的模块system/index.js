// //utilisar node.js modulo incorporado
const fs = require('fs') //引入内置模块
// fs.readFile('./1.txt', function (err, data) {
//     //err表示读取文件错误的结果
//     //data表示读取文件的内容 默认是buffer格式储存 可以通过string方法转成字符串
//     console.log(err, data.toString());
// })

//希望向2.txtli写一句话 node.js es muy facil
// fs.writeFile('./2.txt', 'node.js es muy facil', function (err, data) {
//     console.log(err, data);
// })

//将1.txt内容读出来后写2.txt
fs.readFile('./1.txt',function(err,data){
   const content = data.toString()
   fs.writeFile('./2.txt',content,function(err){
    console.log(err);
   })
})

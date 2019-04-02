const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.resolve(__dirname, './public')));

// 设置端口号
app.listen(8080);
console.log("服务器开启成功!!");
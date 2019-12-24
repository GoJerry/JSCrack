// 加载核心加密库
var CryptoJS = require("crypto-js");
// 加载des算法
var tripledes = require("crypto-js/tripledes");
// 开始加密，并且返回密文
var ciphertext = tripledes.encrypt("fuckyou", '123').toString();
// 解密
var plaintext = tripledes.decrypt(ciphertext, '123').toString(CryptoJS.enc.Utf8)
// 输出密文和解密后的内容
console.log(ciphertext, plaintext)
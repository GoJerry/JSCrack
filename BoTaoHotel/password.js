const CryptoJS = require("crypto-js");

const key = CryptoJS.enc.Latin1.parse("h5LoginKey123456");  //十六位十六进制数作为密钥
const iv = CryptoJS.enc.Latin1.parse('h5LoginIv1234567');   //十六位十六进制数作为密钥偏移量
// AES 加密方法
function Encrypt(word) {
    let srcs = CryptoJS.enc.Utf8.parse(word);
    let encrypted = CryptoJS.AES.encrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.ZeroPadding});
    return encrypted.toString();
}

console.log(Encrypt("123456"));
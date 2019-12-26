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

console.log(CryptoJS.SHA1("123456").toString());


function encrypt(pwd){
	var key = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAsgDq4OqxuEisnk2F0EJFmw4xKa5IrcqEYHvqxPs2CHEg2kolhfWA2SjNuGAHxyDDE5MLtOvzuXjBx/5YJtc9zj2xR/0moesS+Vi/xtG1tkVaTCba+TV+Y5C61iyr3FGqr+KOD4/XECu0Xky1W9ZmmaFADmZi7+6gO9wjgVpU9aLcBcw/loHOeJrCqjp7pA98hRJRY+MML8MK15mnC4ebooOva+mJlstW6t/1lghR8WNV8cocxgcHHuXBxgns2MlACQbSdJ8c6Z3RQeRZBzyjfey6JCCfbEKouVrWIUuPphBL3OANfgp0B+QG31bapvePTfXU48TYK0M5kE+8LgbbWQIDAQAB";
	var encrypt = new JSEncrypt();
    encrypt.setPublicKey(key);
    var encrypted = encrypt.encrypt(pwd);
    return encrypted;
}

/**
 * 加密（需要先加载lib/aes/aes.min.js文件）
 * @param word
 * @returns {*}
 */
function encrypts(word){
    var key = CryptoJS.enc.Utf8.parse("8ujhbnjhgfvb12bh");
    var srcs = CryptoJS.enc.Utf8.parse(word);
    var encrypted = CryptoJS.AES.encrypt(srcs, key, {mode:CryptoJS.mode.ECB,padding: CryptoJS.pad.Pkcs7});
    return encrypted.toString();
}

/**
 * 解密
 * @param word
 * @returns {*}
 */
function decrypts(word){
    var key = CryptoJS.enc.Utf8.parse("8ujhbnjhgfvb12bh");
    var decrypt = CryptoJS.AES.decrypt(word, key, {mode:CryptoJS.mode.ECB,padding: CryptoJS.pad.Pkcs7});
    return CryptoJS.enc.Utf8.stringify(decrypt).toString();
}
var CryptoJS = require("crypto-js");

function getCurrentDate() {
    var t = new Date
        , e = t.getMonth() + 1 < 10 ? "0" + (t.getMonth() + 1) : t.getMonth() + 1
        , n = t.getDate() < 10 ? "0" + t.getDate() : t.getDate();
    return "" + t.getFullYear() + e + n
}

function request_data(data, key) {
    const today = getCurrentDate();
    const ivs = CryptoJS.enc.Utf8.parse(key + today);
    const iv = CryptoJS.MD5(ivs);
    const keys = CryptoJS.enc.Utf8.parse(key);
    const ciphertextParams = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, data, keys, { iv: iv, mode: CryptoJS.mode.CFB, padding: CryptoJS.pad.Pkcs7});
    return CryptoJS.enc.Utf8.stringify(ciphertextParams);
}
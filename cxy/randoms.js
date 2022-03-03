
function randomString() {
    for (var e = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", n = "", i = 8; i > 0; --i)
        n += e[Math.floor(Math.random() * e.length)];
    return n
}
function generateSecretKey() {
    return CryptoJS.MD5(randomString()).toString()
}

const s = randomString();
console.log(s);

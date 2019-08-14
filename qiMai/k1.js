var n = "00000008d78d46a";
// var a = ["@", "#", "/", "r", "a", "n", "k", "/", "i", "n", "d", "e", "x", "P", "l", "u", "s", "/", "b", "r", "a", "n", "d", "_", "i", "d", "/", "0", "@", "#", "4", "6", "1", "7", "6", "8", "2", "1", "8", "2", "1", "@", "#", "1"];
var l = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "/"];


function k(a, n) {
    // n || (n = o()),
    a = a["split"]("");
    for (var t = a["length"], e = n["length"], r = "charCodeAt", i = 0; i < t; i++)
        a[i] = m(a[i][r](0) ^ n[(i + 10) % e][r](0));
    return a["join"]("")
}

function m(n) {
    var t = "fromCharCode";
    return String[t](n)
}

// function i() {
//     var n = w;
//     return [bh, xh, Lh, Hh, Th, Rh, Ph, xh, Th, Lh, Fh, Mh][Km](function (t) {
//         n += a[Ah](Oh + t)
//     }),
//         n
// }

// 第一个函数的生成方式
function v(n) {
    return n_fun(encodeURIComponent(n)["replace"](/%([0-9A-F]{2})/g, function (a, n) {
        return m("0x" + n)
    }))
}


function n_fun(t) {
    var n;
    return n = e_from(t.toString(), "binary"),
        n_fromByteArray("base64")
}

function t_write(t, e, n, r) {
    return K(W(e), t, 0, r)
}

function W(t) {
    for (var e = [], n = 0; n < t.length; ++n)
        e.push(255 & t.charCodeAt(n));
    return e
}

function K(t, e, n, r) {
    for (var i = 0; i < r && !(i + n >= e.length || i >= t.length); ++i)
        e[i + n] = t[i];
    return i
}

function e_from(t_str, b){
    var r = t_str.length;
    t = new Uint8Array(r);
    var i = t_write(t, t_str, b, r);
    return t = t.slice(0, 44), t

}

function M(t, e, n) {
    return 0 === e && n === t.length ? Q.fromByteArray(t) : Q.fromByteArray(t.slice(e, n))
}

function n_fromByteArray(t) {
    for (var e, n = t.length, r = n % 3, i = "", o = [], a = 16383, u = 0, c = n - r; u < c; u += a)
        o.push(s(t, u, u + a > c ? c : u + a));
    return 1 === r ? (e = t[n - 1],
        i += l[e >> 2],
        i += l[e << 4 & 63],
        i += "==") : 2 === r && (e = (t[n - 2] << 8) + t[n - 1],
        i += l[e >> 10],
        i += l[e >> 4 & 63],
        i += l[e << 2 & 63],
        i += "="),
        o.push(i),
        o.join("")
}

function s(t, e, n) {
    for (var r, i = [], o = e; o < n; o += 3)
        r = (t[o] << 16 & 16711680) + (t[o + 1] << 8 & 65280) + (255 & t[o + 2]),
            i.push(a1(r));
    return i.join("")
}

function a1(t) {
    return l[t >> 18 & 63] + l[t >> 12 & 63] + l[t >> 6 & 63] + l[63 & t]
}

var e = 46934055077;

var m_str = "@#/account/userinfo@#" + e + "@#1";






console.log(v(k(m_str, n)));

// var e = timeStimap - (g[tA] ? g[tA] : h) - 1515125653845;
// var m = "@#/account/userinfo@#46929734807@#1";

// r = f[fn](f[Xl](m, "00000008d78d46a"));
//m, b
var b = "00000008d78d46a";

function k(a, n) {
    // n || (n = s()),
    // a = a[ya](w);
    // for (var t = a[Es], e = n[Es], r = al, i = h; i < t; i++)
    //     a[i] = m(a[i][r](h) ^ n[(i + Op) % e][r](h));
    // return a[wa](w)

    a = a["split"]("");
    for (var t = a["length"], e = n["length"], r = "charCodeAt", i = 0; i < t; i++)
        a[i] = m(a[i][r](0) ^ n[(i+10) % e][r](0));
    return a["join"]("")
}


//第一个函数
function v(n) {
    return n_fun(encodeURIComponent(n)["replace"](/%([0-9A-F]{2})/g, function(a, n) {
        return m("0x" + n)
    }))
}

function m(n) {
    var t = "fromCharCode";
    return String[t](n)
}

// function n(t) {
//     var n;
//     return n = t instanceof e ? t : e.from(t.toString(), "binary"),
//         n.toString("base64")
//  }


function n_fun(t) {
    var n;
    n = e_from(t.toString(), "binary");
    return n_fromByteArray(n)
}

// function f(t, e, n) {
//     if ("string" == typeof n && "" !== n || (n = "utf8"),
//         !a.isEncoding(n))
//         throw new TypeError('"encoding" must be a valid string encoding');
//     var r = 0 | g(e, n);
//     t = o(t, r);
//     var i = t.write(e, n);
//     return i !== r && (t = t.slice(0, i)),
//         t
// }


// function e_from(t_str, b) {
//     var r = t.length;
//     t = new Uint8Array(r);
//     var i = t.write(e, n);
//     return i !== r && (t = t.slice(0, i)),
//         t
// }


function t_write():

// function M(t, e, n) {
//     return 0 === e && n === t.length ? Q.fromByteArray(t) : Q.fromByteArray(t.slice(e, n))
// }

l = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "/"]


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
            i.push(a(r));
    return i.join("")
}

function a(t) {
    return l[t >> 18 & 63] + l[t >> 12 & 63] + l[t >> 6 & 63] + l[63 & t]
}



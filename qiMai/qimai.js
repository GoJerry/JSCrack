function k(a, n) {
//     n || (n = s()),
    a = a["split"]("");
    for (var t = a["length"], e = n["length"], r = "charCodeAt", i = 0; i < t; i++)
        a[i] = m(a[i][r](0) ^ n[(i+10) % e][r](0));
    return a["join"]("")
}

function m(n) {
    var t = "fromCharCode";
    return String[t](n)
}

function v(n) {
    return n_fun(encodeURIComponent(n)["replace"](/%([0-9A-F]{2})/g, function (a, n) {
        return m("0x" + n)
    }))
}

function n_fun(t) {
    var n;
    n = e_from(t.toString(), "binary");
    return q_fromB(n)
}

function e_from(t_str, b) {
    var r = t_str.length;
    t = new Uint8Array(r);
    var i = t_write(t, t_str, b, r);
    return t
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

function t_write(t, e, b, r) {
    return K(W(e), t, 0, r)
}

l = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "/"]

// l = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,0,1,2,3,4,5,6,7,8,9,+,/"
// l = l.split(",")

function q_fromB(t) {
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

function get0analysis(synct, params) {

    // 生成时间戳
    var g = new Date() - 1000 * synct;
    var e = new Date() - g - 1515125653845;
    var analy = [];
    var palist = [];

    for (var key in params) {
        palist.push(params[key])
    }

    var mm = palist["sort"]()["join"]("");
    var mmm = v(mm);

    var m_str0 = mmm + "@#/rank/indexPlus/brand_id/0@#" + e + "@#0";
    var m_str1 = mmm + "@#/rank/indexPlus/brand_id/1@#" + e + "@#1";
    var m_str2 = mmm + "@#/rank/indexPlus/brand_id/2@#" + e + "@#2";
    var b_str = "00000008d78d46a";
    var r0 = v(k(m_str0, b_str));
    var r1 = v(k(m_str1, b_str));
    var r2 = v(k(m_str2, b_str));
    analy.push(r0, r1, r2);
    return analy
}


function get0analysisV2(synct, params) {

    // 生成时间戳
    var g = new Date() - 1000 * synct;
    var e = new Date() - g - 1515125653845;
    var analy = [];
    var palist = [];

    for (var key in params) {
        palist.push(params[key])
    }

    var mm = palist["sort"]()["join"]("");
    var mmm = v(mm);
    var m_str0 = mmm + "@#/search/index@#" + e + "@#1";  // 不同查询功能url不同
    var b_str = "00000008d78d46a";
    var r0 = v(k(m_str0, b_str));
    // analy.push(r0,);
    return r0
}

// var e = 46934055077;
//
// var m_str = "MTI=@#/index/banner@#46935525139@#1";
//
// console.log(get0analysis(m_str, "00000008d78d46a"));
//
// console.log(v(k(m_str, "00000008d78d46a")));

var params = {
        "date": "2019-07-04",
        "page": "1",
        "appid": "0",
        "country": "cn",
        "search": "花无缺",
        "version": "ios12",
};


console.log(get0analysisV2("1562228397.686", params));

// console.log(v("012019-07-04cnios12花无缺"));

// "MDEyMDE5LTA3LTA0Y25pb3MxMuiKseaXoOe8ug==@#/search/index@#47103935945@#1"
var o = [214, 144, 233, 254, 204, 225, 61, 183, 22, 182, 20, 194, 40, 251, 44, 5, 43, 103, 154, 118, 42, 190, 4, 195, 170, 68, 19, 38, 73, 134, 6, 153, 156, 66, 80, 244, 145, 239, 152, 122, 51, 84, 11, 67, 237, 207, 172, 98, 228, 179, 28, 169, 201, 8, 232, 149, 128, 223, 148, 250, 117, 143, 63, 166, 71, 7, 167, 252, 243, 115, 23, 186, 131, 89, 60, 25, 230, 133, 79, 168, 104, 107, 129, 178, 113, 100, 218, 139, 248, 235, 15, 75, 112, 86, 157, 53, 30, 36, 14, 94, 99, 88, 209, 162, 37, 34, 124, 59, 1, 33, 120, 135, 212, 0, 70, 87, 159, 211, 39, 82, 76, 54, 2, 231, 160, 196, 200, 158, 234, 191, 138, 210, 64, 199, 56, 181, 163, 247, 242, 206, 249, 97, 21, 161, 224, 174, 93, 164, 155, 52, 26, 85, 173, 147, 50, 48, 245, 140, 177, 227, 29, 246, 226, 46, 130, 102, 202, 96, 192, 41, 35, 171, 13, 83, 78, 111, 213, 219, 55, 69, 222, 253, 142, 47, 3, 255, 106, 114, 109, 108, 91, 81, 141, 27, 175, 146, 187, 221, 188, 127, 17, 217, 92, 65, 31, 16, 90, 216, 10, 193, 49, 136, 165, 205, 123, 189, 45, 116, 208, 18, 184, 229, 180, 176, 137, 105, 151, 74, 12, 150, 119, 126, 101, 185, 241, 9, 197, 110, 198, 132, 24, 240, 125, 236, 58, 220, 77, 32, 121, 238, 95, 62, 215, 203, 57, 72],
    l = [462357, 472066609, 943670861, 1415275113, 1886879365, 2358483617, 2830087869, 3301692121, 3773296373, 4228057617, 404694573, 876298825, 1347903077, 1819507329, 2291111581, 2762715833, 3234320085, 3705924337, 4177462797, 337322537, 808926789, 1280531041, 1752135293, 2223739545, 2695343797, 3166948049, 3638552301, 4110090761, 269950501, 741554753, 1213159005, 1684763257];

function y(t, e, n, o) {
    var h = o || {}
        , f = h.padding
        , y = void 0 === f ? "pkcs#5" : f
        , _ = h.mode
        , w = void 0 === _ ? "" : _
        , x = h.iv
        , M = void 0 === x ? [] : x
        , S = h.output
        , output = void 0 === S ? "string" : S;
    if ("cbc" === w && ("string" == typeof M && (M = c(M)),
    16 !== M.length))
        throw new Error("iv is invalid");
    if ("string" == typeof e && (e = c(e)),
    16 !== e.length)
        throw new Error("key is invalid");
    if (t = "string" == typeof t ? 0 !== n ? function (t) {
        for (var e = [], i = 0, n = t.length; i < n; i++) {
            var r = t.codePointAt(i);
            if (r <= 127)
                e.push(r);
            else if (r <= 2047)
                e.push(192 | r >>> 6),
                    e.push(128 | 63 & r);
            else if (r <= 55295 || r >= 57344 && r <= 65535)
                e.push(224 | r >>> 12),
                    e.push(128 | r >>> 6 & 63),
                    e.push(128 | 63 & r);
            else {
                if (!(r >= 65536 && r <= 1114111))
                    throw e.push(r),
                        new Error("input is not supported");
                i++,
                    e.push(240 | r >>> 18 & 28),
                    e.push(128 | r >>> 12 & 63),
                    e.push(128 | r >>> 6 & 63),
                    e.push(128 | 63 & r)
            }
        }
        return e
    }(t) : c(t) : r([], t),
    "pkcs#5" === y && 0 !== n)
        for (var k = 16 - t.length % 16, i = 0; i < k; i++)
            t.push(k);
    var C = new Array(32);
    !function (t, e, n) {
        for (var r = new Array(4), o = new Array(4), i = 0; i < 4; i++)
            o[0] = 255 & t[0 + 4 * i],
                o[1] = 255 & t[1 + 4 * i],
                o[2] = 255 & t[2 + 4 * i],
                o[3] = 255 & t[3 + 4 * i],
                r[i] = o[0] << 24 | o[1] << 16 | o[2] << 8 | o[3];
        r[0] ^= 2746333894,
            r[1] ^= 1453994832,
            r[2] ^= 1736282519,
            r[3] ^= 2993693404;
        for (var c = 0, h = void 0; c < 32; c += 4)
            h = r[1] ^ r[2] ^ r[3] ^ l[c + 0],
                e[c + 0] = r[0] ^= m(d(h)),
                h = r[2] ^ r[3] ^ r[0] ^ l[c + 1],
                e[c + 1] = r[1] ^= m(d(h)),
                h = r[3] ^ r[0] ^ r[1] ^ l[c + 2],
                e[c + 2] = r[2] ^= m(d(h)),
                h = r[0] ^ r[1] ^ r[2] ^ l[c + 3],
                e[c + 3] = r[3] ^= m(d(h));
        if (0 === n)
            for (c = 0,
                     h = void 0; c < 16; c++)
                h = e[c],
                    e[c] = e[31 - c],
                    e[31 - c] = h
    }(e, C, n);
    for (var O = [], D = M, T = t.length, E = 0; T >= 16;) {
        var input = t.slice(E, E + 16)
            , L = new Array(16);
        if ("cbc" === w)
            for (i = 0; i < 16; i++)
                0 !== n && (input[i] ^= D[i]);
        v(input, L, C);
        for (i = 0; i < 16; i++)
            "cbc" === w && 0 === n && (L[i] ^= D[i]),
                O[E + i] = L[i];
        "cbc" === w && (D = 0 !== n ? L : input),
            T -= 16,
            E += 16
    }
    if ("pkcs#5" === y && 0 === n) {
        k = O[O.length - 1];
        O.splice(O.length - k, k)
    }
    return "array" !== output ? 0 !== n ? O.map((function (t) {
            return 1 === (t = t.toString(16)).length ? "0" + t : t
        }
    )).join("") : function (t) {
        for (var e = [], i = 0, n = t.length; i < n; i++)
            t[i] >= 240 && t[i] <= 247 ? (e.push(String.fromCodePoint(((7 & t[i]) << 18) + ((63 & t[i + 1]) << 12) + ((63 & t[i + 2]) << 6) + (63 & t[i + 3]))),
                i += 3) : t[i] >= 224 && t[i] <= 239 ? (e.push(String.fromCodePoint(((15 & t[i]) << 12) + ((63 & t[i + 1]) << 6) + (63 & t[i + 2]))),
                i += 2) : t[i] >= 192 && t[i] <= 223 ? (e.push(String.fromCodePoint(((31 & t[i]) << 6) + (63 & t[i + 1]))),
                i++) : e.push(String.fromCodePoint(t[i]));
        return e.join("")
    }(O) : O
}

function c(t) {
    for (var e = [], i = 0, n = t.length; i < n; i += 2)
        e.push(parseInt(t.substr(i, 2), 16));
    return e
}

function h(t, e) {
    return t << e | t >>> 32 - e
}

function d(a) {
    return (255 & o[a >>> 24 & 255]) << 24 | (255 & o[a >>> 16 & 255]) << 16 | (255 & o[a >>> 8 & 255]) << 8 | 255 & o[255 & a]
}

function f(b) {
    return b ^ h(b, 2) ^ h(b, 10) ^ h(b, 18) ^ h(b, 24)
}

function m(b) {
    return b ^ h(b, 13) ^ h(b, 23)
}

function v(input, output, t) {
    for (var e = new Array(4), n = new Array(4), i = 0; i < 4; i++)
        n[0] = 255 & input[4 * i],
            n[1] = 255 & input[4 * i + 1],
            n[2] = 255 & input[4 * i + 2],
            n[3] = 255 & input[4 * i + 3],
            e[i] = n[0] << 24 | n[1] << 16 | n[2] << 8 | n[3];
    for (var r = 0, o = void 0; r < 32; r += 4)
        o = e[1] ^ e[2] ^ e[3] ^ t[r + 0],
            e[0] ^= f(d(o)),
            o = e[2] ^ e[3] ^ e[0] ^ t[r + 1],
            e[1] ^= f(d(o)),
            o = e[3] ^ e[0] ^ e[1] ^ t[r + 2],
            e[2] ^= f(d(o)),
            o = e[0] ^ e[1] ^ e[2] ^ t[r + 3],
            e[3] ^= f(d(o));
    for (var l = 0; l < 16; l += 4)
        output[l] = e[3 - l / 4] >>> 24 & 255,
            output[l + 1] = e[3 - l / 4] >>> 16 & 255,
            output[l + 2] = e[3 - l / 4] >>> 8 & 255,
            output[l + 3] = 255 & e[3 - l / 4]
}

function sm4Encode(data, e_md5) {
    const t = JSON.stringify(data);
    // const t = '{"data":"eN/HV5mH7+39DpoZn7/4uJ8YJ7ppmx5PEw7Fau+Uc1xTnp966ahurpDvVC8ZM2LmpKJNMEPh0hFzvag6uB+hZw==","key":"lEQyp0m5bL0Lxq1K_be_lQFx5U1YVh5Rfl6Lt8ikUg4f3brK9Pw5uMyA8c5vXZQ2UIZSXTsHINSmT28RaUQTs1RmYZBC4-A66ZZj8ArKoPj4oV4ofSXBbXg_H_nyixKHYvvoM3FRXeKJ-NgAohF_TSLid0Grf5uvgToNfhq64SE","appName":"QZD_WEBSITE_PC"}';
//    const e = CryptoJS.MD5("20210722").toString();
    const result = y(t, e_md5, 1);
    return result
}

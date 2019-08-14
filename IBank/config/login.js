function BigInteger(a, b, d) {
    null != a && ("number" == typeof a ? this.fromNumber(a, b, d) : null == b && "string" != typeof a ? this.fromString(a, 256) : this.fromString(a, b))
}

function nbi() {
    return new BigInteger(null)
}

function am1(b, f, g, j, a, h) {
    for (; --h >= 0;) {
        var d = f * this[b++] + g[j] + a;
        a = Math.floor(d / 67108864),
            g[j++] = 67108863 & d
    }
    return a
}

function am2(q, b, l, f, j, d) {
    for (var u = 32767 & b, k = b >> 15; --d >= 0;) {
        var p = 32767 & this[q]
            , m = this[q++] >> 15
            , g = k * p + m * u;
        p = u * p + ((32767 & g) << 15) + l[f] + (1073741823 & j),
            j = (p >>> 30) + (g >>> 15) + k * m + (j >>> 30),
            l[f++] = 1073741823 & p
    }
    return j
}

function am3(q, b, l, f, j, d) {
    for (var u = 16383 & b, k = b >> 14; --d >= 0;) {
        var p = 16383 & this[q]
            , m = this[q++] >> 14
            , g = k * p + m * u;
        p = u * p + ((16383 & g) << 14) + l[f] + j,
            j = (p >> 28) + (g >> 14) + k * m,
            l[f++] = 268435455 & p
    }
    return j
}

function int2char(a) {
    return BI_RM.charAt(a)
}

function intAt(a, b) {
    var d = BI_RC[a.charCodeAt(b)];
    return null == d ? -1 : d
}

function bnpCopyTo(a) {
    for (var b = this.t - 1; b >= 0; --b) {
        a[b] = this[b]
    }
    a.t = this.t,
        a.s = this.s
}

function bnpFromInt(a) {
    this.t = 1,
        this.s = 0 > a ? -1 : 0,
        a > 0 ? this[0] = a : -1 > a ? this[0] = a + DV : this.t = 0
}

function nbv(a) {
    var b = nbi();
    return b.fromInt(a),
        b
}

function bnpFromString(b, f) {
    var g;
    if (16 == f) {
        g = 4
    } else {
        if (8 == f) {
            g = 3
        } else {
            if (256 == f) {
                g = 8
            } else {
                if (2 == f) {
                    g = 1
                } else {
                    if (32 == f) {
                        g = 5
                    } else {
                        if (4 != f) {
                            return void this.fromRadix(b, f)
                        }
                        g = 2
                    }
                }
            }
        }
    }
    this.t = 0,
        this.s = 0;
    for (var j = b.length, a = !1, h = 0; --j >= 0;) {
        var d = 8 == g ? 255 & b[j] : intAt(b, j);
        0 > d ? "-" == b.charAt(j) && (a = !0) : (a = !1,
            0 == h ? this[this.t++] = d : h + g > this.DB ? (this[this.t - 1] |= (d & (1 << this.DB - h) - 1) << h,
                this[this.t++] = d >> this.DB - h) : this[this.t - 1] |= d << h,
            h += g,
        h >= this.DB && (h -= this.DB))
    }
    8 == g && 0 != (128 & b[0]) && (this.s = -1,
    h > 0 && (this[this.t - 1] |= (1 << this.DB - h) - 1 << h)),
        this.clamp(),
    a && BigInteger.ZERO.subTo(this, this)
}

function bnpClamp() {
    for (var a = this.s & this.DM; this.t > 0 && this[this.t - 1] == a;) {
        --this.t
    }
}

function bnToString(b) {
    if (this.s < 0) {
        return "-" + this.negate().toString(b)
    }
    var g;
    if (16 == b) {
        g = 4
    } else {
        if (8 == b) {
            g = 3
        } else {
            if (2 == b) {
                g = 1
            } else {
                if (32 == b) {
                    g = 5
                } else {
                    if (4 != b) {
                        return this.toRadix(b)
                    }
                    g = 2
                }
            }
        }
    }
    var j, l = (1 << g) - 1, a = !1, k = "", f = this.t, d = this.DB - f * this.DB % g;
    if (f-- > 0) {
        for (d < this.DB && (j = this[f] >> d) > 0 && (a = !0,
            k = int2char(j)); f >= 0;) {
            g > d ? (j = (this[f] & (1 << d) - 1) << g - d,
                j |= this[--f] >> (d += this.DB - g)) : (j = this[f] >> (d -= g) & l,
            0 >= d && (d += this.DB,
                --f)),
            j > 0 && (a = !0),
            a && (k += int2char(j))
        }
    }
    return a ? k : "0"
}

function bnNegate() {
    var a = nbi();
    return BigInteger.ZERO.subTo(this, a),
        a
}

function bnAbs() {
    return this.s < 0 ? this.negate() : this
}

function bnCompareTo(a) {
    var b = this.s - a.s;
    if (0 != b) {
        return b
    }
    var d = this.t;
    if (b = d - a.t,
    0 != b) {
        return b
    }
    for (; --d >= 0;) {
        if (0 != (b = this[d] - a[d])) {
            return b
        }
    }
    return 0
}

function nbits(a) {
    var b, d = 1;
    return 0 != (b = a >>> 16) && (a = b,
        d += 16),
    0 != (b = a >> 8) && (a = b,
        d += 8),
    0 != (b = a >> 4) && (a = b,
        d += 4),
    0 != (b = a >> 2) && (a = b,
        d += 2),
    0 != (b = a >> 1) && (a = b,
        d += 1),
        d
}

function bnBitLength() {
    return this.t <= 0 ? 0 : this.DB * (this.t - 1) + nbits(this[this.t - 1] ^ this.s & this.DM)
}

function bnpDLShiftTo(a, b) {
    var d;
    for (d = this.t - 1; d >= 0; --d) {
        b[d + a] = this[d]
    }
    for (d = a - 1; d >= 0; --d) {
        b[d] = 0
    }
    b.t = this.t + a,
        b.s = this.s
}

function bnpDRShiftTo(a, b) {
    for (var d = a; d < this.t; ++d) {
        b[d - a] = this[d]
    }
    b.t = Math.max(this.t - a, 0),
        b.s = this.s
}

function bnpLShiftTo(b, g) {
    var j, l = b % this.DB, a = this.DB - l, k = (1 << a) - 1, f = Math.floor(b / this.DB), d = this.s << l & this.DM;
    for (j = this.t - 1; j >= 0; --j) {
        g[j + f + 1] = this[j] >> a | d,
            d = (this[j] & k) << l
    }
    for (j = f - 1; j >= 0; --j) {
        g[j] = 0
    }
    g[f] = d,
        g.t = this.t + f + 1,
        g.s = this.s,
        g.clamp()
}

function bnpRShiftTo(b, f) {
    f.s = this.s;
    var g = Math.floor(b / this.DB);
    if (g >= this.t) {
        return void (f.t = 0)
    }
    var j = b % this.DB
        , a = this.DB - j
        , h = (1 << j) - 1;
    f[0] = this[g] >> j;
    for (var d = g + 1; d < this.t; ++d) {
        f[d - g - 1] |= (this[d] & h) << a,
            f[d - g] = this[d] >> j
    }
    j > 0 && (f[this.t - g - 1] |= (this.s & h) << a),
        f.t = this.t - g,
        f.clamp()
}

function bnpSubTo(b, d) {
    for (var f = 0, g = 0, a = Math.min(b.t, this.t); a > f;) {
        g += this[f] - b[f],
            d[f++] = g & this.DM,
            g >>= this.DB
    }
    if (b.t < this.t) {
        for (g -= b.s; f < this.t;) {
            g += this[f],
                d[f++] = g & this.DM,
                g >>= this.DB
        }
        g += this.s
    } else {
        for (g += this.s; f < b.t;) {
            g -= b[f],
                d[f++] = g & this.DM,
                g >>= this.DB
        }
        g -= b.s
    }
    d.s = 0 > g ? -1 : 0,
        -1 > g ? d[f++] = this.DV + g : g > 0 && (d[f++] = g),
        d.t = f,
        d.clamp()
}

function bnpMultiplyTo(b, d) {
    var f = this.abs()
        , g = b.abs()
        , a = f.t;
    for (d.t = a + g.t; --a >= 0;) {
        d[a] = 0
    }
    for (a = 0; a < g.t; ++a) {
        d[a + f.t] = f.am(0, g[a], d, a, 0, f.t)
    }
    d.s = 0,
        d.clamp(),
    this.s != b.s && BigInteger.ZERO.subTo(d, d)
}

function bnpSquareTo(a) {
    for (var b = this.abs(), d = a.t = 2 * b.t; --d >= 0;) {
        a[d] = 0
    }
    for (d = 0; d < b.t - 1; ++d) {
        var f = b.am(d, b[d], a, 2 * d, 0, 1);
        (a[d + b.t] += b.am(d + 1, 2 * b[d], a, 2 * d + 1, f, b.t - d - 1)) >= b.DV && (a[d + b.t] -= b.DV,
            a[d + b.t + 1] = 1)
    }
    a.t > 0 && (a[a.t - 1] += b.am(d, b[d], a, 2 * d, 0, 1)),
        a.s = 0,
        a.clamp()
}

function bnpDivRemTo(m, v, H) {
    var z = m.abs();
    if (!(z.t <= 0)) {
        var C = this.abs();
        if (C.t < z.t) {
            return null != v && v.fromInt(0),
                void (null != H && this.copyTo(H))
        }
        null == H && (H = nbi());
        var y = nbi()
            , q = this.s
            , D = m.s
            , K = this.DB - nbits(z[z.t - 1]);
        K > 0 ? (z.lShiftTo(K, y),
            C.lShiftTo(K, H)) : (z.copyTo(y),
            C.copyTo(H));
        var J = y.t
            , b = y[J - 1];
        if (0 != b) {
            var k = b * (1 << this.F1) + (J > 1 ? y[J - 2] >> this.F2 : 0)
                , j = this.FV / k
                , d = (1 << this.F1) / k
                , F = 1 << this.F2
                , x = H.t
                , G = x - J
                , B = null == v ? nbi() : v;
            for (y.dlShiftTo(G, B),
                 H.compareTo(B) >= 0 && (H[H.t++] = 1,
                     H.subTo(B, H)),
                     BigInteger.ONE.dlShiftTo(J, B),
                     B.subTo(y, y); y.t < J;) {
                y[y.t++] = 0
            }
            for (; --G >= 0;) {
                var w = H[--x] == b ? this.DM : Math.floor(H[x] * j + (H[x - 1] + F) * d);
                if ((H[x] += y.am(0, w, H, G, 0, J)) < w) {
                    for (y.dlShiftTo(G, B),
                             H.subTo(B, H); H[x] < --w;) {
                        H.subTo(B, H)
                    }
                }
            }
            null != v && (H.drShiftTo(J, v),
            q != D && BigInteger.ZERO.subTo(v, v)),
                H.t = J,
                H.clamp(),
            K > 0 && H.rShiftTo(K, H),
            0 > q && BigInteger.ZERO.subTo(H, H)
        }
    }
}

function bnMod(a) {
    var b = nbi();
    return this.abs().divRemTo(a, null, b),
    this.s < 0 && b.compareTo(BigInteger.ZERO) > 0 && a.subTo(b, b),
        b
}

function Classic(a) {
    this.m = a
}

function cConvert(a) {
    return a.s < 0 || a.compareTo(this.m) >= 0 ? a.mod(this.m) : a
}

function cRevert(a) {
    return a
}

function cReduce(a) {
    a.divRemTo(this.m, null, a)
}

function cMulTo(a, b, d) {
    a.multiplyTo(b, d),
        this.reduce(d)
}

function cSqrTo(a, b) {
    a.squareTo(b),
        this.reduce(b)
}

function bnpInvDigit() {
    if (this.t < 1) {
        return 0
    }
    var a = this[0];
    if (0 == (1 & a)) {
        return 0
    }
    var b = 3 & a;
    return b = b * (2 - (15 & a) * b) & 15,
        b = b * (2 - (255 & a) * b) & 255,
        b = b * (2 - ((65535 & a) * b & 65535)) & 65535,
        b = b * (2 - a * b % this.DV) % this.DV,
        b > 0 ? this.DV - b : -b
}

function Montgomery(a) {
    this.m = a,
        this.mp = a.invDigit(),
        this.mpl = 32767 & this.mp,
        this.mph = this.mp >> 15,
        this.um = (1 << a.DB - 15) - 1,
        this.mt2 = 2 * a.t
}

function montConvert(a) {
    var b = nbi();
    return a.abs().dlShiftTo(this.m.t, b),
        b.divRemTo(this.m, null, b),
    a.s < 0 && b.compareTo(BigInteger.ZERO) > 0 && this.m.subTo(b, b),
        b
}

function montRevert(a) {
    var b = nbi();
    return a.copyTo(b),
        this.reduce(b),
        b
}

function montReduce(a) {
    for (; a.t <= this.mt2;) {
        a[a.t++] = 0
    }
    for (var b = 0; b < this.m.t; ++b) {
        var d = 32767 & a[b]
            , f = d * this.mpl + ((d * this.mph + (a[b] >> 15) * this.mpl & this.um) << 15) & a.DM;
        for (d = b + this.m.t,
                 a[d] += this.m.am(0, f, a, b, 0, this.m.t); a[d] >= a.DV;) {
            a[d] -= a.DV,
                a[++d]++
        }
    }
    a.clamp(),
        a.drShiftTo(this.m.t, a),
    a.compareTo(this.m) >= 0 && a.subTo(this.m, a)
}

function montSqrTo(a, b) {
    a.squareTo(b),
        this.reduce(b)
}

function montMulTo(a, b, d) {
    a.multiplyTo(b, d),
        this.reduce(d)
}

function bnpIsEven() {
    return 0 == (this.t > 0 ? 1 & this[0] : this.s)
}

function bnpExp(b, f) {
    if (b > 4294967295 || 1 > b) {
        return BigInteger.ONE
    }
    var g = nbi()
        , j = nbi()
        , a = f.convert(this)
        , h = nbits(b) - 1;
    for (a.copyTo(g); --h >= 0;) {
        if (f.sqrTo(g, j),
        (b & 1 << h) > 0) {
            f.mulTo(j, a, g)
        } else {
            var d = g;
            g = j,
                j = d
        }
    }
    return f.revert(g)
}

function bnModPowInt(a, b) {
    var d;
    return d = 256 > a || b.isEven() ? new Classic(b) : new Montgomery(b),
        this.exp(a, d)
}

function bnClone() {
    var a = nbi();
    return this.copyTo(a),
        a
}

function bnIntValue() {
    if (this.s < 0) {
        if (1 == this.t) {
            return this[0] - this.DV
        }
        if (0 == this.t) {
            return -1
        }
    } else {
        if (1 == this.t) {
            return this[0]
        }
        if (0 == this.t) {
            return 0
        }
    }
    return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0]
}

function bnByteValue() {
    return 0 == this.t ? this.s : this[0] << 24 >> 24
}

function bnShortValue() {
    return 0 == this.t ? this.s : this[0] << 16 >> 16
}

function bnpChunkSize(a) {
    return Math.floor(Math.LN2 * this.DB / Math.log(a))
}

function bnSigNum() {
    return this.s < 0 ? -1 : this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 : 1
}

function bnpToRadix(b) {
    if (null == b && (b = 10),
    0 == this.signum() || 2 > b || b > 36) {
        return "0"
    }
    var f = this.chunkSize(b)
        , g = Math.pow(b, f)
        , j = nbv(g)
        , a = nbi()
        , h = nbi()
        , d = "";
    for (this.divRemTo(j, a, h); a.signum() > 0;) {
        d = (g + h.intValue()).toString(b).substr(1) + d,
            a.divRemTo(j, a, h)
    }
    return h.intValue().toString(b) + d
}

function bnpFromRadix(l, a) {
    this.fromInt(0),
    null == a && (a = 10);
    for (var j = this.chunkSize(a), d = Math.pow(a, j), f = !1, b = 0, m = 0, g = 0; g < l.length; ++g) {
        var k = intAt(l, g);
        0 > k ? "-" == l.charAt(g) && 0 == this.signum() && (f = !0) : (m = a * m + k,
        ++b >= j && (this.dMultiply(d),
            this.dAddOffset(m, 0),
            b = 0,
            m = 0))
    }
    b > 0 && (this.dMultiply(Math.pow(a, b)),
        this.dAddOffset(m, 0)),
    f && BigInteger.ZERO.subTo(this, this)
}

function bnpFromNumber(b, d, f) {
    if ("number" == typeof d) {
        if (2 > b) {
            this.fromInt(1)
        } else {
            for (this.fromNumber(b, f),
                 this.testBit(b - 1) || this.bitwiseTo(BigInteger.ONE.shiftLeft(b - 1), op_or, this),
                 this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(d);) {
                this.dAddOffset(2, 0),
                this.bitLength() > b && this.subTo(BigInteger.ONE.shiftLeft(b - 1), this)
            }
        }
    } else {
        var g = new Array
            , a = 7 & b;
        g.length = (b >> 3) + 1,
            d.nextBytes(g),
            a > 0 ? g[0] &= (1 << a) - 1 : g[0] = 0,
            this.fromString(g, 256)
    }
}

function bnToByteArray() {
    var b = this.t
        , d = new Array;
    d[0] = this.s;
    var f, g = this.DB - b * this.DB % 8, a = 0;
    if (b-- > 0) {
        for (g < this.DB && (f = this[b] >> g) != (this.s & this.DM) >> g && (d[a++] = f | this.s << this.DB - g); b >= 0;) {
            8 > g ? (f = (this[b] & (1 << g) - 1) << 8 - g,
                f |= this[--b] >> (g += this.DB - 8)) : (f = this[b] >> (g -= 8) & 255,
            0 >= g && (g += this.DB,
                --b)),
            0 != (128 & f) && (f |= -256),
            0 == a && (128 & this.s) != (128 & f) && ++a,
            (a > 0 || f != this.s) && (d[a++] = f)
        }
    }
    return d
}

function bnEquals(a) {
    return 0 == this.compareTo(a)
}

function bnMin(a) {
    return this.compareTo(a) < 0 ? this : a
}

function bnMax(a) {
    return this.compareTo(a) > 0 ? this : a
}

function bnpBitwiseTo(b, d, f) {
    var h, a, g = Math.min(b.t, this.t);
    for (h = 0; g > h; ++h) {
        f[h] = d(this[h], b[h])
    }
    if (b.t < this.t) {
        for (a = b.s & this.DM,
                 h = g; h < this.t; ++h) {
            f[h] = d(this[h], a)
        }
        f.t = this.t
    } else {
        for (a = this.s & this.DM,
                 h = g; h < b.t; ++h) {
            f[h] = d(a, b[h])
        }
        f.t = b.t
    }
    f.s = d(this.s, b.s),
        f.clamp()
}

function op_and(a, b) {
    return a & b
}

function bnAnd(a) {
    var b = nbi();
    return this.bitwiseTo(a, op_and, b),
        b
}

function op_or(a, b) {
    return a | b
}

function bnOr(a) {
    var b = nbi();
    return this.bitwiseTo(a, op_or, b),
        b
}

function op_xor(a, b) {
    return a ^ b
}

function bnXor(a) {
    var b = nbi();
    return this.bitwiseTo(a, op_xor, b),
        b
}

function op_andnot(a, b) {
    return a & ~b
}

function bnAndNot(a) {
    var b = nbi();
    return this.bitwiseTo(a, op_andnot, b),
        b
}

function bnNot() {
    for (var a = nbi(), b = 0; b < this.t; ++b) {
        a[b] = this.DM & ~this[b]
    }
    return a.t = this.t,
        a.s = ~this.s,
        a
}

function bnShiftLeft(a) {
    var b = nbi();
    return 0 > a ? this.rShiftTo(-a, b) : this.lShiftTo(a, b),
        b
}

function bnShiftRight(a) {
    var b = nbi();
    return 0 > a ? this.lShiftTo(-a, b) : this.rShiftTo(a, b),
        b
}

function lbit(a) {
    if (0 == a) {
        return -1
    }
    var b = 0;
    return 0 == (65535 & a) && (a >>= 16,
        b += 16),
    0 == (255 & a) && (a >>= 8,
        b += 8),
    0 == (15 & a) && (a >>= 4,
        b += 4),
    0 == (3 & a) && (a >>= 2,
        b += 2),
    0 == (1 & a) && ++b,
        b
}

function bnGetLowestSetBit() {
    for (var a = 0; a < this.t; ++a) {
        if (0 != this[a]) {
            return a * this.DB + lbit(this[a])
        }
    }
    return this.s < 0 ? this.t * this.DB : -1
}

function cbit(a) {
    for (var b = 0; 0 != a;) {
        a &= a - 1,
            ++b
    }
    return b
}

function bnBitCount() {
    for (var a = 0, b = this.s & this.DM, d = 0; d < this.t; ++d) {
        a += cbit(this[d] ^ b)
    }
    return a
}

function bnTestBit(a) {
    var b = Math.floor(a / this.DB);
    return b >= this.t ? 0 != this.s : 0 != (this[b] & 1 << a % this.DB)
}

function bnpChangeBit(a, b) {
    var d = BigInteger.ONE.shiftLeft(a);
    return this.bitwiseTo(d, b, d),
        d
}

function bnSetBit(a) {
    return this.changeBit(a, op_or)
}

function bnClearBit(a) {
    return this.changeBit(a, op_andnot)
}

function bnFlipBit(a) {
    return this.changeBit(a, op_xor)
}

function bnpAddTo(b, d) {
    for (var f = 0, g = 0, a = Math.min(b.t, this.t); a > f;) {
        g += this[f] + b[f],
            d[f++] = g & this.DM,
            g >>= this.DB
    }
    if (b.t < this.t) {
        for (g += b.s; f < this.t;) {
            g += this[f],
                d[f++] = g & this.DM,
                g >>= this.DB
        }
        g += this.s
    } else {
        for (g += this.s; f < b.t;) {
            g += b[f],
                d[f++] = g & this.DM,
                g >>= this.DB
        }
        g += b.s
    }
    d.s = 0 > g ? -1 : 0,
        g > 0 ? d[f++] = g : -1 > g && (d[f++] = this.DV + g),
        d.t = f,
        d.clamp()
}

function bnAdd(a) {
    var b = nbi();
    return this.addTo(a, b),
        b
}

function bnSubtract(a) {
    var b = nbi();
    return this.subTo(a, b),
        b
}

function bnMultiply(a) {
    var b = nbi();
    return this.multiplyTo(a, b),
        b
}

function bnDivide(a) {
    var b = nbi();
    return this.divRemTo(a, b, null),
        b
}

function bnRemainder(a) {
    var b = nbi();
    return this.divRemTo(a, null, b),
        b
}

function bnDivideAndRemainder(a) {
    var b = nbi()
        , d = nbi();
    return this.divRemTo(a, b, d),
        new Array(b, d)
}

function bnpDMultiply(a) {
    this[this.t] = this.am(0, a - 1, this, 0, 0, this.t),
        ++this.t,
        this.clamp()
}

function bnpDAddOffset(a, b) {
    if (0 != a) {
        for (; this.t <= b;) {
            this[this.t++] = 0
        }
        for (this[b] += a; this[b] >= this.DV;) {
            this[b] -= this.DV,
            ++b >= this.t && (this[this.t++] = 0),
                ++this[b]
        }
    }
}

function NullExp() {
}

function nNop(a) {
    return a
}

function nMulTo(a, b, d) {
    a.multiplyTo(b, d)
}

function nSqrTo(a, b) {
    a.squareTo(b)
}

function bnPow(a) {
    return this.exp(a, new NullExp)
}

function bnpMultiplyLowerTo(b, d, f) {
    var g = Math.min(this.t + b.t, d);
    for (f.s = 0,
             f.t = g; g > 0;) {
        f[--g] = 0
    }
    var a;
    for (a = f.t - this.t; a > g; ++g) {
        f[g + this.t] = this.am(0, b[g], f, g, 0, this.t)
    }
    for (a = Math.min(b.t, d); a > g; ++g) {
        this.am(0, b[g], f, g, 0, d - g)
    }
    f.clamp()
}

function bnpMultiplyUpperTo(a, b, d) {
    --b;
    var f = d.t = this.t + a.t - b;
    for (d.s = 0; --f >= 0;) {
        d[f] = 0
    }
    for (f = Math.max(b - this.t, 0); f < a.t; ++f) {
        d[this.t + f - b] = this.am(b - f, a[f], d, 0, 0, this.t + f - b)
    }
    d.clamp(),
        d.drShiftTo(1, d)
}

function Barrett(a) {
    this.r2 = nbi(),
        this.q3 = nbi(),
        BigInteger.ONE.dlShiftTo(2 * a.t, this.r2),
        this.mu = this.r2.divide(a),
        this.m = a
}

function barrettConvert(a) {
    if (a.s < 0 || a.t > 2 * this.m.t) {
        return a.mod(this.m)
    }
    if (a.compareTo(this.m) < 0) {
        return a
    }
    var b = nbi();
    return a.copyTo(b),
        this.reduce(b),
        b
}

function barrettRevert(a) {
    return a
}

function barrettReduce(a) {
    for (a.drShiftTo(this.m.t - 1, this.r2),
         a.t > this.m.t + 1 && (a.t = this.m.t + 1,
             a.clamp()),
             this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3),
             this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); a.compareTo(this.r2) < 0;) {
        a.dAddOffset(1, this.m.t + 1)
    }
    for (a.subTo(this.r2, a); a.compareTo(this.m) >= 0;) {
        a.subTo(this.m, a)
    }
}

function barrettSqrTo(a, b) {
    a.squareTo(b),
        this.reduce(b)
}

function barrettMulTo(a, b, d) {
    a.multiplyTo(b, d),
        this.reduce(d)
}

function bnModPow(A, b) {
    var v, j, l = A.bitLength(), f = nbv(1);
    if (0 >= l) {
        return f
    }
    v = 18 > l ? 1 : 48 > l ? 3 : 144 > l ? 4 : 768 > l ? 5 : 6,
        j = 8 > l ? new Classic(b) : b.isEven() ? new Barrett(b) : new Montgomery(b);
    var C = new Array
        , m = 3
        , y = v - 1
        , w = (1 << v) - 1;
    if (C[1] = j.convert(this),
    v > 1) {
        var k = nbi();
        for (j.sqrTo(C[1], k); w >= m;) {
            C[m] = nbi(),
                j.mulTo(k, C[m - 2], C[m]),
                m += 2
        }
    }
    var B, z, x = A.t - 1, q = !0, d = nbi();
    for (l = nbits(A[x]) - 1; x >= 0;) {
        for (l >= y ? B = A[x] >> l - y & w : (B = (A[x] & (1 << l + 1) - 1) << y - l,
        x > 0 && (B |= A[x - 1] >> this.DB + l - y)),
                 m = v; 0 == (1 & B);) {
            B >>= 1,
                --m
        }
        if ((l -= m) < 0 && (l += this.DB,
            --x),
            q) {
            C[B].copyTo(f),
                q = !1
        } else {
            for (; m > 1;) {
                j.sqrTo(f, d),
                    j.sqrTo(d, f),
                    m -= 2
            }
            m > 0 ? j.sqrTo(f, d) : (z = f,
                f = d,
                d = z),
                j.mulTo(d, C[B], f)
        }
        for (; x >= 0 && 0 == (A[x] & 1 << l);) {
            j.sqrTo(f, d),
                z = f,
                f = d,
                d = z,
            --l < 0 && (l = this.DB - 1,
                --x)
        }
    }
    return j.revert(f)
}

function bnGCD(b) {
    var d = this.s < 0 ? this.negate() : this.clone()
        , f = b.s < 0 ? b.negate() : b.clone();
    if (d.compareTo(f) < 0) {
        var h = d;
        d = f,
            f = h
    }
    var a = d.getLowestSetBit()
        , g = f.getLowestSetBit();
    if (0 > g) {
        return d
    }
    for (g > a && (g = a),
         g > 0 && (d.rShiftTo(g, d),
             f.rShiftTo(g, f)); d.signum() > 0;) {
        (a = d.getLowestSetBit()) > 0 && d.rShiftTo(a, d),
        (a = f.getLowestSetBit()) > 0 && f.rShiftTo(a, f),
            d.compareTo(f) >= 0 ? (d.subTo(f, d),
                d.rShiftTo(1, d)) : (f.subTo(d, f),
                f.rShiftTo(1, f))
    }
    return g > 0 && f.lShiftTo(g, f),
        f
}

function bnpModInt(a) {
    if (0 >= a) {
        return 0
    }
    var b = this.DV % a
        , d = this.s < 0 ? a - 1 : 0;
    if (this.t > 0) {
        if (0 == b) {
            d = this[0] % a
        } else {
            for (var f = this.t - 1; f >= 0; --f) {
                d = (b * d + this[f]) % a
            }
        }
    }
    return d
}

function bnModInverse(b) {
    var g = b.isEven();
    if (this.isEven() && g || 0 == b.signum()) {
        return BigInteger.ZERO
    }
    for (var j = b.clone(), l = this.clone(), a = nbv(1), k = nbv(0), f = nbv(0), d = nbv(1); 0 != j.signum();) {
        for (; j.isEven();) {
            j.rShiftTo(1, j),
                g ? (a.isEven() && k.isEven() || (a.addTo(this, a),
                    k.subTo(b, k)),
                    a.rShiftTo(1, a)) : k.isEven() || k.subTo(b, k),
                k.rShiftTo(1, k)
        }
        for (; l.isEven();) {
            l.rShiftTo(1, l),
                g ? (f.isEven() && d.isEven() || (f.addTo(this, f),
                    d.subTo(b, d)),
                    f.rShiftTo(1, f)) : d.isEven() || d.subTo(b, d),
                d.rShiftTo(1, d)
        }
        j.compareTo(l) >= 0 ? (j.subTo(l, j),
        g && a.subTo(f, a),
            k.subTo(d, k)) : (l.subTo(j, l),
        g && f.subTo(a, f),
            d.subTo(k, d))
    }
    return 0 != l.compareTo(BigInteger.ONE) ? BigInteger.ZERO : d.compareTo(b) >= 0 ? d.subtract(b) : d.signum() < 0 ? (d.addTo(b, d),
        d.signum() < 0 ? d.add(b) : d) : d
}

function bnIsProbablePrime(b) {
    var d, f = this.abs();
    if (1 == f.t && f[0] <= lowprimes[lowprimes.length - 1]) {
        for (d = 0; d < lowprimes.length; ++d) {
            if (f[0] == lowprimes[d]) {
                return !0
            }
        }
        return !1
    }
    if (f.isEven()) {
        return !1
    }
    for (d = 1; d < lowprimes.length;) {
        for (var g = lowprimes[d], a = d + 1; a < lowprimes.length && lplim > g;) {
            g *= lowprimes[a++]
        }
        for (g = f.modInt(g); a > d;) {
            if (g % lowprimes[d++] == 0) {
                return !1
            }
        }
    }
    return f.millerRabin(b)
}

function bnpMillerRabin(b) {
    var g = this.subtract(BigInteger.ONE)
        , j = g.getLowestSetBit();
    if (0 >= j) {
        return !1
    }
    var l = g.shiftRight(j);
    b = b + 1 >> 1,
    b > lowprimes.length && (b = lowprimes.length);
    for (var a = nbi(), k = 0; b > k; ++k) {
        a.fromInt(lowprimes[k]);
        var f = a.modPow(l, this);
        if (0 != f.compareTo(BigInteger.ONE) && 0 != f.compareTo(g)) {
            for (var d = 1; d++ < j && 0 != f.compareTo(g);) {
                if (f = f.modPowInt(2, this),
                0 == f.compareTo(BigInteger.ONE)) {
                    return !1
                }
            }
            if (0 != f.compareTo(g)) {
                return !1
            }
        }
    }
    return !0
}

function EncryptedMessage() {
    this.n = null,
        this.e = 0
}

function PINBlock(a) {
    PinString = a,
        this.PINBlockByteArray = new Array,
        this.PINBlockLength = 0
}

function aCopy(b, d, f, h, a) {
    for (var g = 0; a > g; g++) {
        f[h] = b[d],
            d++,
            h++
    }
}

function fillByteArray(a) {
    var b, d;
    for (d = a.length,
             b = 0; d > b; b++) {
        a[b] = "F"
    }
}

function IsLetterOrDigitOrSpecial(a) {
    var b = a.charCodeAt(0);
    return b >= 33 && 126 >= b ? !0 : !1
}

function IsLetterOrDigit(a) {
    var b = a.charCodeAt(0);
    return b >= 48 && 57 >= b || b >= 65 && 90 >= b || b >= 97 && 122 >= b ? !0 : !1
}

function PINMessage(a, b, d) {
    if (d.toLowerCase() == "SHA1".toLowerCase()) {
        MAX_MESSAGE_SIZE_IN_BYTES = RSA_MODULUS_SIZE_IN_BYTES - OAEP_SHA1_OFFSET_IN_BYTES
    } else {
        if (d.toLowerCase() == "SHA2-256".toLowerCase()) {
            MAX_MESSAGE_SIZE_IN_BYTES = RSA_MODULUS_SIZE_IN_BYTES - OAEP_SHA2_256_OFFSET_IN_BYTES
        } else {
            if (d.toLowerCase() == "SHA2-384".toLowerCase()) {
                MAX_MESSAGE_SIZE_IN_BYTES = RSA_MODULUS_SIZE_IN_BYTES - OAEP_SHA2_384_OFFSET_IN_BYTES
            } else {
                if (d.toLowerCase() != "SHA2-512".toLowerCase()) {
                    throw ERR_INVALID_HASH
                }
                MAX_MESSAGE_SIZE_IN_BYTES = RSA_MODULUS_SIZE_IN_BYTES - OAEP_SHA2_512_OFFSET_IN_BYTES
            }
        }
    }
    if (1 > MAX_MESSAGE_SIZE_IN_BYTES) {
        throw ERR_INVALID_PIN_LENGTH
    }
    var f = 2 * MAX_MESSAGE_SIZE_IN_BYTES;
    pinMessageArray = new Array(f),
        pinMessageArray[0] = "0",
        pinMessageArray[1] = "1",
        pinMessageLength = 2,
        PINLengthInBytes = a.length / 2,
        addPinBlockToMessageArray(a),
        addRandomStringToMessageArray(b)
}

function PINMessage2(b, d, f, g) {
    if (g.toLowerCase() == "SHA1".toLowerCase()) {
        MAX_MESSAGE_SIZE_IN_BYTES = RSA_MODULUS_SIZE_IN_BYTES - OAEP_SHA1_OFFSET_IN_BYTES
    } else {
        if (g.toLowerCase() == "SHA2-256".toLowerCase()) {
            MAX_MESSAGE_SIZE_IN_BYTES = RSA_MODULUS_SIZE_IN_BYTES - OAEP_SHA2_256_OFFSET_IN_BYTES
        } else {
            if (g.toLowerCase() == "SHA2-384".toLowerCase()) {
                MAX_MESSAGE_SIZE_IN_BYTES = RSA_MODULUS_SIZE_IN_BYTES - OAEP_SHA2_384_OFFSET_IN_BYTES
            } else {
                if (g.toLowerCase() != "SHA2-512".toLowerCase()) {
                    throw ERR_INVALID_HASH
                }
                MAX_MESSAGE_SIZE_IN_BYTES = RSA_MODULUS_SIZE_IN_BYTES - OAEP_SHA2_512_OFFSET_IN_BYTES
            }
        }
    }
    if (1 > MAX_MESSAGE_SIZE_IN_BYTES) {
        throw ERR_INVALID_PIN_LENGTH
    }
    var a = 2 * MAX_MESSAGE_SIZE_IN_BYTES;
    pinMessageArray = new Array(a),
        pinMessageArray[0] = "0",
        pinMessageArray[1] = "2",
        pinMessageLength = 2,
        PINLengthInBytes = b.length / 2,
        addPinBlockToMessageArray(b),
        addPinBlockToMessageArray(d),
        addRandomStringToMessageArray(f)
}

function addPinBlockToMessageArray(a) {
    if (null == a) {
        throw ERR_INVALID_PIN_BLOCK
    }
    aCopy(a, 0, pinMessageArray, pinMessageLength, a.length),
        pinMessageLength += a.length
}

function addRandomStringToMessageArray(b) {
    if (null == b) {
        throw ERR_INVALID_RANDOM_NUMBER
    }
    var d = ifValidHex(b);
    if (!d) {
        throw ERR_INVALID_RANDOM_NUMBER
    }
    var f = 0
        , g = b.length;
    if (f = g % 2) {
        throw ERR_INVALID_RANDOM_NUMBER_LENGTH
    }
    var a = (MAX_MESSAGE_SIZE_IN_BYTES - pinMessageLength / 2) * NUM_OF_NIBBLES_PER_BYTE;
    if (MIN_RANDOM_NUMBER_STRING_LENGTH > g || g > a) {
        throw ERR_INVALID_RANDOM_NUMBER_LENGTH
    }
    aCopyStr(b, 0, pinMessageArray, pinMessageLength, g),
        pinMessageLength += g
}

function OAEPEncodedMessage(a, b, d) {
    if (ENCODED_MESSAGE_SIZE_IN_BYTES = RSA_MODULUS_SIZE_IN_BYTES - 1,
    d.toLowerCase() == "SHA1".toLowerCase()) {
        HASH_ALGO_SIZE_IN_BYTES = SHA1_HASH_SIZE_IN_BYTES,
            MAX_PIN_MESSAGE_SIZE_IN_BYTES = RSA_MODULUS_SIZE_IN_BYTES - OAEP_SHA1_OFFSET_IN_BYTES,
            DATA_BLOCK_SIZE_IN_BYTES = ENCODED_MESSAGE_SIZE_IN_BYTES - SHA1_HASH_SIZE_IN_BYTES
    } else {
        if (d.toLowerCase() == "SHA2-256".toLowerCase()) {
            HASH_ALGO_SIZE_IN_BYTES = SHA2_256_HASH_SIZE_IN_BYTES,
                MAX_PIN_MESSAGE_SIZE_IN_BYTES = RSA_MODULUS_SIZE_IN_BYTES - OAEP_SHA2_256_OFFSET_IN_BYTES,
                DATA_BLOCK_SIZE_IN_BYTES = ENCODED_MESSAGE_SIZE_IN_BYTES - SHA2_256_HASH_SIZE_IN_BYTES
        } else {
            if (d.toLowerCase() == "SHA2-384".toLowerCase()) {
                HASH_ALGO_SIZE_IN_BYTES = SHA2_384_HASH_SIZE_IN_BYTES,
                    MAX_PIN_MESSAGE_SIZE_IN_BYTES = RSA_MODULUS_SIZE_IN_BYTES - OAEP_SHA2_384_OFFSET_IN_BYTES,
                    DATA_BLOCK_SIZE_IN_BYTES = ENCODED_MESSAGE_SIZE_IN_BYTES - SHA2_384_HASH_SIZE_IN_BYTES
            } else {
                if (d.toLowerCase() != "SHA2-512".toLowerCase()) {
                    throw ERR_INVALID_HASH
                }
                HASH_ALGO_SIZE_IN_BYTES = SHA2_512_HASH_SIZE_IN_BYTES,
                    MAX_PIN_MESSAGE_SIZE_IN_BYTES = RSA_MODULUS_SIZE_IN_BYTES - OAEP_SHA2_512_OFFSET_IN_BYTES,
                    DATA_BLOCK_SIZE_IN_BYTES = ENCODED_MESSAGE_SIZE_IN_BYTES - SHA2_512_HASH_SIZE_IN_BYTES
            }
        }
    }
    doOAEPEncoding(a, b, d)
}

function randomString(b) {
    for (var d = "0123456789ABCDEF", f = b, h = "", a = 0; f > a; a++) {
        var g = Math.floor(Math.random() * d.length);
        h += d.substring(g, g + 1)
    }
    return h
}

function parseBigInt(a, b) {
    return new BigInteger(a, b)
}

function aCopyStr(b, g, j, l, a) {
    for (var k = new Array, f = 0; f < b.length; f++) {
        k.push(b.charAt(f))
    }
    for (var d = 0; a > d; d++) {
        j[l] = k[g],
            g++,
            l++
    }
}

function xorByteArrays(l, a) {
    for (var j = [], d = [], f = toString(l), b = toString(a), m = new Array, g = new Array, k = 0; k < f.length; k++) {
        m[k] = parseInt(f.charAt(k), 16)
    }
    for (var k = 0; k < b.length; k++) {
        g[k] = parseInt(b.charAt(k), 16)
    }
    for (var k = 0; k < m.length; k++) {
        j.push(m[k] ^ g[k])
    }
    for (var k = 0; k < j.length; k++) {
        d[k] = j[k].toString(16)
    }
    return d
}

function doOAEPEncoding(m, v, H) {
    var z, C, y, q = new Array(2 * DATA_BLOCK_SIZE_IN_BYTES), D = new Array(2 * DATA_BLOCK_SIZE_IN_BYTES),
        K = new Array(2 * DATA_BLOCK_SIZE_IN_BYTES), J = (new Array(2 * HASH_ALGO_SIZE_IN_BYTES),
            new Array(2 * HASH_ALGO_SIZE_IN_BYTES)), b = new Array(2 * HASH_ALGO_SIZE_IN_BYTES),
        k = new Array(2 * HASH_ALGO_SIZE_IN_BYTES), j = new Array(2 + 2 * ENCODED_MESSAGE_SIZE_IN_BYTES), d = new Array,
        z = m.length / 2;
    if (MIN_PIN_MESSAGE_SIZE_IN_BYTES > z || z > MAX_PIN_MESSAGE_SIZE_IN_BYTES) {
        throw ERR_INVALID_PIN_MESSAGE_LENGTH
    }
    P = randomString(2 * ENCODING_PARAMETER_SIZE_IN_BYTES);
    var F = new jsSHA(P, "HEX");
    if (H.toLowerCase() == "SHA1".toLowerCase()) {
        d = F.getHash("SHA-1", "HEX")
    } else {
        if (H.toLowerCase() == "SHA2-256".toLowerCase()) {
            d = F.getHash("SHA-256", "HEX")
        } else {
            if (H.toLowerCase() == "SHA2-384".toLowerCase()) {
                d = F.getHash("SHA-384", "HEX")
            } else {
                if (H.toLowerCase() != "SHA2-512".toLowerCase()) {
                    throw ERR_INVALID_HASH
                }
                d = F.getHash("SHA-512", "HEX")
            }
        }
    }
    var x;
    x = q.length;
    for (var G = 0; x > G; G++) {
        q[G] = 0
    }
    aCopyStr(d, 0, q, 0, 2 * HASH_ALGO_SIZE_IN_BYTES),
        C = 2 * HASH_ALGO_SIZE_IN_BYTES,
        y = 2 * (DATA_BLOCK_SIZE_IN_BYTES - HASH_ALGO_SIZE_IN_BYTES - z - 1),
        C += y,
        q[C] = "0",
        C++,
        q[C] = "1",
        C++,
        aCopy(m, 0, q, C, m.length),
        J = randomString(J.length);
    for (var B = new Array, w = 0; w < J.length; w++) {
        B.push(J.charAt(w))
    }
    MGF(B, D, 2 * DATA_BLOCK_SIZE_IN_BYTES, H),
        K = xorByteArrays(q, D),
        MGF(K, b, 2 * HASH_ALGO_SIZE_IN_BYTES, H),
        k = xorByteArrays(J, b),
        j[0] = "0",
        j[1] = "0",
        aCopy(k, 0, j, 2, 2 * HASH_ALGO_SIZE_IN_BYTES),
        aCopy(K, 0, j, 2 + 2 * HASH_ALGO_SIZE_IN_BYTES, 2 * DATA_BLOCK_SIZE_IN_BYTES),
        str1 = toString(j),
        encodedMsg = new BigInteger(str1, 16)
}

function I2OSP(a, b) {
    var d, f = new Array(2 * NUM_OF_BYTES_PER_WORD);
    for (d = 0; 2 * NUM_OF_BYTES_PER_WORD > d; d++) {
        f[d] = 0
    }
    return f[b] = a.toString(16),
        f
}

function MGF(m, v, F, y) {
    var A, x, q, B, H, G, b, k = new Array(2 * ENCODED_MESSAGE_SIZE_IN_BYTES),
        j = new Array(2 * HASH_ALGO_SIZE_IN_BYTES), d = new Array(2 * NUM_OF_BYTES_PER_WORD), C = "";
    q = m.length;
    var w = new Array(q + 2 * NUM_OF_BYTES_PER_WORD);
    for (x = Math.floor(F / (2 * HASH_ALGO_SIZE_IN_BYTES)),
             H = F - x * HASH_ALGO_SIZE_IN_BYTES * 2,
         H > 0 && x++,
             G = 2 * HASH_ALGO_SIZE_IN_BYTES,
             b = 0; 2 * ENCODED_MESSAGE_SIZE_IN_BYTES > b; b++) {
        k[b] = 0
    }
    for (A = 0; x > A; A++) {
        d = I2OSP(A, 7),
            aCopy(m, 0, k, 0, q),
            aCopy(d, 0, k, q, 2 * NUM_OF_BYTES_PER_WORD),
            aCopy(k, 0, w, 0, q + 2 * NUM_OF_BYTES_PER_WORD);
        var D = w.toString();
        C = D.split(",").join("");
        var z = new jsSHA(C, "HEX");
        if (y.toLowerCase() == "SHA1".toLowerCase()) {
            j = z.getHash("SHA-1", "HEX")
        } else {
            if (y.toLowerCase() == "SHA2-256".toLowerCase()) {
                j = z.getHash("SHA-256", "HEX")
            } else {
                if (y.toLowerCase() == "SHA2-384".toLowerCase()) {
                    j = z.getHash("SHA-384", "HEX")
                } else {
                    if (y.toLowerCase() != "SHA2-512".toLowerCase()) {
                        throw ERR_INVALID_HASH
                    }
                    j = z.getHash("SHA-512", "HEX")
                }
            }
        }
        B = 2 * A * HASH_ALGO_SIZE_IN_BYTES,
        A == x - 1 && H > 0 && (G = H),
            aCopyStr(j, 0, v, B, G)
    }
}

function ifValidHex(a) {
    var b;
    for (b = 0; b < a.length; b++) {
        if (isNaN(parseInt(a.charAt(b), 16))) {
            return !1
        }
    }
    return !0
}

function validate_Mod_Exp(b, f) {
    var g = 0
        , j = 0;
    if (g = b.length % 2,
        j = f.length % 2,
    g || j) {
        return ERR_INVALID_RSA_KEY_LENGTH
    }
    var a = b.length / 2
        , h = f.length / 2;
    if (64 > a || a > 256) {
        return ERR_INVALID_RSA_KEY_LENGTH
    }
    if (h > a) {
        return ERR_INVALID_RSA_KEY_LENGTH
    }
    var d = ifValidHex(b);
    return d ? (d = ifValidHex(f),
        d ? ERR_NO_ERROR : ERR_INVALID_RSA_KEY) : ERR_INVALID_RSA_KEY
}

function clearData() {
    PinString = "",
        PINLengthInBytes = 0,
        pinMessageArray = new Array,
        pinMessageLength = 0,
        encodedMsg = "",
        P = "",
        encryptedMsg = ""
}

function initialisePublicKeyData(a, b) {
    var d = validate_Mod_Exp(a, b);
    return d ? d : (RSA_MODULUS_SIZE_IN_BYTES = a.length / 2,
        MODULUS_STRING = a,
        EXPONENT_STRING = b,
        isPublicKeyDataValid = !0,
        ERR_NO_ERROR)
}

function OBM_GetEncodingParameter() {
    return P_String
}

function OBM_GetEncryptedPassword() {
    return C_String
}

function OBM_EncryptPassword_Ex(b, g, j) {
    try {
        var l = new EncryptedMessage;
        l.setPublic(MODULUS_STRING, EXPONENT_STRING);
        var a = new PINBlock(b);
        if (d = a.ValidateAndCreatePINBlockByteArray(b),
        d != ERR_NO_ERROR) {
            throw d
        }
        var k = new PINMessage(a.getBytes(), g, j)
            , f = new OAEPEncodedMessage(k.getBytes(), g, j);
        return P_String = f.getEncodingParameter(),
            l.doRSAEncryption(f.getBytes(), MODULUS_STRING, EXPONENT_STRING),
            C_String = l.getBytes(),
            ERR_NO_ERROR
    } catch (d) {
        return d
    }
}

function OBM_EncryptPassword(b, f) {
    try {
        if (!isPublicKeyDataValid) {
            throw ERR_INVALID_RSA_KEY
        }
        var g = new EncryptedMessage;
        g.setPublic(MODULUS_STRING, EXPONENT_STRING);
        var j = new PINBlock(b);
        if (d = j.ValidateAndCreatePINBlockByteArray(b),
        d != ERR_NO_ERROR) {
            throw d
        }
        var a = new PINMessage(j.getBytes(), f, "SHA1")
            , h = new OAEPEncodedMessage(a.getBytes(), f, "SHA1");
        return P_String = h.getEncodingParameter(),
            g.doRSAEncryption(h.getBytes(), MODULUS_STRING, EXPONENT_STRING),
            C_String = g.getBytes(),
            ERR_NO_ERROR
    } catch (d) {
        return d
    }
}

function OBM_EncryptChangePassword(l, a, j) {
    try {
        if (!isPublicKeyDataValid) {
            throw ERR_INVALID_RSA_KEY
        }
        var d = new EncryptedMessage;
        d.setPublic(MODULUS_STRING, EXPONENT_STRING);
        var f = new PINBlock(l);
        if (k = f.ValidateAndCreatePINBlockByteArray(l),
        k != ERR_NO_ERROR) {
            throw k
        }
        var b = new PINBlock(a);
        if (k = b.ValidateAndCreatePINBlockByteArray(a),
        k != ERR_NO_ERROR) {
            throw k
        }
        var m = new PINMessage2(f.getBytes(), b.getBytes(), j, "SHA1")
            , g = new OAEPEncodedMessage(m.getBytes(), j, "SHA1");
        return P_String = g.getEncodingParameter(),
            d.doRSAEncryption(g.getBytes(), MODULUS_STRING, EXPONENT_STRING),
            C_String = d.getBytes(),
            ERR_NO_ERROR
    } catch (k) {
        return k
    }
}

function OBM_EncryptChangePassword_Ex(p, b, k, f) {
    try {
        if (!isPublicKeyDataValid) {
            throw ERR_INVALID_RSA_KEY
        }
        var g = new EncryptedMessage;
        g.setPublic(MODULUS_STRING, EXPONENT_STRING);
        var d = new PINBlock(p);
        if (l = d.ValidateAndCreatePINBlockByteArray(p),
        l != ERR_NO_ERROR) {
            throw l
        }
        var q = new PINBlock(b);
        if (l = q.ValidateAndCreatePINBlockByteArray(b),
        l != ERR_NO_ERROR) {
            throw l
        }
        var j = new PINMessage2(d.getBytes(), q.getBytes(), k, f)
            , m = new OAEPEncodedMessage(j.getBytes(), k, f);
        return P_String = m.getEncodingParameter(),
            g.doRSAEncryption(m.getBytes(), MODULUS_STRING, EXPONENT_STRING),
            C_String = g.getBytes(),
            ERR_NO_ERROR
    } catch (l) {
        return l
    }
}

function toString(a) {
    var b, d = a.toString();
    return b = d.split(",").join("")
}

function s2hex(a) {
    for (var b = "", d = 0; d < a.length; d++) {
        c = a.charCodeAt(d),
            b += (16 > c ? "0" : "") + c.toString(16)
    }
    return b
}

var SUPPORTED_ALGS = 7
    , missingBytes = 0;
!function (W) {
    function Z(a, b) {
        this.highOrder = a,
            this.lowOrder = b
    }

    function al(b, d) {
        var f, h = [], a = (1 << d) - 1, g = b.length * d;
        for (f = 0; g > f; f += d) {
            h[f >>> 5] |= (b.charCodeAt(f / d) & a) << 32 - d - f % 32
        }
        return {
            value: h,
            binLen: g
        }
    }

    function ae(b) {
        var d, f, g = [], a = b.length;
        if (0 !== a % 2) {
            throw "String of HEX type must be in byte increments"
        }
        for (d = 0; a > d; d += 2) {
            if (f = parseInt(b.substr(d, 2), 16),
                isNaN(f)) {
                throw "String of HEX type contains invalid characters"
            }
            g[d >>> 3] |= f << 24 - 4 * (d % 8)
        }
        return {
            value: g,
            binLen: 4 * a
        }
    }

    function ah(v) {
        var b, m, f, g, d, w, l = [], u = 0, p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        if (-1 === v.search(/^[a-zA-Z0-9=+\/]+$/)) {
            throw "Invalid character in base-64 string"
        }
        if (w = v.indexOf("="),
            v = v.replace(/\=/g, ""),
        -1 !== w && w < v.length) {
            throw "Invalid '=' found in base-64 string"
        }
        for (m = 0; m < v.length; m += 4) {
            for (d = v.substr(m, 4),
                     g = 0,
                     f = 0; f < d.length; f += 1) {
                b = p.indexOf(d[f]),
                    g |= b << 18 - 6 * f
            }
            for (f = 0; f < d.length - 1; f += 1) {
                l[u >> 2] |= (g >>> 16 - 8 * f & 255) << 24 - 8 * (u % 4),
                    u += 1
            }
        }
        return {
            value: l,
            binLen: 8 * u
        }
    }

    function ad(b, f) {
        var g, l, a = "0123456789abcdef", h = "", d = 4 * b.length;
        for (g = 0; d > g; g += 1) {
            l = b[g >>> 2] >>> 8 * (3 - g % 4),
                h += a.charAt(l >>> 4 & 15) + a.charAt(15 & l)
        }
        return f.outputUpper ? h.toUpperCase() : h
    }

    function Y(b, g) {
        var l, p, a, m = "", f = 4 * b.length, d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        for (l = 0; f > l; l += 3) {
            for (a = (b[l >>> 2] >>> 8 * (3 - l % 4) & 255) << 16 | (b[l + 1 >>> 2] >>> 8 * (3 - (l + 1) % 4) & 255) << 8 | b[l + 2 >>> 2] >>> 8 * (3 - (l + 2) % 4) & 255,
                     p = 0; 4 > p; p += 1) {
                m += 8 * l + 6 * p <= 32 * b.length ? d.charAt(a >>> 6 * (3 - p) & 63) : g.b64Pad
            }
        }
        return m
    }

    function ai(a) {
        var b = {
            outputUpper: !1,
            b64Pad: "="
        };
        try {
            a.hasOwnProperty("outputUpper") && (b.outputUpper = a.outputUpper),
            a.hasOwnProperty("b64Pad") && (b.b64Pad = a.b64Pad)
        } catch (d) {
        }
        if ("boolean" != typeof b.outputUpper) {
            throw "Invalid outputUpper formatting option"
        }
        if ("string" != typeof b.b64Pad) {
            throw "Invalid b64Pad formatting option"
        }
        return b
    }

    function aq(a, b) {
        return a << b | a >>> 32 - b
    }

    function ap(a, b) {
        return a >>> b | a << 32 - b
    }

    function k(b, d) {
        var f = null
            , a = new Z(b.highOrder, b.lowOrder);
        return f = 32 >= d ? new Z(a.highOrder >>> d | a.lowOrder << 32 - d & 4294967295, a.lowOrder >>> d | a.highOrder << 32 - d & 4294967295) : new Z(a.lowOrder >>> d - 32 | a.highOrder << 64 - d & 4294967295, a.highOrder >>> d - 32 | a.lowOrder << 64 - d & 4294967295)
    }

    function V(a, b) {
        return a >>> b
    }

    function U(a, b) {
        var d = null;
        return d = 32 >= b ? new Z(a.highOrder >>> b, a.lowOrder >>> b | a.highOrder << 32 - b & 4294967295) : new Z(0, a.highOrder >>> b - 32)
    }

    function J(a, b, d) {
        return a ^ b ^ d
    }

    function aj(a, b, d) {
        return a & b ^ ~a & d
    }

    function ac(a, b, d) {
        return new Z(a.highOrder & b.highOrder ^ ~a.highOrder & d.highOrder, a.lowOrder & b.lowOrder ^ ~a.lowOrder & d.lowOrder)
    }

    function ak(a, b, d) {
        return a & b ^ a & d ^ b & d
    }

    function ag(a, b, d) {
        return new Z(a.highOrder & b.highOrder ^ a.highOrder & d.highOrder ^ b.highOrder & d.highOrder, a.lowOrder & b.lowOrder ^ a.lowOrder & d.lowOrder ^ b.lowOrder & d.lowOrder)
    }

    function ab(a) {
        return ap(a, 2) ^ ap(a, 13) ^ ap(a, 22)
    }

    function aa(b) {
        var d = k(b, 28)
            , f = k(b, 34)
            , a = k(b, 39);
        return new Z(d.highOrder ^ f.highOrder ^ a.highOrder, d.lowOrder ^ f.lowOrder ^ a.lowOrder)
    }

    function an(a) {
        return ap(a, 6) ^ ap(a, 11) ^ ap(a, 25)
    }

    function j(b) {
        var d = k(b, 14)
            , f = k(b, 18)
            , a = k(b, 41);
        return new Z(d.highOrder ^ f.highOrder ^ a.highOrder, d.lowOrder ^ f.lowOrder ^ a.lowOrder)
    }

    function am(a) {
        return ap(a, 7) ^ ap(a, 18) ^ V(a, 3)
    }

    function C(b) {
        var d = k(b, 1)
            , f = k(b, 8)
            , a = U(b, 7);
        return new Z(d.highOrder ^ f.highOrder ^ a.highOrder, d.lowOrder ^ f.lowOrder ^ a.lowOrder)
    }

    function z(a) {
        return ap(a, 17) ^ ap(a, 19) ^ V(a, 10)
    }

    function K(b) {
        var d = k(b, 19)
            , f = k(b, 61)
            , a = U(b, 6);
        return new Z(d.highOrder ^ f.highOrder ^ a.highOrder, d.lowOrder ^ f.lowOrder ^ a.lowOrder)
    }

    function H(a, b) {
        var d = (65535 & a) + (65535 & b)
            , f = (a >>> 16) + (b >>> 16) + (d >>> 16);
        return (65535 & f) << 16 | 65535 & d
    }

    function q(b, d, f, h) {
        var a = (65535 & b) + (65535 & d) + (65535 & f) + (65535 & h)
            , g = (b >>> 16) + (d >>> 16) + (f >>> 16) + (h >>> 16) + (a >>> 16);
        return (65535 & g) << 16 | 65535 & a
    }

    function ao(b, f, g, l, a) {
        var h = (65535 & b) + (65535 & f) + (65535 & g) + (65535 & l) + (65535 & a)
            , d = (b >>> 16) + (f >>> 16) + (g >>> 16) + (l >>> 16) + (a >>> 16) + (h >>> 16);
        return (65535 & d) << 16 | 65535 & h
    }

    function Q(b, f) {
        var h, a, g, d;
        return h = (65535 & b.lowOrder) + (65535 & f.lowOrder),
            a = (b.lowOrder >>> 16) + (f.lowOrder >>> 16) + (h >>> 16),
            g = (65535 & a) << 16 | 65535 & h,
            h = (65535 & b.highOrder) + (65535 & f.highOrder) + (a >>> 16),
            a = (b.highOrder >>> 16) + (f.highOrder >>> 16) + (h >>> 16),
            d = (65535 & a) << 16 | 65535 & h,
            new Z(d, g)
    }

    function F(d, l, p, b) {
        var m, g, f, a;
        return m = (65535 & d.lowOrder) + (65535 & l.lowOrder) + (65535 & p.lowOrder) + (65535 & b.lowOrder),
            g = (d.lowOrder >>> 16) + (l.lowOrder >>> 16) + (p.lowOrder >>> 16) + (b.lowOrder >>> 16) + (m >>> 16),
            f = (65535 & g) << 16 | 65535 & m,
            m = (65535 & d.highOrder) + (65535 & l.highOrder) + (65535 & p.highOrder) + (65535 & b.highOrder) + (g >>> 16),
            g = (d.highOrder >>> 16) + (l.highOrder >>> 16) + (p.highOrder >>> 16) + (b.highOrder >>> 16) + (m >>> 16),
            a = (65535 & g) << 16 | 65535 & m,
            new Z(a, f)
    }

    function af(r, l, d, f, b) {
        var u, g, p, m;
        return u = (65535 & r.lowOrder) + (65535 & l.lowOrder) + (65535 & d.lowOrder) + (65535 & f.lowOrder) + (65535 & b.lowOrder),
            g = (r.lowOrder >>> 16) + (l.lowOrder >>> 16) + (d.lowOrder >>> 16) + (f.lowOrder >>> 16) + (b.lowOrder >>> 16) + (u >>> 16),
            p = (65535 & g) << 16 | 65535 & u,
            u = (65535 & r.highOrder) + (65535 & l.highOrder) + (65535 & d.highOrder) + (65535 & f.highOrder) + (65535 & b.highOrder) + (g >>> 16),
            g = (r.highOrder >>> 16) + (l.highOrder >>> 16) + (d.highOrder >>> 16) + (f.highOrder >>> 16) + (b.highOrder >>> 16) + (u >>> 16),
            m = (65535 & g) << 16 | 65535 & u,
            new Z(m, p)
    }

    function G(w, D) {
        var av, R, at, O, y, au, ay, f, v, m = [], M = aj, ar = J, L = ak, I = aq, ax = H, b = ao,
            aw = [1732584193, 4023233417, 2562383102, 271733878, 3285377520],
            g = [1518500249, 1518500249, 1518500249, 1518500249, 1518500249, 1518500249, 1518500249, 1518500249, 1518500249, 1518500249, 1518500249, 1518500249, 1518500249, 1518500249, 1518500249, 1518500249, 1518500249, 1518500249, 1518500249, 1518500249, 1859775393, 1859775393, 1859775393, 1859775393, 1859775393, 1859775393, 1859775393, 1859775393, 1859775393, 1859775393, 1859775393, 1859775393, 1859775393, 1859775393, 1859775393, 1859775393, 1859775393, 1859775393, 1859775393, 1859775393, 2400959708, 2400959708, 2400959708, 2400959708, 2400959708, 2400959708, 2400959708, 2400959708, 2400959708, 2400959708, 2400959708, 2400959708, 2400959708, 2400959708, 2400959708, 2400959708, 2400959708, 2400959708, 2400959708, 2400959708, 3395469782, 3395469782, 3395469782, 3395469782, 3395469782, 3395469782, 3395469782, 3395469782, 3395469782, 3395469782, 3395469782, 3395469782, 3395469782, 3395469782, 3395469782, 3395469782, 3395469782, 3395469782, 3395469782, 3395469782];
        for (w[D >>> 5] |= 128 << 24 - D % 32,
                 w[(D + 65 >>> 9 << 4) + 15] = D,
                 v = w.length,
                 ay = 0; v > ay; ay += 16) {
            for (av = aw[0],
                     R = aw[1],
                     at = aw[2],
                     O = aw[3],
                     y = aw[4],
                     f = 0; 80 > f; f += 1) {
                m[f] = 16 > f ? w[f + ay] : I(m[f - 3] ^ m[f - 8] ^ m[f - 14] ^ m[f - 16], 1),
                    au = 20 > f ? b(I(av, 5), M(R, at, O), y, g[f], m[f]) : 40 > f ? b(I(av, 5), ar(R, at, O), y, g[f], m[f]) : 60 > f ? b(I(av, 5), L(R, at, O), y, g[f], m[f]) : b(I(av, 5), ar(R, at, O), y, g[f], m[f]),
                    y = O,
                    O = at,
                    at = I(R, 30),
                    R = av,
                    av = au
            }
            aw[0] = ax(av, aw[0]),
                aw[1] = ax(R, aw[1]),
                aw[2] = ax(at, aw[2]),
                aw[3] = ax(O, aw[3]),
                aw[4] = ax(y, aw[4])
        }
        return aw
    }

    function x(au, aF, aA) {
        var aD, az, av, aE, aH, aG, p, at, ar, N, w, v, aw, O, ax, d, R, m, b, T, l, f, M, aB, A, ay, aC, y, g, B,
            r = [];
        if (("SHA-224" === aA || "SHA-256" === aA) && 2 & SUPPORTED_ALGS) {
            v = 64,
                aw = (aF + 65 >>> 9 << 4) + 15,
                d = 16,
                R = 1,
                aC = Number,
                m = H,
                b = q,
                T = ao,
                l = am,
                f = z,
                M = ab,
                aB = an,
                ay = ak,
                A = aj,
                y = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
                w = "SHA-224" === aA ? [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428] : [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]
        } else {
            if ("SHA-384" !== aA && "SHA-512" !== aA || !(4 & SUPPORTED_ALGS)) {
                throw "Unexpected error in SHA-2 implementation"
            }
            v = 80,
                aw = (aF + 128 >>> 10 << 5) + 31,
                d = 32,
                R = 2,
                aC = Z,
                m = Q,
                b = F,
                T = af,
                l = C,
                f = K,
                M = aa,
                aB = j,
                ay = ag,
                A = ac,
                y = [new aC(1116352408, 3609767458), new aC(1899447441, 602891725), new aC(3049323471, 3964484399), new aC(3921009573, 2173295548), new aC(961987163, 4081628472), new aC(1508970993, 3053834265), new aC(2453635748, 2937671579), new aC(2870763221, 3664609560), new aC(3624381080, 2734883394), new aC(310598401, 1164996542), new aC(607225278, 1323610764), new aC(1426881987, 3590304994), new aC(1925078388, 4068182383), new aC(2162078206, 991336113), new aC(2614888103, 633803317), new aC(3248222580, 3479774868), new aC(3835390401, 2666613458), new aC(4022224774, 944711139), new aC(264347078, 2341262773), new aC(604807628, 2007800933), new aC(770255983, 1495990901), new aC(1249150122, 1856431235), new aC(1555081692, 3175218132), new aC(1996064986, 2198950837), new aC(2554220882, 3999719339), new aC(2821834349, 766784016), new aC(2952996808, 2566594879), new aC(3210313671, 3203337956), new aC(3336571891, 1034457026), new aC(3584528711, 2466948901), new aC(113926993, 3758326383), new aC(338241895, 168717936), new aC(666307205, 1188179964), new aC(773529912, 1546045734), new aC(1294757372, 1522805485), new aC(1396182291, 2643833823), new aC(1695183700, 2343527390), new aC(1986661051, 1014477480), new aC(2177026350, 1206759142), new aC(2456956037, 344077627), new aC(2730485921, 1290863460), new aC(2820302411, 3158454273), new aC(3259730800, 3505952657), new aC(3345764771, 106217008), new aC(3516065817, 3606008344), new aC(3600352804, 1432725776), new aC(4094571909, 1467031594), new aC(275423344, 851169720), new aC(430227734, 3100823752), new aC(506948616, 1363258195), new aC(659060556, 3750685593), new aC(883997877, 3785050280), new aC(958139571, 3318307427), new aC(1322822218, 3812723403), new aC(1537002063, 2003034995), new aC(1747873779, 3602036899), new aC(1955562222, 1575990012), new aC(2024104815, 1125592928), new aC(2227730452, 2716904306), new aC(2361852424, 442776044), new aC(2428436474, 593698344), new aC(2756734187, 3733110249), new aC(3204031479, 2999351573), new aC(3329325298, 3815920427), new aC(3391569614, 3928383900), new aC(3515267271, 566280711), new aC(3940187606, 3454069534), new aC(4118630271, 4000239992), new aC(116418474, 1914138554), new aC(174292421, 2731055270), new aC(289380356, 3203993006), new aC(460393269, 320620315), new aC(685471733, 587496836), new aC(852142971, 1086792851), new aC(1017036298, 365543100), new aC(1126000580, 2618297676), new aC(1288033470, 3409855158), new aC(1501505948, 4234509866), new aC(1607167915, 987167468), new aC(1816402316, 1246189591)],
                w = "SHA-384" === aA ? [new aC(3418070365, 3238371032), new aC(1654270250, 914150663), new aC(2438529370, 812702999), new aC(355462360, 4144912697), new aC(1731405415, 4290775857), new aC(41048885895, 1750603025), new aC(3675008525, 1694076839), new aC(1203062813, 3204075428)] : [new aC(1779033703, 4089235720), new aC(3144134277, 2227873595), new aC(1013904242, 4271175723), new aC(2773480762, 1595750129), new aC(1359893119, 2917565137), new aC(2600822924, 725511199), new aC(528734635, 4215389547), new aC(1541459225, 327033209)]
        }
        for (au[aF >>> 5] |= 128 << 24 - aF % 32,
                 au[aw] = aF,
                 g = au.length,
                 O = 0; g > O; O += d) {
            for (aD = w[0],
                     az = w[1],
                     av = w[2],
                     aE = w[3],
                     aH = w[4],
                     aG = w[5],
                     p = w[6],
                     at = w[7],
                     ax = 0; v > ax; ax += 1) {
                r[ax] = 16 > ax ? new aC(au[ax * R + O], au[ax * R + O + 1]) : b(f(r[ax - 2]), r[ax - 7], l(r[ax - 15]), r[ax - 16]),
                    ar = T(at, aB(aH), A(aH, aG, p), y[ax], r[ax]),
                    N = m(M(aD), ay(aD, az, av)),
                    at = p,
                    p = aG,
                    aG = aH,
                    aH = m(aE, ar),
                    aE = av,
                    av = az,
                    az = aD,
                    aD = m(ar, N)
            }
            w[0] = m(aD, w[0]),
                w[1] = m(az, w[1]),
                w[2] = m(av, w[2]),
                w[3] = m(aE, w[3]),
                w[4] = m(aH, w[4]),
                w[5] = m(aG, w[5]),
                w[6] = m(p, w[6]),
                w[7] = m(at, w[7])
        }
        if ("SHA-224" === aA && 2 & SUPPORTED_ALGS) {
            B = [w[0], w[1], w[2], w[3], w[4], w[5], w[6]]
        } else {
            if ("SHA-256" === aA && 2 & SUPPORTED_ALGS) {
                B = w
            } else {
                if ("SHA-384" === aA && 4 & SUPPORTED_ALGS) {
                    B = [w[0].highOrder, w[0].lowOrder, w[1].highOrder, w[1].lowOrder, w[2].highOrder, w[2].lowOrder, w[3].highOrder, w[3].lowOrder, w[4].highOrder, w[4].lowOrder, w[5].highOrder, w[5].lowOrder]
                } else {
                    if (!("SHA-512" === aA && 4 & SUPPORTED_ALGS)) {
                        throw "Unexpected error in SHA-2 implementation"
                    }
                    B = [w[0].highOrder, w[0].lowOrder, w[1].highOrder, w[1].lowOrder, w[2].highOrder, w[2].lowOrder, w[3].highOrder, w[3].lowOrder, w[4].highOrder, w[4].lowOrder, w[5].highOrder, w[5].lowOrder, w[6].highOrder, w[6].lowOrder, w[7].highOrder, w[7].lowOrder]
                }
            }
        }
        return B
    }

    var X = function (w, b, s) {
        var n = null
            , h = null
            , y = null
            , v = null
            , o = null
            , i = 0
            , d = [0]
            , m = 0
            , e = null;
        if (m = "undefined" != typeof s ? s : 8,
        8 !== m && 16 !== m) {
            throw "charSize must be 8 or 16"
        }
        if ("HEX" === b) {
            if (0 !== w.length % 2) {
                throw "srcString of HEX type must be in byte increments"
            }
            e = ae(w),
                i = e.binLen,
                d = e.value
        } else {
            if ("ASCII" === b || "TEXT" === b) {
                e = al(w, m),
                    i = e.binLen,
                    d = e.value
            } else {
                if ("B64" !== b) {
                    throw "inputFormat must be HEX, TEXT, ASCII, or B64"
                }
                e = ah(w),
                    i = e.binLen,
                    d = e.value
            }
        }
        this.getHash = function (g, l, p) {
            var u = null
                , f = d.slice()
                , a = "";
            switch (l) {
                case "HEX":
                    u = ad;
                    break;
                case "B64":
                    u = Y;
                    break;
                default:
                    throw "format must be HEX or B64"
            }
            if ("SHA-1" === g && 1 & SUPPORTED_ALGS) {
                null === n && (n = G(f, i)),
                    a = u(n, ai(p))
            } else {
                if ("SHA-224" === g && 2 & SUPPORTED_ALGS) {
                    null === h && (h = x(f, i, g)),
                        a = u(h, ai(p))
                } else {
                    if ("SHA-256" === g && 2 & SUPPORTED_ALGS) {
                        null === y && (y = x(f, i, g)),
                            a = u(y, ai(p))
                    } else {
                        if ("SHA-384" === g && 4 & SUPPORTED_ALGS) {
                            null === v && (v = x(f, i, g)),
                                a = u(v, ai(p))
                        } else {
                            if (!("SHA-512" === g && 4 & SUPPORTED_ALGS)) {
                                throw "Chosen SHA variant is not supported"
                            }
                            null === o && (o = x(f, i, g)),
                                a = u(o, ai(p))
                        }
                    }
                }
            }
            return a
        }
            ,
            this.getHMAC = function (aA, f, ay, av, M) {
                var aB, az, ax, D, p, g, au, L, at, ar = [], R = [], aw = null;
                switch (av) {
                    case "HEX":
                        aB = ad;
                        break;
                    case "B64":
                        aB = Y;
                        break;
                    default:
                        throw "outputFormat must be HEX or B64"
                }
                if ("SHA-1" === ay && 1 & SUPPORTED_ALGS) {
                    ax = 64,
                        at = 160
                } else {
                    if ("SHA-224" === ay && 2 & SUPPORTED_ALGS) {
                        ax = 64,
                            at = 224
                    } else {
                        if ("SHA-256" === ay && 2 & SUPPORTED_ALGS) {
                            ax = 64,
                                at = 256
                        } else {
                            if ("SHA-384" === ay && 4 & SUPPORTED_ALGS) {
                                ax = 128,
                                    at = 384
                            } else {
                                if (!("SHA-512" === ay && 4 & SUPPORTED_ALGS)) {
                                    throw "Chosen SHA variant is not supported"
                                }
                                ax = 128,
                                    at = 512
                            }
                        }
                    }
                }
                if ("HEX" === f) {
                    aw = ae(aA),
                        L = aw.binLen,
                        az = aw.value
                } else {
                    if ("ASCII" === f || "TEXT" === f) {
                        aw = al(aA, m),
                            L = aw.binLen,
                            az = aw.value
                    } else {
                        if ("B64" !== f) {
                            throw "inputFormat must be HEX, TEXT, ASCII, or B64"
                        }
                        aw = ah(aA),
                            L = aw.binLen,
                            az = aw.value
                    }
                }
                if (D = 8 * ax,
                    au = ax / 4 - 1,
                L / 8 > ax) {
                    if ("SHA-1" === ay && 1 & SUPPORTED_ALGS) {
                        az = G(az, L)
                    } else {
                        if (!(6 & SUPPORTED_ALGS)) {
                            throw "Unexpected error in HMAC implementation"
                        }
                        az = x(az, L, ay)
                    }
                    az[au] &= 4294967040
                } else {
                    ax > L / 8 && (az[au] &= 4294967040)
                }
                for (p = 0; au >= p; p += 1) {
                    ar[p] = 909522486 ^ az[p],
                        R[p] = 1549556828 ^ az[p]
                }
                if ("SHA-1" === ay && 1 & SUPPORTED_ALGS) {
                    g = G(R.concat(G(ar.concat(d), D + i)), D + at)
                } else {
                    if (!(6 & SUPPORTED_ALGS)) {
                        throw "Unexpected error in HMAC implementation"
                    }
                    g = x(R.concat(x(ar.concat(d), D + i, ay)), D + at, ay)
                }
                return aB(g, ai(M))
            }
    };
    W.jsSHA = X
}(global);
navigator = {
    appName: 'Microsoft Internet Explorer'
}
var dbits, canary = 244837814094590, j_lm = 15715070 == (16777215 & canary);
j_lm && "Microsoft Internet Explorer" == navigator.appName ? (BigInteger.prototype.am = am2,
    dbits = 30) : j_lm && "Netscape" != navigator.appName ? (BigInteger.prototype.am = am1,
    dbits = 26) : (BigInteger.prototype.am = am3,
    dbits = 28),
    BigInteger.prototype.DB = dbits,
    BigInteger.prototype.DM = (1 << dbits) - 1,
    BigInteger.prototype.DV = 1 << dbits;
var BI_FP = 52;
BigInteger.prototype.FV = Math.pow(2, BI_FP),
    BigInteger.prototype.F1 = BI_FP - dbits,
    BigInteger.prototype.F2 = 2 * dbits - BI_FP;
var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz", BI_RC = new Array, rr, vv;
for (rr = "0".charCodeAt(0),
         vv = 0; 9 >= vv; ++vv) {
    BI_RC[rr++] = vv
}
for (rr = "a".charCodeAt(0),
         vv = 10; 36 > vv; ++vv) {
    BI_RC[rr++] = vv
}
for (rr = "A".charCodeAt(0),
         vv = 10; 36 > vv; ++vv) {
    BI_RC[rr++] = vv
}
Classic.prototype.convert = cConvert,
    Classic.prototype.revert = cRevert,
    Classic.prototype.reduce = cReduce,
    Classic.prototype.mulTo = cMulTo,
    Classic.prototype.sqrTo = cSqrTo,
    Montgomery.prototype.convert = montConvert,
    Montgomery.prototype.revert = montRevert,
    Montgomery.prototype.reduce = montReduce,
    Montgomery.prototype.mulTo = montMulTo,
    Montgomery.prototype.sqrTo = montSqrTo,
    BigInteger.prototype.copyTo = bnpCopyTo,
    BigInteger.prototype.fromInt = bnpFromInt,
    BigInteger.prototype.fromString = bnpFromString,
    BigInteger.prototype.clamp = bnpClamp,
    BigInteger.prototype.dlShiftTo = bnpDLShiftTo,
    BigInteger.prototype.drShiftTo = bnpDRShiftTo,
    BigInteger.prototype.lShiftTo = bnpLShiftTo,
    BigInteger.prototype.rShiftTo = bnpRShiftTo,
    BigInteger.prototype.subTo = bnpSubTo,
    BigInteger.prototype.multiplyTo = bnpMultiplyTo,
    BigInteger.prototype.squareTo = bnpSquareTo,
    BigInteger.prototype.divRemTo = bnpDivRemTo,
    BigInteger.prototype.invDigit = bnpInvDigit,
    BigInteger.prototype.isEven = bnpIsEven,
    BigInteger.prototype.exp = bnpExp,
    BigInteger.prototype.toString = bnToString,
    BigInteger.prototype.negate = bnNegate,
    BigInteger.prototype.abs = bnAbs,
    BigInteger.prototype.compareTo = bnCompareTo,
    BigInteger.prototype.bitLength = bnBitLength,
    BigInteger.prototype.mod = bnMod,
    BigInteger.prototype.modPowInt = bnModPowInt,
    BigInteger.ZERO = nbv(0),
    BigInteger.ONE = nbv(1),
    NullExp.prototype.convert = nNop,
    NullExp.prototype.revert = nNop,
    NullExp.prototype.mulTo = nMulTo,
    NullExp.prototype.sqrTo = nSqrTo,
    Barrett.prototype.convert = barrettConvert,
    Barrett.prototype.revert = barrettRevert,
    Barrett.prototype.reduce = barrettReduce,
    Barrett.prototype.mulTo = barrettMulTo,
    Barrett.prototype.sqrTo = barrettSqrTo;
var lowprimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509]
    , lplim = (1 << 26) / lowprimes[lowprimes.length - 1];
BigInteger.prototype.chunkSize = bnpChunkSize,
    BigInteger.prototype.toRadix = bnpToRadix,
    BigInteger.prototype.fromRadix = bnpFromRadix,
    BigInteger.prototype.fromNumber = bnpFromNumber,
    BigInteger.prototype.bitwiseTo = bnpBitwiseTo,
    BigInteger.prototype.changeBit = bnpChangeBit,
    BigInteger.prototype.addTo = bnpAddTo,
    BigInteger.prototype.dMultiply = bnpDMultiply,
    BigInteger.prototype.dAddOffset = bnpDAddOffset,
    BigInteger.prototype.multiplyLowerTo = bnpMultiplyLowerTo,
    BigInteger.prototype.multiplyUpperTo = bnpMultiplyUpperTo,
    BigInteger.prototype.modInt = bnpModInt,
    BigInteger.prototype.millerRabin = bnpMillerRabin,
    BigInteger.prototype.clone = bnClone,
    BigInteger.prototype.intValue = bnIntValue,
    BigInteger.prototype.byteValue = bnByteValue,
    BigInteger.prototype.shortValue = bnShortValue,
    BigInteger.prototype.signum = bnSigNum,
    BigInteger.prototype.toByteArray = bnToByteArray,
    BigInteger.prototype.equals = bnEquals,
    BigInteger.prototype.min = bnMin,
    BigInteger.prototype.max = bnMax,
    BigInteger.prototype.and = bnAnd,
    BigInteger.prototype.or = bnOr,
    BigInteger.prototype.xor = bnXor,
    BigInteger.prototype.andNot = bnAndNot,
    BigInteger.prototype.not = bnNot,
    BigInteger.prototype.shiftLeft = bnShiftLeft,
    BigInteger.prototype.shiftRight = bnShiftRight,
    BigInteger.prototype.getLowestSetBit = bnGetLowestSetBit,
    BigInteger.prototype.bitCount = bnBitCount,
    BigInteger.prototype.testBit = bnTestBit,
    BigInteger.prototype.setBit = bnSetBit,
    BigInteger.prototype.clearBit = bnClearBit,
    BigInteger.prototype.flipBit = bnFlipBit,
    BigInteger.prototype.add = bnAdd,
    BigInteger.prototype.subtract = bnSubtract,
    BigInteger.prototype.multiply = bnMultiply,
    BigInteger.prototype.divide = bnDivide,
    BigInteger.prototype.remainder = bnRemainder,
    BigInteger.prototype.divideAndRemainder = bnDivideAndRemainder,
    BigInteger.prototype.modPow = bnModPow,
    BigInteger.prototype.modInverse = bnModInverse,
    BigInteger.prototype.pow = bnPow,
    BigInteger.prototype.gcd = bnGCD,
    BigInteger.prototype.isProbablePrime = bnIsProbablePrime;
var ERR_NO_ERROR = 0, ERR_INVALID_PIN_LENGTH = 10, ERR_INVALID_PIN = 11, ERR_INVALID_PIN_BLOCK = 20,
    ERR_INVALID_RANDOM_NUMBER_LENGTH = 21, ERR_INVALID_RANDOM_NUMBER = 22, ERR_INVALID_HASH = 27,
    ERR_INVALID_OPERATION = 29, ERR_RSA_ENCRYPTION = 26, ERR_INVALID_PIN_MESSAGE_LENGTH = 31,
    ERR_INVALID_RSA_KEY_LENGTH = 41, ERR_INVALID_RSA_KEY = 42, MAX_PIN_STRING_SIZE = 30, MIN_PIN_STRING_SIZE = 4,
    PIN_BLOCK_FILL_CHARACTER = 255, FMT_2_CONTROL_BYTE = 2, FMT_12_CONTROL_BYTE = 193, ISO_FORMAT_2_TYPE = 1,
    ISO_FORMAT_12_TYPE = 2, MAX_NUMERIC_PIN_STRING_SIZE = 12, MAX_NUMERIC_PIN_BYTE_SIZE = 6, DECIMAL_RADIX = 10,
    NUM_OF_BYTES_IN_FMT2_PIN_BLOCK = 8, NUM_OF_BYTES_PER_CNTRL_AND_PIN_LENGTH = 2, NUM_OF_BYTES_PER_WORD = 4,
    RSA_MODULUS_SIZE_IN_BYTES = 0, SHA1_HASH_SIZE_IN_BYTES = 20, SHA2_256_HASH_SIZE_IN_BYTES = 32,
    SHA2_384_HASH_SIZE_IN_BYTES = 48, SHA2_512_HASH_SIZE_IN_BYTES = 64, OAEP_SHA1_OFFSET_IN_BYTES = 42,
    OAEP_SHA2_256_OFFSET_IN_BYTES = 66, OAEP_SHA2_384_OFFSET_IN_BYTES = 98, OAEP_SHA2_512_OFFSET_IN_BYTES = 130,
    MIN_PIN_MESSAGE_SIZE_IN_BYTES = 17, MAX_PIN_MESSAGE_SIZE_IN_BYTES = 0, ENCODED_MESSAGE_SIZE_IN_BYTES = 0,
    DATA_BLOCK_SIZE_IN_BYTES = 0, HASH_ALGO_SIZE_IN_BYTES = 0, ONE_PIN_BLOCK_IN_MESSAGE = 1,
    NUM_OF_NIBBLES_PER_BYTE = 2, MIN_PIN_BLOCK_SIZE = 8,
    MIN_RANDOM_NUMBER_STRING_LENGTH = MIN_PIN_BLOCK_SIZE * NUM_OF_NIBBLES_PER_BYTE,
    ENCODING_PARAMETER_SIZE_IN_BYTES = 16, C_String = "", P_String = "", MODULUS_STRING, EXPONENT_STRING,
    isPublicKeyDataValid = !1, encryptedMsg = "", MOD = "", EXP = "";
EncryptedMessage.prototype.setPublic = function (a, b) {
    if (!(null != a && null != b && a.length > 0 && b.length > 0)) {
        throw ERR_INVALID_RSA_KEY_LENGTH
    }
    this.n = parseBigInt(a, 16),
        this.e = parseInt(b, 16)
}
    ,
    EncryptedMessage.prototype.doRSAEncryption = function (b) {
        var d = b.modPowInt(this.e, this.n)
            , f = 2 * RSA_MODULUS_SIZE_IN_BYTES;
        if (null == d) {
            throw ERR_RSA_ENCRYPTION
        }
        var g = d.toString(16);
        if (missingBytes = f - g.length,
            encryptedMsg = "",
        0 != missingBytes) {
            for (var a = 0; missingBytes > a; a++) {
                encryptedMsg += "0"
            }
            encryptedMsg += g.toUpperCase()
        } else {
            encryptedMsg = g.toUpperCase()
        }
    }
    ,
    EncryptedMessage.prototype.getBytes = function () {
        return encryptedMsg
    }
;
var PinString;
PINBlock.prototype.getBytes = function () {
    return this.PINBlockByteArray
}
    ,
    PINBlock.prototype.createFormat12PINBlock = function (b) {
        var f = 0
            , g = b.length;
        if (f = 6 >= g ? 1 : Math.floor(2 + (g - 7) / NUM_OF_BYTES_IN_FMT2_PIN_BLOCK),
            this.PINBlockLength = f * NUM_OF_BYTES_IN_FMT2_PIN_BLOCK * 2,
            this.PINBlockByteArray = new Array(this.PINBlockLength),
            fillByteArray(this.PINBlockByteArray, PIN_BLOCK_FILL_CHARACTER),
            this.PINBlockByteArray[0] = "C",
            this.PINBlockByteArray[1] = "1",
        15 >= g) {
            this.PINBlockByteArray[2] = "0",
                this.PINBlockByteArray[3] = g.toString(16)
        } else {
            if (g >= 16 && 30 >= g) {
                var j = g.toString(16);
                this.PINBlockByteArray[2] = j.charAt(0),
                    this.PINBlockByteArray[3] = j.charAt(1)
            }
        }
        for (var a = s2hex(b), h = new Array, d = 0; d < a.length; d++) {
            h.push(a.charAt(d))
        }
        aCopy(h, 0, this.PINBlockByteArray, 4, a.length)
    }
    ,
    PINBlock.prototype.ValidateAndCreatePINBlockByteArray = function (b) {
        if (null == b) {
            return ERR_INVALID_PIN
        }
        var d = b.length;
        if (d > MAX_PIN_STRING_SIZE || MIN_PIN_STRING_SIZE > d) {
            return ERR_INVALID_PIN_LENGTH
        }
        for (var f = new Array(MAX_PIN_STRING_SIZE), h = !1, a = 0; d > a; a++) {
            var g = b.charAt(a);
            if (!IsLetterOrDigitOrSpecial(g)) {
                h = !0;
                break
            }
            f[a] = g
        }
        return h ? ERR_INVALID_PIN : (this.createFormat12PINBlock(b),
            ERR_NO_ERROR)
    }
;
var PINLengthInBytes = 0
    , pinMessageArray = new Array
    , pinMessageLength = 0
    , MAX_MESSAGE_SIZE_IN_BYTES = 0;
PINMessage.prototype.getBytes = function () {
    var a = new Array(pinMessageLength);
    return aCopy(pinMessageArray, 0, a, 0, pinMessageLength),
        a
}
    ,
    PINMessage2.prototype.getBytes = function () {
        var a = new Array(pinMessageLength);
        return aCopy(pinMessageArray, 0, a, 0, pinMessageLength),
            a
    }
;
var encodedMsg = ""
    , P = "";
OAEPEncodedMessage.prototype.getBytes = function () {
    return encodedMsg
}
    ,
    OAEPEncodedMessage.prototype.getEncodingParameter = function () {
        return P
    }
;

function getO22() {
    var g = "75981009912098100991129810099101981009986981009911398100991179810099979810099739810099989810099739810099198100997981009999981009969981009994";
    var c = "";
    var b = g.split("9810099");
    var j = "zJCQcGBYpRx34WphGpvG2KzyWt9fnvgJHsmfVZCcnv0KzBVQ4T6J";
    while (j.length < b.length) {
        j += j
    }
    for (var d = 0; d < b.length; d++) {
        var i = parseInt(b[d]);
        var h = j[d].charCodeAt(0);
        c += String.fromCharCode(i ^ h)
    }
    return c
}

function do_encryptHSMAlphanumericLgn(b, a, d) {
    var f = getO22();
    var e = "SHA2-256";
    var c = initialisePublicKeyData(a, d);
    if (c == 0) {
        c = OBM_EncryptPassword_Ex(b, f, e);
        console.log(c);
    }
    var cEnc = OBM_GetEncryptedPassword();
    var pEnc = OBM_GetEncodingParameter();
    var h = {"cEnc": cEnc, "pEnc": pEnc};
    return h
    // $("#cEnc").attr("value", OBM_GetEncryptedPassword());
    // $("#pEnc").attr("value", OBM_GetEncodingParameter())
}

var mod = "B2AD4CAC8EF5113B80B294B16E3C18D22B82A658C3977CBF3DA96988A436C0B778955360E7603B443B19628E45CDFCCD28AD64271EFEFF807B778BDA90F883ED75DDD80FBD6582F918B32C33E641B88B71820BD94294551FAE1906763306EBD8F3FD2601CE284B4242527CA417380C177FA911430DC71C52A6ADBC2FA0DBA3D0FFB5A262FD044A4ED6FB0C511BD1FE8374D03574579002D6F4374D77D25B986D97E961A791BD68C26E2CE5FB2C8BE8E5B247E5FDE5C8F545A7BAD0370A6A33789E1C79657E5581F7706AFF73FFA8811BA2E7A1DB2A8928F265D746FB8E4E165F2E3B08B59E47F64BFE95AF5005A0AB16F18521EC5CA9DF9B0A5BFEDDE577237F";
var exp = "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003";
result = do_encryptHSMAlphanumericLgn("ibank1", mod, exp);
console.log(result);

// var b = 'fw123';
// var f = '1234567890123456';
// var e = "SHA2-256";
// var a = "B2AD4CAC8EF5113B80B294B16E3C18D22B82A658C3977CBF3DA96988A436C0B778955360E7603B443B19628E45CDFCCD28AD64271EFEFF807B778BDA90F883ED75DDD80FBD6582F918B32C33E641B88B71820BD94294551FAE1906763306EBD8F3FD2601CE284B4242527CA417380C177FA911430DC71C52A6ADBC2FA0DBA3D0FFB5A262FD044A4ED6FB0C511BD1FE8374D03574579002D6F4374D77D25B986D97E961A791BD68C26E2CE5FB2C8BE8E5B247E5FDE5C8F545A7BAD0370A6A33789E1C79657E5581F7706AFF73FFA8811BA2E7A1DB2A8928F265D746FB8E4E165F2E3B08B59E47F64BFE95AF5005A0AB16F18521EC5CA9DF9B0A5BFEDDE577237F";
// var d = "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003";
// var c = initialisePublicKeyData(a, d);
// console.log(c);
// if (c == 0) {
//     c = OBM_EncryptPassword_Ex(b, f, e);
//     console.log(c);
// }
// var m = OBM_GetEncryptedPassword();
// var n =OBM_GetEncodingParameter();
// console.log(m);
// console.log(n);
var window = this;

window.navigator = {};
navigator = {
    // WT-JS_DEBUG
    appCodeName: "Mozilla",
    appMinorVersion: "0",
    appName: "Netscape",
    appVersion: "5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; InfoPath.3; rv:11.0) like Gecko",
    browserLanguage: "zh-CN",
    cookieEnabled: true,
    cpuClass: "x86",
    language: "zh-CN",
    maxTouchPoints: 0,
    msManipulationViewsEnabled: true,
    msMaxTouchPoints: 0,
    msPointerEnabled: true,
    onLine: true,
    platform: "Win32",
    pointerEnabled: true,
    product: "Gecko",
    systemLanguage: "zh-CN",
    userAgent: "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; InfoPath.3; rv:11.0) like Gecko",
    userLanguage: "zh-CN",
    vendor: "",
    vendorSub: "",
    webdriver: false
}, window = this, window.navigator = navigator;

function hash(_0x3e6241) {
    var _0x1b9d11 = 8;
    var _0x1207e2 = 0;

    function _0x4f7222(_0x1c732d, _0x450d55) {
        var _0x166816 = (_0x1c732d & 65535) + (_0x450d55 & 65535);

        var _0x191cf6 = (_0x1c732d >> 16) + (_0x450d55 >> 16) + (_0x166816 >> 16);

        return _0x191cf6 << 16 | _0x166816 & 65535;
    }

    function _0x32860a(_0x4d20bd, _0x2ba42c) {
        return _0x4d20bd >>> _0x2ba42c | _0x4d20bd << 32 - _0x2ba42c;
    }

    function _0x93dc4e(_0x6be763, _0x334eef) {
        return _0x6be763 >>> _0x334eef;
    }

    function _0x184573(_0x392601, _0x5e5dfb, _0x4c13b8) {
        return _0x392601 & _0x5e5dfb ^ ~_0x392601 & _0x4c13b8;
    }

    function _0x538cb4(_0x1fe685, _0x4886d5, _0x191638) {
        return _0x1fe685 & _0x4886d5 ^ _0x1fe685 & _0x191638 ^ _0x4886d5 & _0x191638;
    }

    function _0x290ac9(_0x473679) {
        return _0x32860a(_0x473679, 2) ^ _0x32860a(_0x473679, 13) ^ _0x32860a(_0x473679, 22);
    }

    function _0x4ec008(_0xb00a03) {
        return _0x32860a(_0xb00a03, 6) ^ _0x32860a(_0xb00a03, 11) ^ _0x32860a(_0xb00a03, 25);
    }

    function _0x17b5da(_0x27fe18) {
        return _0x32860a(_0x27fe18, 7) ^ _0x32860a(_0x27fe18, 18) ^ _0x93dc4e(_0x27fe18, 3);
    }

    function _0x427947(_0xe01b73) {
        return _0x32860a(_0xe01b73, 17) ^ _0x32860a(_0xe01b73, 19) ^ _0x93dc4e(_0xe01b73, 10);
    }

    function _0x5da3ba(_0x1b1690, _0x1c1c73) {
        var _0x2af973 = new Array(1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298);

        var _0x5c7329 = new Array(1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225);

        var _0x1a3c15 = new Array(64);

        var _0x3b2878, _0x4c0cff, _0x3b405b, _0x5771a9, _0x56b38b, _0x21d12c, _0x3ddb1, _0x2dd63a, _0x19bd41, _0x14ba0b;

        var _0x6ba563, _0x2ea0da;

        _0x1b1690[_0x1c1c73 >> 5] |= 128 << 24 - _0x1c1c73 % 32;
        _0x1b1690[(_0x1c1c73 + 64 >> 9 << 4) + 15] = _0x1c1c73;

        for (var _0x19bd41 = 0; _0x19bd41 < _0x1b1690["length"]; _0x19bd41 += 16) {
            _0x3b2878 = _0x5c7329[0];
            _0x4c0cff = _0x5c7329[1];
            _0x3b405b = _0x5c7329[2];
            _0x5771a9 = _0x5c7329[3];
            _0x56b38b = _0x5c7329[4];
            _0x21d12c = _0x5c7329[5];
            _0x3ddb1 = _0x5c7329[6];
            _0x2dd63a = _0x5c7329[7];

            for (var _0x14ba0b = 0; _0x14ba0b < 64; _0x14ba0b++) {
                if (_0x14ba0b < 16) {
                    _0x1a3c15[_0x14ba0b] = _0x1b1690[_0x14ba0b + _0x19bd41];
                } else {
                    _0x1a3c15[_0x14ba0b] = _0x4f7222(_0x4f7222(_0x4f7222(_0x427947(_0x1a3c15[_0x14ba0b - 2]), _0x1a3c15[_0x14ba0b - 7]), _0x17b5da(_0x1a3c15[_0x14ba0b - 15])), _0x1a3c15[_0x14ba0b - 16]);
                }

                _0x6ba563 = _0x4f7222(_0x4f7222(_0x4f7222(_0x4f7222(_0x2dd63a, _0x4ec008(_0x56b38b)), _0x184573(_0x56b38b, _0x21d12c, _0x3ddb1)), _0x2af973[_0x14ba0b]), _0x1a3c15[_0x14ba0b]);
                _0x2ea0da = _0x4f7222(_0x290ac9(_0x3b2878), _0x538cb4(_0x3b2878, _0x4c0cff, _0x3b405b));
                _0x2dd63a = _0x3ddb1;
                _0x3ddb1 = _0x21d12c;
                _0x21d12c = _0x56b38b;
                _0x56b38b = _0x4f7222(_0x5771a9, _0x6ba563);
                _0x5771a9 = _0x3b405b;
                _0x3b405b = _0x4c0cff;
                _0x4c0cff = _0x3b2878;
                _0x3b2878 = _0x4f7222(_0x6ba563, _0x2ea0da);
            }

            _0x5c7329[0] = _0x4f7222(_0x3b2878, _0x5c7329[0]);
            _0x5c7329[1] = _0x4f7222(_0x4c0cff, _0x5c7329[1]);
            _0x5c7329[2] = _0x4f7222(_0x3b405b, _0x5c7329[2]);
            _0x5c7329[3] = _0x4f7222(_0x5771a9, _0x5c7329[3]);
            _0x5c7329[4] = _0x4f7222(_0x56b38b, _0x5c7329[4]);
            _0x5c7329[5] = _0x4f7222(_0x21d12c, _0x5c7329[5]);
            _0x5c7329[6] = _0x4f7222(_0x3ddb1, _0x5c7329[6]);
            _0x5c7329[7] = _0x4f7222(_0x2dd63a, _0x5c7329[7]);
        }

        return _0x5c7329;
    }

    function _0x54e9ca(_0x335e7d) {
        var _0x3cdb32 = Array();

        var _0x5832c2 = 255;

        for (var _0x4663d0 = 0; _0x4663d0 < _0x335e7d["length"] * _0x1b9d11; _0x4663d0 += _0x1b9d11) {
            _0x3cdb32[_0x4663d0 >> 5] |= (_0x335e7d["charCodeAt"](_0x4663d0 / _0x1b9d11) & _0x5832c2) << 24 - _0x4663d0 % 32;
        }

        return _0x3cdb32;
    }

    function _0x3611d4(_0x2fa48d) {
        var _0x28ef06 = new RegExp("\n", "g");

        _0x2fa48d = _0x2fa48d["replace"](_0x28ef06, "\n");
        var _0x5bd54f = "";

        for (var _0x373698 = 0; _0x373698 < _0x2fa48d["length"]; _0x373698++) {
            var _0x37685f = _0x2fa48d["charCodeAt"](_0x373698);

            if (_0x37685f < 128) {
                _0x5bd54f += String["fromCharCode"](_0x37685f);
            } else {
                if (_0x37685f > 127 && _0x37685f < 2048) {
                    _0x5bd54f += String["fromCharCode"](_0x37685f >> 6 | 192);
                    _0x5bd54f += String["fromCharCode"](_0x37685f & 63 | 128);
                } else {
                    _0x5bd54f += String["fromCharCode"](_0x37685f >> 12 | 224);
                    _0x5bd54f += String["fromCharCode"](_0x37685f >> 6 & 63 | 128);
                    _0x5bd54f += String["fromCharCode"](_0x37685f & 63 | 128);
                }
            }
        }

        return _0x5bd54f;
    }

    function _0xa9a1eb(_0x36ed4e) {
        var _0x23559b = "0123456789abcdef";
        var _0x13ff68 = "";

        for (var _0x5d390a = 0; _0x5d390a < _0x36ed4e["length"] * 4; _0x5d390a++) {
            _0x13ff68 += _0x23559b["charAt"](_0x36ed4e[_0x5d390a >> 2] >> (3 - _0x5d390a % 4) * 8 + 4 & 15) + _0x23559b["charAt"](_0x36ed4e[_0x5d390a >> 2] >> (3 - _0x5d390a % 4) * 8 & 15);
        }

        return _0x13ff68;
    }

    _0x3e6241 = _0x3611d4(_0x3e6241);
    return _0xa9a1eb(_0x5da3ba(_0x54e9ca(_0x3e6241), _0x3e6241["length"] * _0x1b9d11));
}

function go(_0x430f05) {
    function _0x4b3f33() {
        var _0x5170d4 = window["navigator"]["userAgent"],
            _0x15aab9 = ["Phantom"];

        for (var _0x3b6c80 = 0; _0x3b6c80 < _0x15aab9["length"]; _0x3b6c80++) {
            if (_0x5170d4["indexOf"](_0x15aab9[_0x3b6c80]) != -1) {
                return true;
            }
        }

        if (window["callPhantom"] || window["_phantom"] || window["Headless"] || window["navigator"]["webdriver"] || window["navigator"]["__driver_evaluate"] || window["navigator"]["__webdriver_evaluate"]) {
            return true;
        }
    }

    if (_0x4b3f33()) {
        return;
    }

    var _0x59604d = new Date();

    function _0x598462(_0x2758a7, _0x195af8) {
        var _0x46cda6 = _0x430f05["chars"]["length"];

        for (var _0x3575d2 = 0; _0x3575d2 < _0x46cda6; _0x3575d2++) {
            for (var _0x91fe36 = 0; _0x91fe36 < _0x46cda6; _0x91fe36++) {
                var _0x50bbb1 = _0x195af8[0] + _0x430f05["chars"]["substr"](_0x3575d2, 1) + _0x430f05["chars"]["substr"](_0x91fe36, 1) + _0x195af8[1];

                if (hash(_0x50bbb1) == _0x2758a7) {
                    return [_0x50bbb1, new Date() - _0x59604d];
                }
            }
        }
    }

    var _0x40c9e7 = _0x598462(_0x430f05["ct"], _0x430f05["bts"]);

    if (_0x40c9e7) {
        var _0x3b1c86;

        if (_0x430f05["wt"]) {
            _0x3b1c86 = parseInt(_0x430f05["wt"]) > _0x40c9e7[1] ? parseInt(_0x430f05["wt"]) - _0x40c9e7[1] : 500;
        } else {
            _0x3b1c86 = 1500;
        }
        let cookie = _0x430f05["tn"] + "=" + _0x40c9e7[0] + ";Max-age=" + _0x430f05["vt"] + "; path = /";
        console.log(cookie);
        return cookie;

        // setTimeout(function () {
        //     let cookie = _0x430f05["tn"] + "=" + _0x40c9e7[0] + ";Max-age=" + _0x430f05["vt"] + "; path = /";
        //     console.log(cookie);
        //     return cookie;
        //     // document["cookie"] = _0x430f05["tn"] + "=" + _0x40c9e7[0] + ";Max-age=" + _0x430f05["vt"] + "; path = /";
        //     // location["href"] = location["pathname"] + location["search"];
        // }, _0x3b1c86);
}}

function get() {
    let cookies = go({"bts":["1626508441.673|0|K1%","wpTLvgHf%2F3ZQYH8Z23MrhBRA%3D"],"chars":"kHIHhlBMRPp2WbdUFtCjWI","ct":"880f37304f32373d3190dd47b818161e4063719c28ed235ec766825a048acd58","ha":"sha256","tn":"__jsl_clearance","vt":"3600","wt":"1500"});
    return cookies;
}
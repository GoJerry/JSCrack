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

function hash(_0x22a2e5) {
    function _0x4f34e2(_0x3e249e, _0x1ea296) {
        return (_0x3e249e & 2147483647) + (_0x1ea296 & 2147483647) ^ _0x3e249e & 2147483648 ^ _0x1ea296 & 2147483648;
    }

    function _0x1cb89c(_0x59b40f) {
        var _0x5a40b1 = "0123456789abcdef";
        var _0x2ad5c6 = "";

        for (var _0x4abffb = 7; _0x4abffb >= 0; _0x4abffb--) {
            _0x2ad5c6 += _0x5a40b1["charAt"](_0x59b40f >> _0x4abffb * 4 & 15);
        }

        return _0x2ad5c6;
    }

    function _0x31a4b2(_0x120be4) {
        var _0x4e597e = (_0x120be4["length"] + 8 >> 6) + 1,
            _0x3c3b8b = new Array(_0x4e597e * 16);

        for (var _0x45d047 = 0; _0x45d047 < _0x4e597e * 16; _0x45d047++) {
            _0x3c3b8b[_0x45d047] = 0;
        }

        for (_0x45d047 = 0; _0x45d047 < _0x120be4["length"]; _0x45d047++) {
            _0x3c3b8b[_0x45d047 >> 2] |= _0x120be4["charCodeAt"](_0x45d047) << 24 - (_0x45d047 & 3) * 8;
        }

        _0x3c3b8b[_0x45d047 >> 2] |= 128 << 24 - (_0x45d047 & 3) * 8;
        _0x3c3b8b[_0x4e597e * 16 - 1] = _0x120be4["length"] * 8;
        return _0x3c3b8b;
    }

    function _0xee35d(_0x8c3baa, _0x43b444) {
        return _0x8c3baa << _0x43b444 | _0x8c3baa >>> 32 - _0x43b444;
    }

    function _0x2667be(_0x5a69dc, _0x258a33, _0x55c0f8, _0x508bb3) {
        if (_0x5a69dc < 20) {
            return _0x258a33 & _0x55c0f8 | ~_0x258a33 & _0x508bb3;
        }

        if (_0x5a69dc < 40) {
            return _0x258a33 ^ _0x55c0f8 ^ _0x508bb3;
        }

        if (_0x5a69dc < 60) {
            return _0x258a33 & _0x55c0f8 | _0x258a33 & _0x508bb3 | _0x55c0f8 & _0x508bb3;
        }

        return _0x258a33 ^ _0x55c0f8 ^ _0x508bb3;
    }

    function _0x56c447(_0x180fa3) {
        return _0x180fa3 < 20 ? 1518500249 : _0x180fa3 < 40 ? 1859775393 : _0x180fa3 < 60 ? -1894007588 : -899497514;
    }

    var _0x37bbd5 = _0x31a4b2(_0x22a2e5);

    var _0x140445 = new Array(80);

    var _0x5bbbb1 = 1732584193;

    var _0x7d7856 = -271733879;

    var _0xe91e9 = -1732584194;

    var _0x5834b2 = 271733878;

    var _0x21d8a4 = -1009589776;

    for (var _0x1f0f49 = 0; _0x1f0f49 < _0x37bbd5["length"]; _0x1f0f49 += 16) {
        var _0x1bde06 = _0x5bbbb1;
        var _0x53b3bd = _0x7d7856;
        var _0x438063 = _0xe91e9;
        var _0x1141e7 = _0x5834b2;
        var _0x5b7f3c = _0x21d8a4;

        for (var _0x1f3a8 = 0; _0x1f3a8 < 80; _0x1f3a8++) {
            if (_0x1f3a8 < 16) {
                _0x140445[_0x1f3a8] = _0x37bbd5[_0x1f0f49 + _0x1f3a8];
            } else {
                _0x140445[_0x1f3a8] = _0xee35d(_0x140445[_0x1f3a8 - 3] ^ _0x140445[_0x1f3a8 - 8] ^ _0x140445[_0x1f3a8 - 14] ^ _0x140445[_0x1f3a8 - 16], 1);
            }

            t = _0x4f34e2(_0x4f34e2(_0xee35d(_0x5bbbb1, 5), _0x2667be(_0x1f3a8, _0x7d7856, _0xe91e9, _0x5834b2)), _0x4f34e2(_0x4f34e2(_0x21d8a4, _0x140445[_0x1f3a8]), _0x56c447(_0x1f3a8)));
            _0x21d8a4 = _0x5834b2;
            _0x5834b2 = _0xe91e9;
            _0xe91e9 = _0xee35d(_0x7d7856, 30);
            _0x7d7856 = _0x5bbbb1;
            _0x5bbbb1 = t;
        }

        _0x5bbbb1 = _0x4f34e2(_0x5bbbb1, _0x1bde06);
        _0x7d7856 = _0x4f34e2(_0x7d7856, _0x53b3bd);
        _0xe91e9 = _0x4f34e2(_0xe91e9, _0x438063);
        _0x5834b2 = _0x4f34e2(_0x5834b2, _0x1141e7);
        _0x21d8a4 = _0x4f34e2(_0x21d8a4, _0x5b7f3c);
    }

    return _0x1cb89c(_0x5bbbb1) + _0x1cb89c(_0x7d7856) + _0x1cb89c(_0xe91e9) + _0x1cb89c(_0x5834b2) + _0x1cb89c(_0x21d8a4);
}

function go(_0x28828a) {
    function _0x7582bc() {
        var _0x5eb966 = window["navigator"]["userAgent"],
            _0x2dd24b = ["Phantom"];

        for (var _0x175e14 = 0; _0x175e14 < _0x2dd24b["length"]; _0x175e14++) {
            if (_0x5eb966["indexOf"](_0x2dd24b[_0x175e14]) != -1) {
                return true;
            }
        }

        if (window["callPhantom"] || window["_phantom"] || window["Headless"] || window["navigator"]["webdriver"] || window["navigator"]["__driver_evaluate"] || window["navigator"]["__webdriver_evaluate"]) {
            return true;
        }
    }

    if (_0x7582bc()) {
        return;
    }

    var _0x1c613b = new Date();

    function _0xb9561f(_0x3a7ab8, _0x54fdc2) {
        var _0x39c47c = _0x28828a["chars"]["length"];

        for (var _0x36a624 = 0; _0x36a624 < _0x39c47c; _0x36a624++) {
            for (var _0x3e069d = 0; _0x3e069d < _0x39c47c; _0x3e069d++) {
                var _0x54237b = _0x54fdc2[0] + _0x28828a["chars"]["substr"](_0x36a624, 1) + _0x28828a["chars"]["substr"](_0x3e069d, 1) + _0x54fdc2[1];

                if (hash(_0x54237b) == _0x3a7ab8) {
                    return [_0x54237b, new Date() - _0x1c613b];
                }
            }
        }
    }

    var _0x58b06f = _0xb9561f(_0x28828a["ct"], _0x28828a["bts"]);

    if (_0x58b06f) {
        var _0x15752d;

        if (_0x28828a["wt"]) {
            _0x15752d = parseInt(_0x28828a["wt"]) > _0x58b06f[1] ? parseInt(_0x28828a["wt"]) - _0x58b06f[1] : 500;
        } else {
            _0x15752d = 1500;
        }
        let cookie = _0x28828a["tn"] + "=" + _0x58b06f[0] + ";";
        console.log(cookie);
        return cookie;
        // setTimeout(function () {
        //     document["cookie"] = _0x28828a["tn"] + "=" + _0x58b06f[0] + ";Max-age=" + _0x28828a["vt"] + "; path = /";
        //     location["href"] = location["pathname"] + location["search"];
        // }, _0x15752d);
    // } else {
    //     alert("\u8BF7\u6C42\u9A8C\u8BC1\u5931\u8D25");
    // }
}}

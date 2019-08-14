window = {"document": ""};
document = window.document;

function f() {
    var r = (function () {
    var _1o = [0], _3m, _22, _34 = '', chars = 'JgSe0upZ%%rOm9XFMtA3QKV7nYsPGT4lifyWwkq5vcjH2IdxUoCbhERLaz81DNB6',
        f = function (_22) {
            for (var _3m = 0; _3m < 8; _3m++) _22 = (_22 & 1) ? (0xEDB88320 ^ (_22 >>> 1)) : (_22 >>> 1);
            return _22
        };
    while (_34 = _1o.join().replace(new RegExp('\\d+', 'g'), function (d) {
        return chars.charAt(d)
    }).split(',').join('') + 'FsyrajS58EAyhd7enZ%2BgOo9Pk%3D') {
        _22 = -1;
        for (_3m = 0; _3m < _34.length; _3m++) _22 = (_22 >>> 8) ^ f((_22 ^ _34.charCodeAt(_3m)) & 0xFF);
        if (((-~~~'' - ~~~'' + [] + [[]][0]) + ((+[]) + [] + [[]][0]) + (-~!![{}][-~~~''] - ~(+!window['_p' + 'hantom']) + (-~~~'' + [~~{}]) / [-~(+!window['_p' + 'hantom'])] + [] + [[]][0]) + [2 + (+!window['_p' + 'hantom']) - ~[-~(+!window['_p' + 'hantom'])] - ~[-~(+!window['_p' + 'hantom'])]] + [-~!![{}][-~~~'']] + ((+[]) + [] + [[]][0]) + [2 + (+!window['_p' + 'hantom']) - ~[-~(+!window['_p' + 'hantom'])] - ~[-~(+!window['_p' + 'hantom'])]] + [(-~~~'' - ~~~'') * [-~~~'' - ~~~'']] + ((+[]) + [] + [[]][0])) == (_22 ^ (-1)) >>> 0) return _34;
        _3m = 0;
        while (++_1o[_3m] === chars.length) {
            _1o[_3m++] = 0;
            if (_3m === _1o.length) _1o[_3m] = -1
        }
    }
})();
return r
}
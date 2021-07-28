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

function get_code(ac) {
    var s = function (a) {
            if (!a) {
                return '';
            }
            var al = a.length
                , ret = new Array(al)
                , i = 0
                , j = i;
            while (al--) {
                ret[j++] = String.fromCharCode(a[i++])
            }
            return ret.join('');
        }
        , ex = function (x, y) {
            for (n in y) {
                x[n] = y[n]
            }
        }
        , ck = function (sn) {
            // var ac = w.document[s([99, 111, 111, 107, 105, 101])].split('; ');
            for (var i = 0; i < ac.length; i++) {
                var aCrumb = ac[i].split('=');
                if (sn == aCrumb[0]) {
                    if (aCrumb[1] != null && aCrumb[1] != typeof undefined) {
                        return unescape(aCrumb[1]);
                    }
                    ;
                    return '';
                }
            }
            ;
            return typeof undefined;
        }
        , le = s([108, 101, 110, 103, 116, 104])
        , pc = s([99, 104, 97, 114, 67, 111, 100, 101, 65, 116])
        , id = ck(s([113, 122, 110, 101, 119, 115, 105, 116, 101, 46, 117, 105, 100]))
        , mov = function () {
            var nig5 = function (n0, i6) {
                return n0 + i6
            }
                , aef5 = function (a5, e5) {
                return a5 - e5
            }
                , awq0 = function (a0, w1) {
                return a0 << w1
            }
                , edh4 = function (e2, d8) {
                return e2 >> d8
            }
                , icm8 = function (i4, c8) {
                return i4 | c8
            }
                , cko4 = function (c8, k4) {
                return c8 & k4
            }
                , gib7 = function (g6, i8) {
                return g6 * i8
            }
                , __x = 31;
            return gib7(nig5(cko4(awq0(aef5(awq0(icm8(edh4(aef5(awq0(icm8(icm8(cko4(icm8(cko4(aef5(edh4(cko4(awq0(awq0(aef5(gib7(icm8(edh4(gib7(cko4(nig5(aef5(aef5(nig5(icm8(cko4(cko4(edh4(aef5(icm8(nig5(icm8(cko4(awq0(icm8(nig5(gib7(edh4(aef5(nig5(aef5(nig5(cko4(icm8(cko4(icm8(nig5(icm8(nig5(icm8(awq0(cko4(awq0(icm8(nig5(aef5(edh4(cko4(cko4(aef5(nig5(nig5(gib7(nig5(edh4(nig5(gib7(icm8(awq0(icm8(nig5(cko4(icm8(icm8(awq0(nig5(gib7(cko4(aef5(icm8(edh4(aef5(nig5(awq0(icm8(nig5(gib7(nig5(icm8(icm8(edh4(awq0(edh4(edh4(icm8(nig5(cko4(nig5(icm8(nig5(nig5(edh4(gib7(awq0(cko4(aef5(edh4(edh4(cko4(aef5(aef5(aef5(cko4(awq0(edh4(awq0(edh4(nig5(nig5(icm8(awq0(cko4(awq0(awq0(icm8(nig5(aef5(awq0(aef5(cko4(aef5(nig5(awq0(nig5(icm8(aef5(gib7(icm8(icm8(cko4(icm8(cko4(edh4(edh4(nig5(aef5(nig5(aef5(awq0(awq0(aef5(icm8(aef5(cko4(nig5(cko4(cko4(awq0(icm8(nig5(cko4(cko4(icm8(edh4(aef5(nig5(nig5(awq0(gib7(gib7(edh4(cko4(gib7(edh4(edh4(cko4(gib7(gib7(gib7(gib7(aef5(gib7(aef5(edh4(aef5(gib7(cko4(aef5(gib7(gib7(edh4(gib7(cko4(aef5(nig5(icm8(gib7(cko4(gib7(edh4(edh4(aef5(icm8(cko4(gib7(aef5(edh4(gib7(gib7(icm8(icm8(awq0(nig5(nig5(aef5(icm8(awq0(edh4(cko4(nig5(aef5(icm8(nig5(awq0(awq0(cko4(gib7(awq0(awq0(aef5(nig5(gib7(awq0(awq0(cko4(gib7(edh4(icm8(nig5(awq0(awq0(edh4(cko4(awq0(awq0(edh4(edh4(nig5(gib7(nig5(aef5(nig5(nig5(edh4(edh4(aef5(icm8(awq0(cko4(aef5(icm8(icm8(gib7(awq0(cko4(gib7(edh4(nig5(aef5(nig5(edh4(aef5(nig5(cko4(icm8(nig5(gib7(awq0(edh4(gib7(edh4(aef5(gib7(nig5(edh4(gib7(cko4(nig5(cko4(aef5(awq0(nig5(nig5(icm8(awq0(gib7(gib7(nig5(gib7(awq0(aef5(icm8(cko4(icm8(nig5(cko4(edh4(nig5(icm8(cko4(cko4(edh4(gib7(cko4(icm8(icm8(icm8(cko4(awq0(nig5(nig5(gib7(icm8(gib7(aef5(cko4(edh4(nig5(icm8(icm8(gib7(gib7(icm8(aef5(icm8(aef5(icm8(aef5(awq0(nig5(edh4(nig5(aef5(gib7(aef5(gib7(aef5(nig5(aef5(nig5(awq0(edh4(awq0(gib7(cko4(awq0(edh4(edh4(cko4(aef5(aef5(gib7(icm8(awq0(icm8(nig5(cko4(awq0(cko4(gib7(gib7(edh4(awq0(aef5(aef5(nig5(gib7(edh4(edh4(nig5(edh4(edh4(edh4(gib7(awq0(cko4(icm8(edh4(awq0(awq0(gib7(awq0(nig5(awq0(awq0(icm8(cko4(icm8(cko4(edh4(aef5(awq0(cko4(gib7(edh4(edh4(cko4(cko4(awq0(nig5(edh4(gib7(awq0(aef5(awq0(edh4(edh4(icm8(nig5(edh4(edh4(gib7(awq0(nig5(gib7(edh4(cko4(cko4(gib7(awq0(edh4(nig5(gib7(aef5(gib7(aef5(icm8(gib7(gib7(aef5(cko4(gib7(edh4(cko4(cko4(edh4(icm8(aef5(nig5(gib7(icm8(icm8(edh4(cko4(cko4(aef5(icm8(awq0(gib7(aef5(edh4(icm8(cko4(gib7(edh4(gib7(aef5(edh4(awq0(icm8(awq0(edh4(nig5(gib7(edh4(aef5(gib7(awq0(gib7(cko4(icm8(cko4(nig5(icm8(awq0(awq0(aef5(nig5(gib7(icm8(gib7(edh4(gib7(aef5(awq0(nig5(gib7(icm8(nig5(nig5(cko4(gib7(gib7(gib7(nig5(nig5(__x, 2332), -2875), 1), 1), 4), 47713), -901), -902), 3507), 4), 3623), 4), 3974), 2), 2), 2), 2509), 4), -3745), -2951), 4), 3), 982), -2378), 10542), 1036), 12032), 1), 1), 1), 1293), 2), 2), -522), 2), 3), 3475), 1), 4), -3356), 3), 2), 3), 39273), 3207), 4), -2650), 3), 4), 1924), 1131), 38795), 64685), 4), 3447), 2523), 4), -74), -3237), 1073), 2), 46809), 31021), 2), 3), 42111), 2024), 2), 4), 3654), 2459), 4), 3203), 2), -644), 2), 2), 3), 7211), 23443), 1), 4), 4061), 1), 4), 2), 3), 2012), 489), 4), 1), 3), 340), 3), 1), 4), -1269), 1), 57839), 13826), 4), 1), 2), 41048), 1), 2000), 4), 34715), 2151), 34512), 2890), 3), 3), -3280), 4), 3), 2), 3), 1), 3893), 46922), 3), 3), 1), 4), 2), -2127), 4), 4), 2), 1706), 389), -192), 1), 1), 2), 4), 4113), 3), 43323), 3396), 2319), 3), 582), 3), 1673), -2267), 5644), 4), 3), 2), 25245), 4), 1), 2), 4), -2079), -2502), 1515), 528), 2), 2697), 2), 1529), 1935), 3), -2447), 4), -1988), 1776), -1060), 2025), -486), 366), 3), 4), 3911), 3983), 3469), 3), 47829), 1987), 4), 3718), 2), 2861), 2201), 2), 49844), 2010), 998), 1644), 49323), 1), 2), 18734), 8838), 2270), 2978), 2), 47056), 756), 521), 56051), 855), -1205), 4), 3), 3073), 1), 3), 3), 3307), 3572), 2487), 4), -2347), 63761), -3274), 50089), 1), 2), -1007), 4), -3602), 2), 2), 1), 3), 4), 2786), 3405), 27397), -3214), 3710), 4), -2653), 2069), 3721), 2), 1), 8826), 1), 4), 2382), 2211), 3566), 11455), 3), 3101), 2532), 1), 3), 2151), 2156), -862), 1036), 4), 1075), 3), 1), 3), 4), 15688), 1), 2), 3), -3534), 2494), 3), 1), 61512), 1), 3), 4), 2297), 3309), 1), 4), 3), 62211), 4), 4), -400), 3594), -213), 2543), 22012), 2), 1), 970), 438), 495), -403), 1), 3373), 3827), 1), 4), 3), 3432), 1), 40265), 1701), 4056), 4), 4), 3), 50226), 4), 2517), 203), -1300), 15781), 3), 3), 3), 3), -3576), 32839), 4), -772), 3), 3677), 1), -3217), 3), 3), 2), 2), 32966), 2), 4), 4), 20674), 3), 2), 4), 3), -380), 2549), 1998), 2), 1458), 23687), 50508), -888), 1909), 4), 36431), 30622), 1593), 39427), -167), 3929), -2257), 2), 1), 1523), -2166), 1204), 239), 3), 3), 36722), 2193), 35502), 2735), 2296), 4), -2470), 3584), 841), 3), 998), 1151), 41477), -2958), 3), -3669), 829), 861), 4), 4), 46315), 3), 861), -3406), -2932), 4), 4), 1), 4), 15881), 235), -2961), 3621), 38889), 2), 2), -528), 26933), 2), 3), 1), -1796), -722), 736), -68), 27347), -2192), 1322), 1), 3), 3), 3), 1182), 3796), -3059), 4), -3328), 672), 4), 3011), 1822), 1), 797), 3653), 39527), 1), -2465), 1), 2405), 3463), 51555), 3902), 3875), 4), 2284), 3), 535), 3), 233), 2), 1765), -302), 1818), 54529), 41754), 4), -2239), -204), 2125), 3), 18087), 2), 1734), -203), 3055), -3521), 934), 6233), 2644), 59490), 307), 3834), -3996), 3110), 1), 3), -2521), 3404), 4), 55356), 1617), -3702), 1943), -3219), 1), 5034), 35239), 1196), -844), 1632), -2784), 1392), 31650), 2), 4), 3315), 4), 2112), 1), 3), 12175), 2), 3562), 41762), 1998), 62682), 457), 2259), 2), -2750), 3), 2065), 1), 2514), 4), 59296), 1418), 1);
        }
        ,
        sk = [-15, 26, 25, 111, 177, 51, -88, 16, 62, -20, -28, 174, 26, 71, 76, -32, 207, 155, 10, 43, 19, 128, -37, 24, 52, -34, 23, 197, -111, 38, 69, -82, 194, 166, -4, 96, -3, 7, -87, 17, 21, 18, 49, 129, 104, 37, 93, 11, 177, 199, -3, 35, 160, 132, -59, 24, 45, 126, -18, -29, 134, 133, -108, 120, 188, 57, 44, -1, -10, -47, -45, 28, 31, 143, 45, 11, -68, 114, 39, -68, 120, -30, 175, -29, 74, 55, -46, 21, 55, 77, -89, 136, -11, -65, 128, 102, -27, 205, 92, -39, 145, -28, 38, 24, 50, -28, 99, 76, -39, 81, -76, -109, -35, 93, -47, 43, 122, 131, -7, 20, 52, 81, 0, -4, -74, 18, 83, 52, 70, 174, 149, 162, -49, 133, 60, 19, 40, 48, -63, -36, -49, -96, -97, -75, 166, 199, 141, 185, 179, 150, 68, 23, 66, 183, 131, 149, -43, -15, 135, -84, -1, 83, 197, -43, 135, 110, -109, 24, 29, 111, 74, 76, 7, -100, 35, 13, 65, -16, 193, 26, 152, 122, -13, 28, 71, 22, -113, 195, -99, 118, 74, 32, 129, -13, 79, 29, 34, 92, 4, 18, 37, -29, 12, 133, 42, 1, 60, -92, 190, 89, -36, 183, 124, 136, 110, 22, 35, 166, -66, 65, 55, 110, 34, -51, -47, 204, 71, 44, 56, 17, -40, 21, 42, -15, -70, 120, -111, -106, -101, 33, 194, 148, 59, 201, 99, 153, 5, 19, 55, -13, 102, 29, -100, 4, 112, 95, 68, 152, 71, 117, 110, -48, -27, 26, 29, 133, -109, 10, -65, -82, 0, -20, -47, 97, 128, 118, -30, 95, -101, 29, 49, 153, 73, 42, -10, -112, 69, 131, -6, 195, 207, 121, 109, 4, 121, 30, 74, 161, 80, 185, 92, 29, 126, -14, 185, 47, -47, 128, 71, 114, -120, 18, 38, 111, 53, 138, 17, -68, -54, 111, 187, 206, 4, 35, 202, 157, 56, 24, 74, -14, 63, 201, -52, -21, 26, 77, 19, 163, 56, 106, 184, -36, -104, 17, 75, 180, -87, 179, 71, 119, -88, -54, 57, -35, 101, 138, 182, 23, -83, 19, 62, 7, -119, 80, -106, 123, 30, 11, 98, 177, -34, 112, -22, 104, 75, 20, 29, 140, -82, 188, -42, 92, 119, -10, 176, -15, -42, -14, 112, 26, 2, 16, 50, 113, 17, 157, 97, -90, 37, -106, 7, 112, 197, 150, 194, 21, -78, 16, 53, 37, -48, 14, 70, 96, -108, 8, 17, 127, 184, 9, 177, 122, -75, 20, 66, 114, -31, 176, -66, -27, -70, -102, 167, 67, -21, -21, 199, 87, -74, 26, 67, 14, 91, 198, 33, -37, -5, -109, -24, 110, 142, 96, 160, 152, 36, 16, 71, 51, 62, -40, 74, 55, -4, 125, 134, 128, 163, 106, 17, 26, -117, 24, 63, 57, -2, 112, 89, 1, -3, 51, -23, 68, 73, 16, 108, 89, -11, 17, 45, 4, -93, 77, 33, 104, -33, 5, 138, 147, 2, 171, 61, 44, -41, 16, 50, 26, -86, 89, 51, 69, -104, 43, 47]
        , m = function (a, k, i) {
            return (a + k[pc](k[le] % i))
        }
        , dc = function () {
            var sl = sk[le] - 1, av = sk[sl], i = 0, j = i, ret = i, a, b;
            while (sl--) {
                i = j;
                b = m(sk[j++], id, (j > 0 && j % 0x10 == 0) ? 0x10 : j % 0x10);
                if (i % 3 == 0) {
                    ret -= (b * (i % 3) - av)
                } else {
                    ret += (b + 87)
                }
            }
            return ret | mov(1)
        };
    // w[s([95, 95, 113, 122, 109, 99, 102])] = dc
    return dc()
}
// w[s([95, 95, 113, 122, 109, 99, 102])] = dc

var ac = ["qznewsite.uid=0pyz3aktnsrppcwen0lrxs3k"];
var __qzmcf = get_code(ac);

console.log(__qzmcf);
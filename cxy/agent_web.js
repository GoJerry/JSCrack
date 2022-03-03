
function a(t, n) {
    if ("undefined" != typeof document) {
        for (var o = {}, i = document.cookie ? document.cookie.split("; ") : [], a = 0; a < i.length; a++) {
            var u = i[a].split("=")
                , c = u.slice(1).join("=");
            n || '"' !== c.charAt(0) || (c = c.slice(1, -1));
            try {
                var s = e(u[0]);
                if (c = (r.read || r)(c, s) || e(c),
                    n)
                    try {
                        c = JSON.parse(c)
                    } catch (t) {}
                if (o[s] = c,
                t === s)
                    break
            } catch (t) {}
        }
        return t ? o[t] : o
    }
}


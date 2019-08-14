function a(e, t, n, r, a, s) {
  var u = i(n),
  d = i(r);
  u = o(u),
  a = a || '01',
  e = e.toUpperCase(),
  s = s || Math.round((new Date).getTime() / 1000);
  var f = d.length ? (0, l) (d.join('&'))  : '',
  p = t + (u.length ? '?' + u.join('&')  : ''),
  h = s.toString(16),
  g = a + '\n' + e + '\n' + f + '\n' + p + '\n' + s,
  m = (0, c['default']) (g, 'ytU7vwqIx2UXQNsi');
  return a + m + h
}

function i(e) {
  var t = [
  ],
  n = '';
  for (n in e)
  t.push(n + '=' + e[n]);
  return t
}

function o(e) {
  if (e.length <= 1)
  return e;
  for (var t = Math.floor(e.length / 2), n = e.splice(t, 1), r = [
  ], i = [
  ], a = 0; a < e.length; a++)
  n > e[a] ? r.push(e[a])  : i.push(e[a]);
  return o(r).concat(n, o(i))
}

t = "1945ffcbc00fe3dc6ad3945ce3be2b83";





var x = a("POST", "/mroute.html", {method: "beibei.user.token.get"}, {username: "17775704388", scene: "h5_login", rams_device_id: 1744489983});
console.log(x);

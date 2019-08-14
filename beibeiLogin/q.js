function f(t) {
    for (var e = [], n = 0; n < t.length; n++)
        e.push((t[n] >>> 4).toString(16)),
            e.push((15 & t[n]).toString(16));
    return e.join("")
}

console.log(f("[225, 158, 161, 60, 207, 112, 250, 160, 78, 24, 191, 59, 177, 201, 110, 129]"));


function f() {
    for (var a = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"], b = 0; b < 500; b++)
        for (var c = "", d = 0; d < 9; d++) {
            var e = Math.floor(16 * Math.random());
            c += a[e]
        }
    return c
}

console.log(f());
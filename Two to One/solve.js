function longest(s1, s2) {
    return [...new Set((s1 +s2).split(""))].sort().join("");
}

a = "xyaabbbccccdefww";
b = "xxxxyyyyabklmopq";
longest(a, b)

function closeCompare(a, b, margin = 0) {
    return (margin >= Math.abs(a - b) && margin != 0 || a == b) ? 0 : (a < b) ? -1 : 1
}

closeCompare(4, 5);
closeCompare(5, 5);
closeCompare(6, 5);
closeCompare(-6, -5);

closeCompare(2, 5, 3);
closeCompare(8.1, 5, 3);
closeCompare(1.99, 5, 3);


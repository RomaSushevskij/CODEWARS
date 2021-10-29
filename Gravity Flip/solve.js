const flip = (d, a) => {
    switch (d) {
        case "R":
            return a.sort((x, y) => x - y);
        case "L" :
            return a.sort((x, y) => y - x);
    }
}
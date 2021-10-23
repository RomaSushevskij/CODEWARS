correct = (string) => string.split("").map(current => (current == 5) ? "S" :
    (current == "0") ? "O" :
        (current == 1) ? "I" : current).join("")
function DNAtoRNA(dna) {
    return dna.split("").map(item => item === "T" ? "U" : item).join("")
}
function toFreud(string) {
    if(string.length===0) {
        return ""}
    else {
        let sum = string.split(' ').length;
        let result = []
        for(let i=0; i<sum; i++) {
            result.push("sex")
        }
        result = result.join(" ")

        return result;}
}
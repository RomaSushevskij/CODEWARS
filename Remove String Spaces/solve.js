function noSpace(x) {
    return x.split("").map(item => item != " " ? item : "").join("")
}
function noSpace(x){
    return x.replace(/\s/g, '');
}
function abbrevName(name){
    let a = name.split(" ");
    return `${a[0][0].toUpperCase()}.${a[1][0].toUpperCase()}`
}
abbrevName("Roman Sushevskij")
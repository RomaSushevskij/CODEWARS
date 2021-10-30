function gooseFilter(birds) {
    let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter(item => geese.indexOf(item) === -1)
}

gooseFilter(["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]);
gooseFilter(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"])

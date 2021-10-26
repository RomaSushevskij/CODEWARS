function all(arr, fun) {
    return arr.every(fun)
}
all([1,2,3,4,5], function(v){return v<9});
all([1,2,3,4,5], function(v){return v>9});

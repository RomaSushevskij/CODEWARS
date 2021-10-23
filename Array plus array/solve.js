function arrayPlusArray(arr1, arr2) {
    return arr1.reduce((sum,current) => current + sum, 0) + arr2.reduce((sum,current) => current + sum, 0);
}
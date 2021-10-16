function twoHighest(arr) {
    arr.sort((a, b) => {
        if (a > b) return 1;
        if (a == b) return 0;
        if (a < b) return -1;
    });
    arr.reverse();
    console.log(arr);
    if (arr.length === 0) {
        return arr;
    };
    if (arr.length === 1) {
        return arr;
    };
    if (arr.length > 1) {
        let result = arr.find((item, index) => arr[0] > item);
        let newArr = [arr[0], result];
        return newArr;
    }
}
twoHighest([1,3,5,0,6,10]);
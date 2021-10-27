function countSheeps(arrayOfSheep) {
    return arrayOfSheep.reduce((sum, item) => item ? sum + 1 : sum + 0, 0)
}

array1 = [true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true];
countSheeps(array1);
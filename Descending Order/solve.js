function descendingOrder(n) {
    const nArr = n.toString().split('').map(l => Number(l));
    const sortingNArr = nArr.sort((x, y) => y - x);
    return Number(sortingNArr.join(''))
}

descendingOrder(0)  //0)
descendingOrder(1)  //1)
descendingOrder(111)  //111)
descendingOrder(15)  //51)
descendingOrder(1021)  //2110)
descendingOrder(123456789)  //987654321)
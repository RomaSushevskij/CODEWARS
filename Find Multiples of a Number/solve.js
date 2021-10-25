/*
function findMultiples(integer, limit) {
    let arr = [];
    let result = 0;
    while (result <= limit - integer) {
        result+=integer;
        arr.push(result)
    }
    return arr

}
*/

function findMultiples(integer,limit){
    return Array(Math.floor(limit/integer)).fill(1).map((el,index)=>integer*(index+1));
}
findMultiples(4, 27);

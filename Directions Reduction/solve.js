function dirReduc(arr) {
    for (let i = 0; i < arr.length; i++) {
        const both = arr[i] + arr[i + 1]
        if (both === 'NORTHSOUTH' | both === 'SOUTHNORTH' | both === 'WESTEAST' | both === 'EASTWEST') {
            arr.splice(i, 2)
            i = -1
        }
    }
    return arr
}


dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])  //["WEST"]
dirReduc(["NORTH", "WEST", "SOUTH", "EAST"])  //["NORTH", "WEST", "SOUTH", "EAST"]
dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"])  //[]
dirReduc(["EAST", "EAST", "WEST", "NORTH", "WEST", "EAST", "EAST", "SOUTH", "NORTH", "WEST"])  //[ 'NORTH','EAST' ]
dirReduc(["EAST", "EAST", "WEST", "NORTH", "WEST", "EAST", "EAST", "SOUTH", "NORTH", "WEST"])  //[ 'EAST', 'NORTH' ]
dirReduc(["SOUTH", "NORTH", "EAST", "WEST", "SOUTH", "NORTH", "EAST", "SOUTH", "EAST", "WEST", "SOUTH", "NORTH", "EAST", "WEST"])  //[ 'EAST', 'NORTH' ]
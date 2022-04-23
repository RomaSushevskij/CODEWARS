// function rgb(r, g, b) {
//     const colorConvertObj = {
//         0: '0',
//         1: '1',
//         2: '2',
//         3: '3',
//         4: '4',
//         5: '5',
//         6: '6',
//         7: '7',
//         8: '8',
//         9: '9',
//         10: 'A',
//         11: 'B',
//         12: 'C',
//         13: 'D',
//         14: 'E',
//         15: 'F'
//     }
//     const convertColor = (color) => {
//         let result = []
//         if (color <= 0) {
//             return '00'
//         }
//         if (color > 255) {
//             color = 255
//         }
//         let step_1 = Math.floor(color / 16)
//         let step_2 = color % 16
//         result[0] = colorConvertObj[step_1]
//         result[1] = colorConvertObj[step_2]
//         return result.join('')
//     }
//     const part_1 = convertColor(r)
//     const part_2 = convertColor(g)
//     const part_3 = convertColor(b)
//     return part_1 + part_2 + part_3
// }

function rgb(r, g, b) {
    const convertTo16 = (color) => {
        if (color <=0) {
            return '00'
        }
        if (color > 255) {
            color = 255
        }
        const convertingColor = Number(color).toString(16).toUpperCase()
        return convertingColor.length < 2 ? '0' + convertingColor : convertingColor
    }
    const one = convertTo16(r)
    const two = convertTo16(g)
    const three = convertTo16(b)
    return one + two + three
}


rgb(0, 0, 0)   //'000000')
rgb(0, 0, -20)   //'000000')
rgb(300, 255, 255)   //'FFFFFF'
rgb(173, 255, 47)   //'ADFF2F')
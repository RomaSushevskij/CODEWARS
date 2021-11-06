function getDrinkByProfession(param) {
    let menu = {
        "Jabroni": "Patron Tequila",
        "School Counselor": "Anything with Alcohol",
        "Programmer": "Hipster Craft Beer",
        "Bike Gang Member": "Moonshine",
        "Politician": "Your tax dollars",
        "Rapper": "Cristal"
    }
    let order = param.split(' ');
    let ans = []
    for (let i = 0; i<order.length; i += 1) {
        let item = order[i][0].toUpperCase() + order[i].slice(1).toLowerCase()
        ans.push(item)
    }
    ans = ans.join(' ')
    return menu.hasOwnProperty(ans) ? menu[ans] : "Beer"
}

getDrinkByProfession("jabrOni")
getDrinkByProfession("bike ganG member")
getDrinkByProfession("Pug")
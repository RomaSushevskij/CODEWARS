function cakes(recipe, available) {
    const keysOfAvailable = Object.keys(available);
    let ingCount = [];
    keysOfAvailable.forEach(ing => {
        if (recipe.hasOwnProperty(ing)) {
            const count = Math.floor(available[ing] / recipe[ing]);
            ingCount = [...ingCount, count]
        }
    })
    if (ingCount.length === Object.keys(recipe).length && ingCount.every(c => c > 0)) {
        return Math.min(...ingCount)
    }
    return 0
}


let recipe = {flour: 500, sugar: 200, eggs: 1};
let available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};
cakes(recipe, available) //2
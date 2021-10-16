function billboard(name, price = 30){
    let totalPrice = 0;
    for (let i=0; i<name.length;i+=1) {
        totalPrice+=price;
    }
    return totalPrice;
}
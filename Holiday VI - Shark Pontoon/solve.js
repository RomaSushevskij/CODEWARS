function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
    if (dolphin) {
        sharkSpeed /= 2
    }
    let youTime = pontoonDistance / youSpeed;
    let sharkTime = sharkDistance / sharkSpeed;
    return sharkTime > youTime ? "Alive!" : "Shark Bait!"
}
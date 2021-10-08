function rentalCarCost(days) {
    const costOfDay = 40;
    const discount = (days >= 3) ? 20 : (days >= 7) ? 50 : 0;
    return days * costOfDay - discount;

}

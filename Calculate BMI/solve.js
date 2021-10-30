function bmi(weight, height) {
    return weight / height ** 2 > 30 ? "Obese" : weight / height ** 2 > 25 ? "Overweight" :
        weight / height ** 2 > 18.5 ? "Normal" : "Underweight";
}
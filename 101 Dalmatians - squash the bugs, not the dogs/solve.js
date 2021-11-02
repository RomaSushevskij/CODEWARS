function howManyDalmatians(numer) {

    var dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];

    var respond = numer <= 10 ? dogs[0] : numer <= 50 ? dogs[1] : numer == 101 ? dogs[3] : dogs[2]

    return respond
}
function iceBrickVolume(radius, bottleLength, rimLength) {
    return (bottleLength - rimLength) * radius * 2 * radius;
}

}

iceBrickVolume(1, 10, 2)
iceBrickVolume(5, 30, 7)
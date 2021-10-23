function century(year) {
    return ((year - Math.floor(year/100)) > 0) ? Math.ceil(year/100): Math.floor(year/100);
}

century(1705);

century(1900);


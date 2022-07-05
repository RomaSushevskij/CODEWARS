function XO(str) {
    const arrO = str.split('').filter(l => l.toLowerCase() === 'o');
    const arrX = str.split('').filter(l => l.toLowerCase() === 'x');
    return arrO.length === arrX.length
}

XO('xo')  //true);
XO("xxOo")  //true);
XO("xxxm")  //false);
XO("Oo")  //false);
XO("ooom")  //false);
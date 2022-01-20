
function alphabetPosition(text) {
    const alph = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    return text.split('').filter(l => alph.includes(l.toLowerCase())).map(l => alph.indexOf(l.toLowerCase()) + 1).join(' ');
}
alphabetPosition("The sunset sets at twelve o' clock.");
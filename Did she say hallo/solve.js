function validateHello(greetings) {
    let langArr = ['hello', 'ciao', 'salut', 'hallo', 'hola', 'ahoj', 'czesc'];
    let result = greetings.toLowerCase();
    for (let i = 0; i < langArr.length; i += 1) {
        if (result.indexOf(langArr[i]) !== -1) {
            return true;
        }
    }
    return false;
}


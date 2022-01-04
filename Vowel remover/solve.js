function shortcut(string) {
    const vowels = new Array('a', 'e', 'i', 'o', 'u');
    return string.split('').filter(w => !vowels.includes(w)).join('')
}
function hello(name) {
    if (name === "" || name === undefined) {
        return "Hello, World!"
    }
        let first = name.toLowerCase();
        first = first[0].toUpperCase() + first.substring(1);
        return `Hello, ${first}!`
}

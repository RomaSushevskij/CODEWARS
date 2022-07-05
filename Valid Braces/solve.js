function validBraces(braces) {
    const stack = [];
    let result = true;
    function helper(char) {}
    for (let i = 0; i < braces.length; i++) {
        if (braces[i] === '(') {
            stack.push(')')
        } else if (braces[i] === ')') {
            if (stack[stack.length - 1] !== ')') {
                result = false
                break
            }
            if (!stack.pop()) {
                result = false
                break
            }
        }
        if (braces[i] === '[') {
            stack.push(']')
        } else if (braces[i] === ']') {
            if (stack[stack.length - 1] !== ']') {
                result = false
                break
            }
            if (!stack.pop()) {
                result = false
                break
            }
        }
        if (braces[i] === '{') {
            stack.push('}')
        } else if (braces[i] === '}') {
            if (stack[stack.length - 1] !== '}') {
                result = false
                break
            }
            if (!stack.pop()) {
                result = false
                break
            }
        }
    }
    if (stack.length) {
        result = false
    }
    console.log(result)
    return result
}


validBraces("()))"); //false
validBraces("()"); //true
validBraces("[]");  //true
validBraces("{}");  //true
validBraces("(){}[]");  //true
validBraces("([{}])");  //true
validBraces("[(])"); //false
validBraces("({})[({})]");  //true
validBraces("())({}}{()][]["); //false

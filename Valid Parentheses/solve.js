function validParentheses(parens) {
    let stack = []
    let result = true
    for (let i = 0; i < parens.length; i++) {
        if (parens[i] === '(') {
            stack.push(parens[i])
        } else {
            if (!stack.pop()) {
                result = false
                break
            }
        }
    }
    if (stack.length) {
        result = false
    }
    return result
}

// validParentheses("")  //  true));
// validParentheses("(")  // false));
// validParentheses("()")  // true));
//validParentheses("()(()))")  // false));
validParentheses("())")  // false)) ;
// validParentheses("(())((()())())")  // true)) ;
//validParentheses("()()()())")  // true)) ;
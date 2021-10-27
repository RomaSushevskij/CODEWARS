function isVow(a){
    return a.map(el => {
        switch (el) {
            case 97:
                return "a"
            case 101:
                return "e"
            case 105:
                return "i"
            case 111:
                return "o"
            case 117:
                return "u"
            default:
                return el;
        }
    } )
}

const v={"97":"a","101":"e","105":"i","111":"o","117":"u"}
const isVow=a=>a.map(x=>v[x]||x)
isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106])
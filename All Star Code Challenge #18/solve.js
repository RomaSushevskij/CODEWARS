function strCount(str, letter){
    if (str.indexOf(letter)===-1){
        return 0
    } else {
        str = str.split("");
        let count=0;
        str.forEach(function(element){
            if(element===letter) {
                count+=1;
            }
        })

        return count

    }
}
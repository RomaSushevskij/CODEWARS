function well(x) {
    return x.filter(item => item == "good").length >= 3 ? 'I smell a series!' :
        x.filter(item => item == "good").length >= 1 ? 'Publish!' : 'Fail!'
}
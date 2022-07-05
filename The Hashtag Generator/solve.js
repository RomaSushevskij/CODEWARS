function generateHashtag (str) {
    const finalStr = `#${str.split(' ').map(w => `${w.slice(0,1).toUpperCase()}${w.slice(1)}`).join('')}`
    return !str.trim().length || finalStr.length > 140 ? false : finalStr
}

generateHashtag("Do We have A Hashtag")  // "#DoWeHaveAHashtag"
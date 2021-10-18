function betterThanAverage1(classPoints, yourPoints) {
    let sum =0;
    for(let i=0;i<classPoints.length;i+=1) {
        sum+=classPoints[i];
    }
    return (yourPoints>sum/classPoints.length)?true:false;
}

function betterThanAverage2(classPoints, yourPoints) {
    return (yourPoints>classPoints.reduce((sum, current)=>{return sum+current}, 0)/classPoints.length)?true:false
}

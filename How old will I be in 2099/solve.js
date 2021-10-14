function calculateAge(bornYear, presentYear) {
    let diff = presentYear - bornYear;
    if (diff === 1) {
        return `You are ${diff} year old.`
    } else if (diff > 1) {
        return `You are ${diff} years old.`
    } else if (diff === -1) {
        return `You will be born in ${Math.abs(diff)} year.`
    } else if (diff < -1) {
        return `You will be born in ${Math.abs(diff)} years.`
    } else if (diff === 0) {
        return "You were born this very year!"
    }
}

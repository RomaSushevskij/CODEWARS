function humanReadable(paramSeconds) {
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    if (paramSeconds < 60) {
        seconds = paramSeconds
    }
    if (paramSeconds < 3600) {
        minutes = Math.floor(paramSeconds / 60)
        seconds = paramSeconds - minutes * 60
    }
    if (paramSeconds >= 3600) {
        hours = Math.floor(paramSeconds / 3600)
        minutes = Math.floor((paramSeconds - hours * 3600) / 60)
        seconds = paramSeconds - hours * 3600 - minutes * 60
    }

    return `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
}


humanReadable(0) // '00:00:00', 'humanReadable(0)');
humanReadable(59) // '00:00:59', 'humanReadable(59)');
humanReadable(60) // '00:01:00', 'humanReadable(60)');
humanReadable(90) // '00:01:30', 'humanReadable(90)');
humanReadable(3599) // '00:59:59', 'humanReadable(3599)');
humanReadable(3600) // '01:00:00', 'humanReadable(3600)');
humanReadable(45296) // '12:34:56', 'humanReadable(45296)')
humanReadable(86399) // '23:59:59', 'humanReadable(86399)')
humanReadable(86400) // '24:00:00', 'humanReadable(86400)')
humanReadable(359999) // '99:59:59', 'humanReadable(359999)
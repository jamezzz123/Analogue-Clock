const HOURHAND = document.querySelector("#hour")
const MINUTEHAND = document.querySelector("#minute")
const SECONDHAND = document.querySelector("#second")

var date = new Date()

var hr = date.getHours()
var min = date.getMinutes()
var sec = date.getSeconds()

var hrPosition = hr * 360/12 + min * 6/12
var minPosition = min * 360/60 + sec * 6/60
var secPosition = sec * 360/60


var runTheClock = function(){

    console.log("Hour:",hr, "Min:",min, "Sec:",sec)
    hrPosition = hrPosition + 3/360
    minPosition = minPosition + 6/60
    secPosition = secPosition + 6
    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)"
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)"
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)"

}

var interval = setInterval(runTheClock, 1000)


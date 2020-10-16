const HOURHAND = document.querySelector("#hour")
const MINUTEHAND = document.querySelector("#minute")
const SECONDHAND = document.querySelector("#second")


var runTheClock = function(){

    var date = new Date()

    let hr = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()

    // console.log("hour: ",hr ,"minutes: ",min, "seconds: ", sec)

    var hrPosition = hr*(360/12) + min*((360/60)/12)
    var minPosition = min*(360/60) + sec*((360/60)/60)
    var secPosition = sec*(360/60)


    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)"
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)"
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)"

}
var interval = setInterval(runTheClock,1000)

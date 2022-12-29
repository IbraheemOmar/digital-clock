const hourEl = document.querySelector("#hour")
const minutesEl= document.querySelector("#minutes")
const secondsEl = document.querySelector("#seconds")
const ampmEl = document.querySelector("#ampm")

function digitalClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM"
    
    if(h>12){
        h= h-12
        ampm = "PM"

    }

    hourEl.textContent = h;
    minutesEl.innerText = m;
    secondsEl.innerText = s;
    ampmEl.innerHTML = ampm

    setTimeout(()=>{
        digitalClock();
    },1000)
}

digitalClock()
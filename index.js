let homeTxt=document.getElementById("hotxt")
let guestTxt=document.getElementById("gutxt")
let resetTextH=document.getElementById("rsth")
let resetTextG=document.getElementById("rstg")
  let btn=document.getElementById("start")

let currenPointh=0;
let currentpointg=0;
let startTime, intervalId;

function hadd1(){
    currenPointh+=1
    homeTxt.textContent=currenPointh
   
}
function hadd2(){
    currenPointh+=2
    homeTxt.textContent=currenPointh
}
function hadd3(){
    currenPointh+=3
    homeTxt.textContent=currenPointh
}

function gadd1(){
    currentpointg+=1
    guestTxt.textContent=currentpointg
}
function gadd2(){
    currentpointg+=2
    guestTxt.textContent=currentpointg;
}
function gadd3(){
    currentpointg+=3
    guestTxt.textContent=currentpointg
}

function rsth(){
    homeTxt.textContent=0;
    currenPointh=0;
}
function rstg(){
    guestTxt.textContent=0;
    currentpointg=0;
}



// stopwatch clock
function start() {
  startTime = new Date();
  intervalId = setInterval(update, 10);

  btn.disabled = true;
}

function stop() {
  clearInterval(intervalId);
  btn.disabled = false;
  
}

function reset() {
  stop();
  document.getElementById("display").innerHTML = "00:00:00";
  btn.disabled = false;
}

function update() {
  let now = new Date();
  let elapsedTime = now.getTime() - startTime.getTime();
  let minutes = Math.floor(elapsedTime / 60000);
  let seconds = Math.floor((elapsedTime - minutes * 60000) / 1000);
  let milliseconds = elapsedTime - minutes * 60000 - seconds * 1000;
  let timeString = pad(minutes) + ":" + pad(seconds) + ":" + pad(milliseconds);
  document.getElementById("display").innerHTML = timeString;
}

function pad(number) {
  return ("0" + number).slice(-2);
}
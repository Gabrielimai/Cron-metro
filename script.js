let hours = 00;
let minutes = 00;
let seconds = 00;
let interval;

function twoDigit(digit) {
    if (digit < 10) {
      return ('0' + digit);
    } else {
      return (digit);
    }
}


function start() {
    watch()
  interval = setInterval(watch, 1000);
}

function stop() {
  clearInterval(interval);
}

function restart() {
  clearInterval(interval);
  seconds = 0;
  minutes = 0;
  document.getElementById("watch").innerText = "00:00:00";
}



function watch() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }

  document.getElementById("watch").innerText = twoDigit(hours) + ":" + twoDigit(minutes) + ":" + twoDigit(seconds);
}

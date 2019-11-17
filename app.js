// Get DOM Vars
const hour = document.querySelector(".hour"),
  minute = document.querySelector(".minute"),
  second = document.querySelector(".second");

//  Time Vars
let time = new Date();

let s = time.getSeconds(),
  m = time.getMinutes();
h = time.getHours();

function clock() {
  setTimeout(() => {
    s++;
  }, 900);

  if (s == 60) {
    m++;
    if (m == 60) {
      h++;
      if (h == 24) {
        h = 0;
      }
      m = 0;
    }
    s = 0;
  }

  if (s < 10) {
    second.innerHTML = `0 ${s}`;
  } else {
    second.innerHTML = s;
  }

  if (m < 10) {
    minute.innerHTML = `0 ${m}`;
  } else minute.innerHTML = m;

  if (h < 10) {
    hour.innerHTML = `0 ${h}`;
  } else {
    hour.innerHTML = h;
  }
}
setInterval(clock, 1000);
clock();

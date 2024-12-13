let btn = document.getElementById("btn");

btn.onclick = function () {
  let d1;
  let m1;
  let y1;
  if (
    document.querySelector(".day").value <= 31 &&
    document.querySelector(".day").value >= 1
  ) {
    d1 = document.querySelector(".day").value;
  } else {
    return;
  }
  if (
    document.querySelector(".month").value <= 12 &&
    document.querySelector(".month").value >= 1
  ) {
    m1 = document.querySelector(".month").value;
  } else {
    return;
  }
  if (document.querySelector(".year").value >= 1) {
    y1 = document.querySelector(".year").value;
  } else {
    return;
  }

  let date = new Date();
  let d2 = date.getDate();
  let m2 = 1 + date.getMonth();
  let y2 = date.getFullYear();
  let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (d1 > d2) {
    d2 = d2 + month[m2 - 1];
    m2 = m2 - 1;
  }

  if (m1 > m2) {
    m2 = m2 + 12;
    y2 = y2 - 1;
  }

  let d = d2 - d1;
  let m = m2 - m1;
  let y = y2 - y1;

  document.getElementById("age").innerHTML =
    "Your Age is " + y + " Years " + m + " Months " + d + " Days";
};

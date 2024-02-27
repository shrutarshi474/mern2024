// let value = document.querySelector(".head2");
// value.innerHTML = "Welcome to DOM";
// document.getElementById("head3").innerText = "The id element";
// document.getElementsByTagName("h1");
// document.querySelectorAll("h1")[1].style.color = "red";
// document.querySelectorAll("h1.head2")[0].textContent = "This is H1 class head2";
// document.querySelector("#flower").src =
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf_C3OjH3BbicdZ1UP0jAncMv-HpNvU_B1fg6C8H_vcg&s";
// document.querySelector(
//   ".head"
// ).innerHTML = `Date: ${new Date().toLocaleTimeString()}`;
// function allow() {
//   document.querySelector(".btn").classList.add("visible");
//   document.querySelector(".box").classList.remove("visible");
// }

// function closed() {
//   document.querySelector(".box").classList.add("visible");
//   document.querySelector(".btn").classList.remove("visible");
// }

// let update = document.forms["form"]["fname"].value;
// console.log(update);
// document.querySelector("h1").value = "Ray";
document.querySelector(
  ".date"
).innerHTML = `Date: ${new Date().toLocaleDateString()}`;
function showdate() {
  document.querySelector(
    ".date"
  ).innerHTML = `Date: ${new Date().toLocaleDateString()}`;
  document.querySelector(".box2").classList.add("visible");
  document.querySelector(".box1").classList.remove("visible");
}

setInterval(newtime, 1000);
function newtime() {
  document.querySelector(
    ".time"
  ).innerHTML = `Time: ${new Date().toLocaleTimeString()}`;
}

function showtime() {
  document.querySelector(".box1").classList.add("visible");
  document.querySelector(".box2").classList.remove("visible");
}

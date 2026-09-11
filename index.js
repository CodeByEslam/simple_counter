var plusbtn = document.getElementById("plusbtn");
var minussbtn = document.getElementById("minusbtn");
var result = document.getElementById("result");

function increment() {
  +result.innerHTML++;
}
function decrement() {
  -result.innerHTML--;
}

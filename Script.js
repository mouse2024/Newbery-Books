window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

let heartButtons = document.getElementsByClassName("heart");
let table = document.getElementsByTagName("table")[0];
let rows = table.getElementsByTagName("tr");
 
for (let i = 0; i < heartButtons.length; i++) {
    let heartButton = heartButtons[i];
    heartButton.onclick = function() {
        if (heartButton.src.indexOf("Heart.png") > -1) {
            heartButton.src = "HeartFilled.png";
			rows[i].style.opacity = 0.2;
        } else {
            heartButton.src = "Heart.png";
			rows[i].style.opacity = 1;
        }
    }
}
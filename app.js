// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

// add functionality to counter
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.target.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    value.innerText = count;
  });
});

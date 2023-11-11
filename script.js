// const add = document.querySelector(".add");
// const resetCount = document.querySelector(".reset");
// const sub = document.querySelector(".subtract");
const count = document.querySelector(".count");
const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (e) => {
  if (e.target.classList.contains("add")) {
    count.innerHTML++;
    changeColor();
  }
  if (e.target.classList.contains("subs")) {
    count.innerHTML--;
    changeColor();
  }
  if (e.target.classList.contains("reset")) {
    count.innerHTML = 0;
    changeColor();
  }
});

function changeColor() {
  if (count.innerHTML > 0) {
    count.style.color = '#64CCC5';
    count.style.backgroundColor = '#fff';
  } else if (count.innerHTML < 0) {
    count.style.color = '#DA0C81';
    count.style.backgroundColor = '#fff';
  } else {
    count.style.color = '#fff';
    count.style.backgroundColor = '#818FB4';
  }
}


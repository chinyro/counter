// Targeting elements
const count = document.querySelector('.count');
const buttons = document.querySelector('.buttons');

// Event delegation - event listeners
buttons.addEventListener('click', (e) => {
  if (e.target.classList.contains('add')) {
    count.innerHTML++;
    changeColor();
  }
  if (e.target.classList.contains('substract')) {
    count.innerHTML--;
    changeColor();
  }
  if (e.target.classList.contains('reset')) {
    count.innerHTML = 0;
    changeColor();
  }
});

// Changing color
function changeColor() {
  if (count.innerHTML > 0) {
    count.style.color = '#79E0EE';
  } else if (count.innerHTML < 0) {
    count.style.color = '#F11A7B';
  } else {
    count.style.color = '#EEEDED';
  }
}
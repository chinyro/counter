const number = document.querySelector('.number');
const generateBtn = document.querySelector('.generate');

const generateNumber = () => {
  // Number between 0 - 10
  const randomNumber = Math.floor(Math.random() * 1000);
  // console.log(randomNumber);
  number.innerHTML = randomNumber;
};

// Event Listeners
generateBtn.addEventListener('click', generateNumber);

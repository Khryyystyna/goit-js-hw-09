function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnStart = document.querySelector("button[data-start]");
const btnStop = document.querySelector("button[data-stop]");
const body = document.querySelector("body");

let timerId = {};

const onClick = () => {
  timerId = setInterval(() => {
    const getCol = getRandomHexColor();
      body.style.backgroundColor = getCol;
      btnStart.disabled = true;
      btnStop.disabled = false;
  }, 1000);
};

btnStart.addEventListener("click", onClick);

btnStop.addEventListener("click", () => {
    clearInterval(timerId);
    btnStart.disabled = false;
    btnStop.disabled = true;
});
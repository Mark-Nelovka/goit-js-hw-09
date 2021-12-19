// Напиши скрипт, который после нажатия кнопки «Start»,
// раз в секунду меняет цвет фона < body > на случайное значение
// используя инлайн стиль.При нажатии на кнопку «Stop», изменение
// цвета фона должно останавливаться.

// ⚠️ Учти, на кнопку «Start» можно нажать бесконечное количество раз.
// Сделай так, чтобы пока изменение темы запушено, кнопка «Start» была
// не активна(disabled).

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
    btnStart: document.querySelector('[data-start]'),
    btnStop: document.querySelector('[data-stop]')
};

refs.btnStart.addEventListener('click', hendleChangeBodyColor);
let timeId = null;
function hendleChangeBodyColor(e) {
   timeId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
}, 1000);
    if (timeId === 1) {
        refs.btnStart.disabled = true;
    }
    
}

refs.btnStop.addEventListener('click', hendlerStopChangeBodyColor);

function hendlerStopChangeBodyColor(e) {
 clearInterval(timeId);
}
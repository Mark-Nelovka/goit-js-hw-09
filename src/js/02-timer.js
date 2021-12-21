// Напиши скрипт таймера, который ведёт обратный отсчет
// до определенной даты.

// Описан в документации
import flatpickr from 'flatpickr';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      console.log(selectedDates[0]);
      if (selectedDates[0] < new Date()) {
          window.alert('Please choose a date in the future');
      } else {
          refs.bntStart.disabled = false;

          refs.bntStart.addEventListener('click', () => {
              let timeId = setInterval(() => {
          const saveDate = convertMs(selectedDates[0] - new Date());
                  refs.spanDay.textContent = saveDate.days;
                  refs.spanHours.textContent = saveDate.hours;
                  refs.spanMinutes.textContent = saveDate.minutes;
                  refs.spanSeconds.textContent = saveDate.seconds;
                  if ((selectedDates[0] - new Date()) < 1000) {
                      clearInterval(timeId);
                  }
              }, 1000);
          })
      }
  },
};

const refs = {
    bntStart: document.querySelector('[data-start]'),
    input: document.querySelector('#datetime-picker'),
    spanDay: document.querySelector('[data-days]'),
    spanHours: document.querySelector('[data-hours]'),
    spanMinutes: document.querySelector('[data-minutes]'),
    spanSeconds: document.querySelector('[data-seconds]')
}

refs.bntStart.disabled = true;

function addLeadingZero(value) {
return String(value).padStart(2, '0');
} 

flatpickr(refs.input, options)

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

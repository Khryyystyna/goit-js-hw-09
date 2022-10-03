import Notiflix from 'notiflix';
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const btnStart = document.querySelector("button[data-start]");
const timerRef = document.querySelector('.timer');

let numSelectedData = null;
let timerDedline = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      console.log(selectedDates[0]);
      timerDedline = selectedDates[0].getTime();
       numSelectedData = selectedDates[0];
      if (numSelectedData < Date.now()) {
          Notiflix.Notify.failure("Please choose a date in the future");
          btnStart.setAttribute('disabled', false);
      } else {
          btnStart.toggleAttribute('disabled');
      }
  },
};

      flatpickr("#datetime-picker", options);
      const timer = {
        intervalId: null,
        refs: {
        daysRef: document.querySelector('[data-days]'),
        hoursRef: document.querySelector('[data-hours]'),
        minutesRef: document.querySelector('[data-minutes]'),
        secondsRef: document.querySelector('[data-seconds]'),
    },
    start() {
        const timerDedline = new Date();
        this.intervalId = setInterval(() => {
            if(numSelectedData>= Date.now()){
            const ms = timerDedline - Date.now();
            const timeComponents = this.convertMs(ms);
            this.refs.daysRef.textContent = this.addLeadinZero(timeComponents.days);
            this.refs.hoursRef.textContent = this.addLeadinZero(timeComponents.hours);
            this.refs.minutesRef.textContent = this.addLeadinZero(timeComponents.minutes);
            this.refs.secondsRef.textContent = this.addLeadinZero(timeComponents.seconds);
            } else {
            this.intervalId = null;
            }
        }, 1000);
          },
    
        addLeadinZero(value) {
        return String(value).padStart(2, '0');
          },
    
    convertMs(ms) {
    const days = Math.floor(ms / 1000 / 60 / 60 / 24);
    const hours = Math.floor(ms / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(ms / 1000 / 60) % 60;
    const seconds = Math.floor(ms / 1000) % 60;
    return { days, hours, minutes, seconds };
  },
};

btnStart.addEventListener('click', timer.start());

const ms = numSelectedData - Date.now();






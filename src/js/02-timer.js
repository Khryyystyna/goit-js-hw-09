import { Notify } from 'notiflix/build/notiflix-notify-aio';
import flatpickr from "flatpickr";

import "flatpickr/dist/flatpickr.min.css";

const btnStart = document.querySelector("button[data-start]");
const timerRef = document.querySelector('.timer');

let timerDedline = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      console.log(selectedDates[0]);
      timerDedline = selectedDates[0].getTime();
      const numSelectedData = selectedDates[0];
      if (numSelectedData < Date.now()) {
          window.alert("Please choose a date in the future");
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
            const ms = timerDedline - Date.now();
            const timeComponents = convertMs(ms);
            const { days, hours, minutes, seconds } = this.refs;
            this.refs.daysRef.textContent = addLeadinZero(timeComponents.days);
            this.refs.hoursRef.textContent = this.addLeadinZero(timeComponents.hours);
            this.refs.minutesRef.textContent = this.addLeadinZero(timeComponents.minutes);
            this.refs.secondsRef.textContent = this.addLeadinZero(timeComponents.seconds);
        }, 1000);
    },

    convertMs(ms) {
    const days = Math.floor(ms / 1000 / 60 / 60 / 24);
    const hours = Math.floor(ms / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(ms / 1000 / 60) % 60;
    const seconds = Math.floor(ms / 1000) % 60;
    return { days, hours, minutes, seconds };
  },
};










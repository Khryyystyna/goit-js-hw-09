import flatpickr from "flatpickr";

import "flatpickr/dist/flatpickr.min.css";

const btnStart = document.querySelector("button[data-start]");

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
    const delta = timerDedline.getTime() - Date.now();
    this.intervalId = setInterval(() => {
      const ms = timerDedline.getTime() - Date.now();
      const data = this.convertMs(ms);

      this.refs.days.textContent = this.addLeadinZero(data.days);
      this.refs.hours.textContent = this.addLeadinZero(data.hours);
      this.refs.minutes.textContent = this.addLeadinZero(data.minutes);
      this.refs.seconds.textContent = this.addLeadinZero(data.seconds);
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




// const timer = {
//     intervalId: null,
//     refs: {
//         daysRef: document.querySelector('[data-days]'),
//         hoursRef: document.querySelector('[data-hours]'),
//         minutesRef: document.querySelector('[data-minutes]'),
//         secondsRef: document.querySelector('[data-seconds]'),
//     },

//     start() {
//         const timerDedline = new Date();
//         this.intervalId = setInterval(() => {
//             const ms = timerDedline - Date.now();
//             const timeCompinents = convertMs(ms);
//             const { days, hours, minutes, seconds } = this.refs;
//             this.refs.days.textContent = this.addLeadinZero(data.days);
//             this.refs.hours.textContent = this.addLeadinZero(data.hours);
//             this.refs.minutes.textContent = this.addLeadinZero(data.minutes);
//             this.refs.seconds.textContent = this.addLeadinZero(data.seconds);
//         }, 1000);
//     }
// };

// function convertMs(ms) {
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   const days = Math.floor(ms / day);
//   const hours = Math.floor((ms % day) / hour);
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }







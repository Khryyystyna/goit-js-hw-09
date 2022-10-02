import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('form'),
  inputDelay: document.getElementsByName('delay'),
  inputStep: document.getElementsByName('step'),
  inputAmount: document.getElementsByName('amount'),
  // inputDelay: document.querySelector('input.delay'),
  // inputStep: document.querySelector('input.step'),
  // inputAmount: document.querySelector('input.amount'),
  submitBtn: document.querySelector("button"),
};

refs.form.addEventListener('submit', onSubmitFormEvent);

function onSubmitFormEvent() {
  preventDefault();
  let numOfPosition = 0;
  for (let i = 0; i < Number(refs.inputAmount.value); i += 1) {
    numOfPosition += 1;
    const deleyStepCount = Number(refs.inputDelay.value) - Number(refs.inputStep.value);

    createPromise(numOfPosition, deleyStepCount)
      .then(({ position, delay }) => {
     Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
     Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
  }
};

function preventDefault(event) {
  event.preventDefault();
};

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
           resolve({position, delay});
      } else {
         reject({position, delay});
      }
    }, delay);
  });
};




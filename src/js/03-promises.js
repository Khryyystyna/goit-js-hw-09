import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('form'),
  inputDelay: document.getElementsByName('delay'),
  inputStep: document.getElementsByName('step'),
  inputAmount: document.getElementsByName('amount'),
  submitBtn: document.querySelector("button"),
};

refs.form.addEventListener('submit', onSubmitFormEvent);

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

function onSubmitFormEvent(evt) {
  evt.preventDefault();
  let {
    elements: { delay, step, amount },
  } = evt.currentTarget;
  let elDelay = Number(delay.value);
  let elStep = Number(step.value);
  let elAmount = Number(amount.value);
  for (let position = 1; position <= elAmount; position += 1) {
    createPromise(position, elDelay)
      .then(({ position, delay }) => {
     Notiflix.Notify.success(`:white_check_mark: Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
     Notiflix.Notify.failure(`:x: Rejected promise ${position} in ${delay}ms`);
  });
    elDelay += elStep;
  }
};

function preventDefault(event) {
  event.preventDefault();
};

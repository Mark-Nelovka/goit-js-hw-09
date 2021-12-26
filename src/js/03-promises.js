import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const refs = {
  formPromises: document.querySelector('.form'),
  delayTime: document.querySelector('input[name=delay]'),
  stepTime: document.querySelector('input[name=step]'),
  amountSteps: document.querySelector('input[name=amount]'),
  btnCreatePromises: document.querySelector('button')
}

refs.formPromises.addEventListener('submit', makePromises)

let formValue = {};

function makePromises(e) {
  e.preventDefault();

  formValue = {
    delay: refs.delayTime.value,
    step: refs.stepTime.value,
    amount: refs.amountSteps.value
  }

  let delayNumber = Number(formValue.delay);
    let stepNumber = Number(formValue.step);
  let amountNumber = Number(formValue.amount);
 
  resultPrimises(delayNumber, stepNumber, amountNumber);

}

function createPrimises(position, delay) {
 
  return new Promise((resolve, reject) => {
      const shouldResolve = Math.random() > 0.3;
       if (shouldResolve) {
resolve(`✅ Fulfilled promise ${position} in ${delay} ms`)
     } else {
reject(`❌ Rejected promise ${position} in ${delay} ms`);
     }
   
})
}
  
function resultPrimises(delayNumber, stepNumber, amountNumber) {
  let counter = 0;
  // let delay = 0;
  for (let i = delayNumber; i < 1000000; i += delayNumber) {
    let step = stepNumber;
        setTimeout(() => {
          counter += 1;
          
          if (counter > amountNumber) {
            return;
          
          } else if (counter < 2) {
            
            createPrimises(counter, delayNumber).then(result => Notiflix.Notify.success(`${result}`)).catch(result => Notiflix.Notify.warning(`${result}`));
          
          } else {
            const stepValue = delayNumber += stepNumber;
            createPrimises(counter, stepValue).then(result => Notiflix.Notify.success(`${result}`)).catch(result => Notiflix.Notify.warning(`${result}`));
          }
        }, qwe(i, step));
        }
}


function qwe(i, step) {
  if (step < 1) {
    
    return 0;
  }
  return i;
}
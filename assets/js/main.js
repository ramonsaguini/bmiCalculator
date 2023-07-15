// Capturar evento de submit do formulário
const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const inputweight = e.target.querySelector('#weight');
  const inputheight = e.target.querySelector('#height');

  const weight = Number(inputweight.value);
  const height = Number(inputheight.value);

  if (!weight) {
    setRes('Inválid Weight', false);
    return;
  }

  if (!height) {
    setRes('Inválid Height', false);
    return;
  }

  const bmi = getBmi(weight, height);
  const bmiNivel = getBmiNivel(bmi);

  const msg = `Your BMI is ${bmi} (${bmiNivel}).`;

  setRes(msg, true);
});

function getBmiNivel (bmi) {
  const nivel = ['Underweight', 'Normal weight', 'Overweight',
  'Grade 1 obesity', 'Grade 2 obesity', 'Grade 3 obesity'];

  if (bmi >= 39.9) return nivel[5];
  if (bmi >= 34.9) return nivel[4];
  if (bmi >= 29.9) return nivel[3];
  if (bmi >= 24.9) return nivel[2];
  if (bmi >= 18.5) return nivel[1];
  if (bmi < 18.5) return nivel[0];
}

function getBmi (weight, height) {
  const bmi = weight / height ** 2;
  return bmi.toFixed(2);
}

function createP () {
  const p = document.createElement('p');
  return p;
}

function setRes (msg, isValid) {
  const res = document.querySelector('#res');
  res.innerHTML = '';

  const p = createP();

  if (isValid) {
    p.classList.add('p-res');
  } else {
    p.classList.add('bad');
  }

  p.innerHTML = msg;
  res.appendChild(p);
}

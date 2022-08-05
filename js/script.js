function start() {
  let buttonCalculateIMC = document.querySelector('#button-calculate-imc');
  buttonCalculateIMC.addEventListener('click', handleButtonClick);

  let inputWeight = document.querySelector('#input-weight');
  let inputHeight = document.querySelector('#input-height');

  inputWeight.addEventListener('input', handleButtonClick); // nessas duas linhas eles esta 'esctutando' a mudanca de peso e altura do usuario e fazendo o calcula
  inputHeight.addEventListener('input', handleButtonClick);

  handleButtonClick(); // aqui ele já começa calculando
}

function calculateImc(weight, height) {
  return weight / (height * height);
}

function handleButtonClick() {
  let inputWeight = document.querySelector('#input-weight');
  let inputHeight = document.querySelector('#input-height');
  let imcResult = document.querySelector('#imc-result');
  let weight = Number(inputWeight.value);
  let height = Number(inputHeight.value);

  var imc = calculateImc(weight, height);
  var formattedImc = imc.toFixed(2).replace('.', ',');
  imcResult.textContent = formattedImc;
}

start();

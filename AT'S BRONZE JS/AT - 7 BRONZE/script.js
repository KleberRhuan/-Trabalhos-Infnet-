function isGreater(alcool, gas) {
  let bestFuel = alcool / gas;
  if (bestFuel < 0.7) {
    alert("O preço do álcool é melhor")
  } else {
    alert("O preço da gasolina é Melhor.")
  }
}

function isNumber(value) {
  if (!Number.isNaN(parseFloat(value)) && value !== null && value !== undefined) {
    return true;
  }
  alert("Por Favor insira um valor Válido");
  return false;
}

let gasValue = Number(prompt("Insira o valor da Gasolina:"));
if (isNumber(gasValue)) {
  let alcoolValue = Number(prompt("Por favor insira o valor do álcool: "))
  if (isNumber(alcoolValue)) {
    isGreater(alcoolValue, gasValue);
  }
}
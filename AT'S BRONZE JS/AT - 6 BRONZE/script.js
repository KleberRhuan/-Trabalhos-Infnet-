function isNumber(value) {
  if (!Number.isNaN(parseFloat(value)) && value !== null && value !== undefined) {
    return true;
  }
  return false;
}

function average(value1, value2, value3) {
  let totalAverage = (value1 + value2 + value3) / 3;
  return totalAverage;
}

function isValid(value) {
  if (value >= 0 && value <= 10) {
    return true;
  }
  alert("Por Favor insira um valor válido de 0 até 10.")
  return false;
}

let nota1 = Number(prompt("Digite a Primeira Nota"));
if (isNumber(nota1) && isValid(nota1)) {
  let nota2 = Number(prompt("Digite a Segunda Nota"));
  if (isNumber(nota2) && isValid(nota2)) {
    let nota3 = Number(prompt("Digite a Terceira Nota"));
    if (isNumber(nota3) && isValid(nota3)) {
      let total = average(nota1, nota2, nota3);
      alert(`A média total é ${total.toFixed(2)}`);
    }
  }
}
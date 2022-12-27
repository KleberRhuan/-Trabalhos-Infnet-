function gasCalc(valueTotal, valueGas){
  let total = valueTotal / valueGas;
    return total.toFixed(2);
}

function isValid(value) {
  if (!Number.isNaN(parseFloat(value)) && value !== null && value !== undefined && value > 0) {
    return true;
  }
  alert("Por Favor insira um valor Válido");
  return false;
}

let gasValue = Number(prompt("Insira o valor da Gasolina: "));
if(isValid(gasValue)){
  let totalValue = Number(prompt("Por favor insira o valor que deseja abastecer: "));
  if(isValid(totalValue)){
    let totalCalc = gasCalc(totalValue, gasValue);
    alert(`A quantidade total de litros abastecidos é: ${totalCalc}L`);
  }
}
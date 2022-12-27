function withdraw(){
  let value = parseInt(document.getElementById("value").value);
  if(isValid(value) && (value % 10 === 0) && Number.isInteger(value)){
    let nota100 = Math.trunc(value / 100);
    value = value - (nota100 * 100);
    let nota50 = Math.trunc(value / 50);
    value = value - (nota50 * 50);
    let nota20 = Math.trunc(value / 20);
    value = value - (nota20 * 20);
    let nota10 = Math.trunc(value / 10);
    value = value - (nota10 * 10);
    
  document.getElementById("result").innerHTML = `Voce Receberá: <br>
  ${nota100} notas de R$ 100. <br>
  ${nota50} notas de R$ 50. <br>
  ${nota20} notas de R$ 20. <br>
  ${nota10} notas de R$ 10.`;
  } else {
    alert("ERRO: o valor inserido deve ser multiplo de 10 e inteiro.")
  }
}

function isValid(x) {
  if (x !== null && x !== undefined && !Number.isNaN(x) && x > 0) {
    return true
  }
  alert("Erro: Insira um Valor válido.")
  return false
}
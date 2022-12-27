function order(){
  let candy = parseInt(document.getElementById("candy").value);
  if(isValid(candy) && Number.isInteger(candy)){
    let bigBox = Math.trunc(candy / 100);
    candy = candy - (bigBox * 100);
    let mediumBox = Math.trunc(candy / 50);
    candy = candy - (mediumBox * 50);
    let smallBox = Math.trunc(candy / 25);
    candy = candy - (smallBox * 25);
    let extra = "";
    if(candy > 0){
      extra = "Necessário Caixa Adicional."
    } 
    
  document.getElementById("result").innerHTML = `Voce Receberá: <br>
  <b>${bigBox}</b> Caixa(s) Grande. <br>
  <b>${mediumBox}</b> Caixa(s) Média. <br>
  <b>${smallBox}</b> Caixa(s) Pequena. <br>
  <b>${extra}</b>`
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
function isValid(value) {
  if (!Number.isNaN(parseInt(value)) && value > 0 && value !== null && value !== undefined) {
    return true;
  }
  alert("Erro: Por favor insira um valor válido");
  return false;
}

const tip = 0.1;

let billValue = Number(prompt("Insira o valor da conta: "));
if (isValid(billValue)) {
  let people = Number(prompt("Insira  a quantidade de pessoas: "));
  if (isValid(people)) {
    let total = billValue + (billValue * tip);
    let clovenTotal = total / parseInt(people);
    alert(`O valor Total é: $ ${total.toFixed(2)}
O valor total por pessoa é: $ ${clovenTotal.toFixed(2)}`)
  }
}
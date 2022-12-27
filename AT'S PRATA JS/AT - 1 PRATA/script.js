function isValid(value){
  if(!Number.isNaN(parseInt(value)) && value > 0 && value !== null && value !== undefined){
    return true;
  }
  alert("Erro: Por favor insira um valor válido");
  return false;
}

let weight = Number(prompt("Insira o Seu Peso: "));
if(isValid(weight)){
  let height = Number(prompt("Insira a sua altura: "));
  if(isValid(height) && height < 3){
    let imc = weight / (Math.pow(height, 2));
    alert(`Seu IMC é: ${imc.toFixed(2)}`)
  } else {
    alert("Erro: Por favor insira um valor válido");
  }
}
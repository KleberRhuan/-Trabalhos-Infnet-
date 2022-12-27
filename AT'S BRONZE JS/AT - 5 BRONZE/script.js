let value1 = Number(prompt("Insira um número inteiro"));
let value2 = Number(prompt("Insira novamente outro número inteiro"));

function isNumber(value){
  if(!Number.isNaN(parseInt(value)) && value !== null && value !== undefined){
    return true;
  }
   return false
}                          

function isGreater(x, y){
  if(x > y){
    alert(`${x} é maior que ${y}`);
  } else if(y > x){
    alert(`${y} é maior que ${x}`);
  } else {
    alert(`${x} é igual a ${y}`);
  }
}

if(isNumber(value1) && isNumber(value2)){
  isGreater(value1, value2);
} else {
  alert("Por favor insira um valor válido.")
}
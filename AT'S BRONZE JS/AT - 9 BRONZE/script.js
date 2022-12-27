function isValid(value){
  if(!Number.isNaN(parseInt(value)) && value > 0 && value !== null && value !== undefined){
    return true;
  }
  alert("Erro: Por favor insira um valor válido");
  return false;
}

function ageVote(value){
  if(value < 16){
    alert("Não pode votar");
  } else if(value >= 18 && value <= 70){
     alert("É obrigado a votar"); 
  } else{
  alert("Tem voto eletivo");
  }
}

let age = Number(prompt("Insira sua idade"));
if(isValid(age)){
  ageVote(age);
}
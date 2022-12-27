function error(){
  alert("Por Favor insira um nome válido");
}

let userName = prompt("Por favor Digite seu Nome");
if(userName !== "" && userName !== null && userName !== undefined){
  if(Number.isNaN(parseInt(userName))){
    alert(`Bem Vindo, ${userName}`)
  }else{
    error();
  }
} else {
  error();
  
}

let userName = prompt("Insira o seu Nome:");
if(userName !== "" && userName !== null && userName !== undefined){
  alert(`Bem Vindo, ${userName}`)
} else {
  alert(`Erro: digite um nome`);
}
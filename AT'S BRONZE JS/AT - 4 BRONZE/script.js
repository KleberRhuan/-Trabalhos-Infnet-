let userNumber = Number(prompt("Insira um Número inteiro: "));
if (userNumber !== null && userNumber !== undefined && !Number.isNaN(parseInt(userNumber))) {
  if (userNumber > 0) {
    alert("O número digitado é positivo.");
  } else if(userNumber === 0) {
    alert("O número digitado é zero.");
  } else if(userNumber < 0) {
    alert("O número digitado é Negativo.");
  }
} else {
  alert("Por favor insira um valor válido");
}
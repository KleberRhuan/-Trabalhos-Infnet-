let userNumber = Number(prompt("Digite Um Número inteiro: "));
if (userNumber !== null && userNumber !== undefined && userNumber !== "" && userNumber > 0 && !Number.isNaN(parseInt(userNumber))) {
  if (userNumber % 2 === 0) {
    alert("O número digitado é par.")
  } else {
    alert("O número digitado é Impar.")
  }
} else {
  alert("Erro: o Valor digitado é inválido.")
}



function imc() {
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;
  let imcValue = parseFloat(weight) / parseFloat(Math.pow(height, 2));
  let x = "string";
  
  if (isValid(imcValue) && parseFloat(height) < 3 && weight < 20000) {
    if (imcValue < 18.5) {
      x = "Magreza";
    } else if (imcValue < 24.9 && imcValue >= 18.5) {
      x = "Normal";
    } else if (imcValue < 29.9 && imcValue >= 25) {
      x = "Sobrepeso"
    } else if (imcValue >= 30 && imcValue < 39.9) {
      x = "Obesidade"
    } else if (imcValue >= 40) {
      x = "Obesidade Grave"
    }
    document.getElementById("result").innerHTML = `O Valor de Seu Imc é: <b>${imcValue.toFixed(2)}</b>, você possui uma classificação de <b>${x}</b>`;
  } else {
    alert("Sua Altura ou Peso é inválido")
  }
}

function isValid(x) {
  if (x !== null && x !== undefined && !Number.isNaN(x) && x > 0) {
    return true
  }
  alert("Erro: Insira um Valor válido.")
  return false
}
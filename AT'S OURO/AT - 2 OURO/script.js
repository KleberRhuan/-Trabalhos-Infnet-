
function calcDebts() {
  const salario = document.getElementById("wage").value;
  const moradia = document.getElementById("moradia").value;
  const transporte = document.getElementById("transporte").value;
  const educacao = document.getElementById("educacao").value;
  const result = document.getElementById("result");
  const acima = [];
  const dentro = [];

  if (isValid(salario) && isNotAbove(salario, moradia, transporte, educacao)) {
    if (isValid(moradia)) {
      let percentualMoradia = (moradia / salario) * 100;
      if (percentualMoradia > 30) {
        acima.push("moradia ");
      } else {
        dentro.push("moradia ")
      }
      if (isValid(transporte)) {
        let percentualTransporte = (transporte / salario) * 100;
        if (percentualTransporte > 10) {
          acima.push("transporte ");
        } else {
          dentro.push("transporte ")
        }
        if (isValid(educacao)) {
          let percentualEducacao = (educacao / salario) * 100;
          if (percentualEducacao > 20) {
            acima.push("educação ")
          } else {
            dentro.push("educação ")
          }
          if (acima !== null && acima[""] !== "" && acima !== undefined) {
            result.innerHTML = `Não estão dentro do orçamento: ${acima}<br/>`;
          }
          result.innerHTML += `Estão dentro do Orçamento: ${dentro} <br/>
            Percentual Moradia = ${percentualMoradia.toFixed(2)}%<br/>
            Percentual Educação = ${percentualEducacao.toFixed(2)}%<br/>
            Percentual Transporte = ${percentualTransporte.toFixed(2)}%<br/>`
        }
      }
    }
  }
}

function isValid(x) {
  if (x !== null && x !== undefined && !Number.isNaN(x) && x > 0) {
    return true
  }
  alert("Erro: Insira um Valor válido.")
  return false
}


function notAbove() {
  const salario = document.getElementById("wage");
  const moradia = document.getElementById("moradia");
  const transporte = document.getElementById("transporte");
  const educacao = document.getElementById("educacao");

  if (parseFloat(moradia.value) > parseFloat(salario.value)) {
    moradia.value = 0;
    alert("Erro: O valor de um gasto não pode ser maior que o sálario.");
  } if (parseFloat(transporte.value) > parseFloat(salario.value)) {
    transporte.value = 0;
    alert("Erro: O valor de um gasto não pode ser maior que o sálario.");
  } if (parseFloat(educacao.value) > parseFloat(salario.value)) {
    educacao.value = 0;
    alert("Erro: O valor de um gasto não pode ser maior que o sálario.");
  }
}

function isNotAbove(salario, moradia, transporte, educacao){
  let total = parseFloat(moradia) + parseFloat(transporte) + parseFloat(educacao);
  if(total > salario){
    alert("ERRO: Os Gastos não podem ser maior que o sálario");
    return false;
  }
  return true;
}
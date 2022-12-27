let userEntry = prompt("Insira a Categoria de sua carteira de motorista (a letra tem que estar maiuscula): ");
switch (userEntry) {
  case 'A':
    alert("Motos e triciclos.");
    break;

  case 'B':
    alert("Carros de passeio");
    break;

  case 'C':
    alert("Veículos de carga acima de 3,5 toneladas.");
    break;

  case 'D':
    alert("Veículos com mais de 8 passageiros.");
    break;

  case 'E':
    alert("Veículos com unidade acoplada acima de 6 toneladas.");
    break;

  default: 
    alert("Por favor insira uma Categoria Válida");
}
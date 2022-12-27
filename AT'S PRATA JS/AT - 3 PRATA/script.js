function leapYear(value) {
  const lenght = Math.ceil(Math.log10(value + 1));
  if (Number.isInteger(value) && lenght <= 4 && value >= 0 && value !== null && value !== undefined) {
    if (value % 4 === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    console.log("Insira um ano válido, deverá conter até 4 caracteres e serem todos númericos")
  }
}


console.log(leapYear(2020));
console.log(leapYear(2022));
console.log(leapYear(1996));
console.log(leapYear(1550));
console.log(leapYear(1212));
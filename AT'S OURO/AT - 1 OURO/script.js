function megaNumbers() {
  const sortNumber = [];

  while (sortNumber.length < 6) {
    let sortedNumber = Math.floor(Math.random() * 60) + 1;
    if (!sortNumber.includes(sortedNumber)) {
      sortNumber.push(sortedNumber);
    }
  }
  sortNumber.sort((a, b) => a - b); 
  return sortNumber;
}
  

function numbers() {
  const number = megaNumbers();
  document.getElementById("result").innerHTML = number.join(", ");
}
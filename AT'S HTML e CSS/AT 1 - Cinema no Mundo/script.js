function telaFilme(){
  location.href = "filmes.html";
}

function hideDiv(x){
  const divTarget = document.getElementById(x);
  if (divTarget.style.display === "none") {
    divTarget.style.display = "block";
  } else {
    divTarget.style.display = "none";
  }
}

function hoverCloseButton(x){
  const imgTarget = document.getElementById(x);
  imgTarget.setAttribute('src', '../img/icon-close-hover.png');
} 

function unHoverCloseButton(x){
  const imgTarget = document.getElementById(x);
  imgTarget.setAttribute('src', '../img/icon-close.png');
} 
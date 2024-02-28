let botão = document.getElementById('botao');

  let imagemEsposende = document.getElementById('imagem-botao')
  imagemEsposende.hidden = true;

  let imageOff = function() { imagemEsposende.hidden = true;}

 let imageOn = function() {imagemEsposende.hidden = false;}

const imageOnAndOff = function(botao) {
botao.onmouseup = imageOff ;
botao.onmousedown = imageOn;
}

imageOnAndOff(botão);


document.getElementById('resposta').onclick = function() {
  let userInput = document.getElementById('year');
  let message = document.getElementById('message');

  if( userInput.value === '1994') {
  message.innerHTML = `${userInput.value} is CORRECT` } else { message.innerHTML = `${userInput.value} isn't the right year`}
}

let imagensDesportoOne = document.getElementById('desportoOne');
let imagensDesportoTwo = document.getElementById('desportoTwo');
let imagensDesportoThree = document.getElementById('desportoThree');

imagensDesportoOne.hidden = true;
imagensDesportoTwo.hidden = true;
imagensDesportoThree.hidden = true;

document.getElementById('desporto-mar').onclick = function() {
  if (imagensDesportoOne.style.display === "none") {
    imagensDesportoOne.style.display = "block";
  } else {
    imagensDesportoOne.style.display = "none";
  }
}

let desportoTerra = document.getElementById('desporto-terra');

desportoTerra.addEventListener("click", function () {
  if( imagensDesportoTwo.style.display === "none" && imagensDesportoThree.style.display === "none"){
    imagensDesportoTwo.style.display = "block"; imagensDesportoThree.style.display = "block"
  }
  else { imagensDesportoTwo.style.display = "none"; imagensDesportoThree.style.display = "none"}
})



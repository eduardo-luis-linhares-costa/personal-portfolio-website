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

//let form = document.getElementById('fname')


document.getElementById('resposta').onclick = function() {
  let userInput = document.getElementById('year');
  let message = document.getElementById('message');

  if( userInput.value === '1994') {
  message.innerHTML = `${userInput.value} is CORRECT` } else { message.innerHTML = `${userInput.value} isn't the right year`}
}
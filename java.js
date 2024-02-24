let botão = document.getElementById('botao');

  //const keyPlay = (event) => {    event.target.style.backgroundColor = 'red' }
  
 // const keyReturn = (event) => {    event.target.style.backgroundColor = ''}
 
  
  //const changeColor = (note) => {note.onmousedown = keyPlay ;  note.onmouseup = keyReturn;  }

  //changeColor(botão);


  let imagemEsposende = document.getElementById('imagem-botao')
  imagemEsposende.hidden = true;

  let imageOff = function() { imagemEsposende.hidden = true;}

 let imageOn = function() {imagemEsposende.hidden = false;}



//botão.onclick = function() {
//imagemEsposende.hidden = false;}

const imageOnAndOff = function(botao) {
botao.onmouseup = imageOff ;
botao.onmousedown = imageOn;
}

imageOnAndOff(botão)
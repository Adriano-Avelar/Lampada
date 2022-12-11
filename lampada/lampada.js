var lamp =document.getElementById('lampada')
 function ligar(){
    if(!estaQuebrada()){
    lamp.src= 'ligada.svg'}
 }
 function desligar(){
    if(!estaQuebrada()){
   lamp.src='desligada.svg'}
 }
  lamp.addEventListener('click', quebra)
  function quebra(){
    lamp.src='quebrada.svg'
  }
  function estaQuebrada(){
   return lamp.src.indexOf('quebrada')>-1
  }
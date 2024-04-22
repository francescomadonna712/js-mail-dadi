//bottone
const button = document.getElementById ('button');

button.addEventListener('click',function() {
    //math random player
const player = Math.floor(Math.random() * 6);

console.log( player);

player1.innerText = (player);

 
  //math random cpu
const cpu = Math.floor(Math.random() * 6);

console.log( cpu);

cpu1.innerText = (cpu);
//dichiarazione risultato
const result = document.getElementById("result");
  //casistiche
    if(player === cpu) {
    result.innerText = ('Pareggio!')
  }else if(player > cpu){
    result.innerText= ('Hai Vinto =)!')
  }else if(player < cpu){
    result.innerText= ('Hai perso =(!')
  }
})
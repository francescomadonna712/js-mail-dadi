
const button = document.getElementById ('button');

button.addEventListener('click',function() {
const player = Math.floor(Math.random() * 6);
console.log( player);

 
  
const cpu = Math.floor(Math.random() * 6);
console.log( cpu);

const result = document.getElementById("result");
  
    if(player === cpu) {
    result.innerText = ('Pareggio!')
  }else if(player > cpu){
    result.innerText= ('Hai Vinto =)!')
  }else if(player < cpu){
    result.innerText= ('Hai perso =(!')
  }
})
//bottone
const button = document.getElementById('button');

button.addEventListener('click', function () {
    //math random player
    const player = Math.floor(Math.random() * 7);

    console.log(player);

    player1.innerText = (player);


    //math random cpu
    const cpu = Math.floor(Math.random() * 7);

    console.log(cpu);

    cpu1.innerText = (cpu);
    //dichiarazione risultato
    const result = document.getElementById("result");
    //casistiche
    if (player === cpu) {
        result.innerText = ('Pareggio!')
    } else if (player > cpu) {
        result.innerText = ('Hai Vinto =)!')
    } else if (player < cpu) {
        result.innerText = ('Hai perso =(!')
    }
})

//email
const emails = ['francesco@gmail.com', 'antonio@gmail.com', 'giuseppe@gmail.com'];

console.log(emails)

//dichato il bottone il check mail e la conferma
const emailBtn = document.getElementById('emailbtn');
const check = document.getElementById('check');
const login = document.getElementById('login');

check.value = ''

emailBtn.addEventListener('click', function () {

    for (let i = 0 ; i < emails.length; i++ ){
        if (check.value == emails[0]){
            login.innerText = ('benvenuto francesco');
        } else if (check.value == emails[1]) {
            login.innerText = ('benvenuto antonio');
        } else if (check.value == emails [2]){
            login.innerText = ("benvenuto giuseppe");
        }else{
            login.innerText = ('chi sei?');
        }
    }

})
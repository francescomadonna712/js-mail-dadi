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

    cpu1.innerHTML = (cpu);
    //dichiarazione risultato
    const result = document.getElementById("result");
    //casistiche
    if (player === cpu) {
        result.innerHTML = ('Pareggio!')
    } else if (player > cpu) {
        result.innerHTML = ('Hai Vinto =)!')
    } else if (player < cpu) {
        result.innerHTML = ('Hai perso =(!')
    }
})

//email
const emails = ['francesco@gmail.com', 'antonio@gmail.com', 'giuseppe@gmail.com'];

console.log(emails)

//dichato il bottone il check mail e la conferma
const emailBtn = document.getElementById('emailBtn');
const check = document.getElementById('check');
const login = document.getElementById('login');

var mail = false;

emailBtn.addEventListener('click', function () {

    for (let i = 0; i < emails.length; i++) {
        const list = emails[i]
        if (list == check.value) {
            mail = true;
        }
    }

    if (mail == true) {
        login.innerHTML = ('benvenuto');

    } else {
        login.innerHTML = ('chi sei?');
    }


})
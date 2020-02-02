function random(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
    
}

let number = +prompt('Введите кол-во примеров');
let minInt = 0;
let maxInt = 100;


for(let i = 0; i < number; i++) {
    let a = random(minInt, maxInt);
    let b = random(minInt, maxInt);
    let answerUser = +prompt(a + '+' + b + '=');
    let answer = a + b == answerUser ? ' [Молодец] ' : ' [Ошибка] ';
    console.log((a + ' + ' + b + ' = ' + (a + b) + ' ! Ваш ответ ' + answerUser + answer ));
}

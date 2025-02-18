//Угадай число
function guessNumber() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log("Загаданное число:", randomNumber);
    let guess;
    let attempts = 0;
    while (true) {
        guess = prompt("Угадай число от 1 до 100 :) (Для выхода введите 'выход' или 0)");
        if (guess === "выход" || guess === "0") {
        alert("Игра завершена. Приходи еще!");
        break;
        }
        guess = parseInt(guess);
        if (isNaN(guess)) {
            alert("Введи число и поймай удачу за хвост!");
            continue;
        }
        attempts++;
        
        if (guess < randomNumber) {
            alert("Не угадал. Загаданное число больше. Не отчаивайся, попробуй еще раз!");
        }
        else if (guess > randomNumber) {
            alert("Не угадал. Загаданное число меньше. Не отчаивайся, попробуй еще раз!");
        }
        else {
            alert(`Ура! Ты супер! Угадал число с ${attempts} раза.`);
            break;
        }
    }
}

//Простая арифметика
function simpleArithmetic() {
    const operators = ['+', '-', '*', '/'];
    const operator = operators[Math.floor(Math.random() * operators.length)]; 

    //Генерация случайных чисел для задачи
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;

    let issue = `${num1} ${operator} ${num2}`;
    let correctResponse;
    switch (operator) {
        case '+':
        correctResponse = num1 + num2;
        break;
        case '-':
        correctResponse = num1 - num2;
        break;
        case '*':
        correctResponse = num1 * num2;
        break;
        case '/':
        if (num2 === 0) num2 = 1;
        correctResponse = num1 / num2;
        break;
    }

//Запрос ответа у пользователя
const userResponse = parseFloat(prompt(`Решите задачу: ${issue}`));

//Проверка ответа на корректность
if (userResponse === correctResponse) {
    alert("Молодец! Ты правильно решил задачу.");
} else {
    alert(`Упс, ошибка. Правильный ответ: ${correctResponse}`);
}
}
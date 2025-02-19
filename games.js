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

//Переверни текст
function reverseText() {
    let userInput = prompt("Введи текст, который хочешь перевернуть:");
    if (userInput === null || userInput === "") {
        alert("Упс! Ты не ввел текст, попробуй снова!");
        return;
    }
        let reversedText = userInput.split('').reverse().join('');

        alert("Перевернутый текст: " + reversedText);
}


//Викторина
function simpleQuiz() {
    const quiz = [
        {
            question: "Какого цвета небо?",
            options: ["1. Красного", "2. Синего", "3. Зеленого"],
            trueAnswer: 2 
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            trueAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            trueAnswer: 2
        }
    ];

    let trueCount = 0; 
    for (let i = 0; i < quiz.length; i++) {
        const currentQuestion = quiz[i];

        const questionText = `${currentQuestion.question}\n${currentQuestion.options.join("\n")}`;

        const userAnswer = parseInt(prompt(questionText), 10);

        if (userAnswer === currentQuestion.trueAnswer) {
            trueCount++; 
        }
    }
    alert(`Количество правильных ответов: ${trueCount} из ${quiz.length}`); 
}


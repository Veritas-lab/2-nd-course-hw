let a = 10;
alert(a);
a = 20;
alert(a);

const release_year_of_the_first_iphone = 2007;
alert(release_year_of_the_first_iphone);

const name_of_the_creator_java_script_language = "Brendan Eich";
alert(name_of_the_creator_java_script_language);

let num1 = 10;
let num2 = 2;
let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;
alert("Сумма: " + sum);
alert("Разность: " + difference);
alert("Произведение: " + product);
alert("Частное: " + quotient);

const result = Math.pow(2, 5);
alert(result);

let a1 = 9;
let b = 2;
let remainder = a1 % b;
alert(remainder);

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

let age = prompt("Сколько вам лет?");
alert("Ваш возраст: " + age);

const user = {
    name: "Иванов Иван Иванович",
    age: 33,
    isAdmin: false
};

let userName;
userName = prompt("Как вас зовут?");
alert("Привет, " + userName + "!");

let password = 'пароль';
let userInput = prompt('Введите пароль');
if (userInput === password) {
    console.log('Пароль введен верно');
} else {
    console.log ('Пароль введен неправильно')
};

let c = 5;
if (c > 0 && c < 10) {
    console.log("Верно");
} 
else {
    console.log("Неверно");
};

let d = 500;
let e = 25;
if (d > 100 || e > 100) {
    console.log('Верно');
}
else {
    console.log('Неверно'); 
};

let f = '2';
let g = '3';
alert(Number(a) + Number(b))

let monthNumber = 12;
if (monthNumber < 1 || monthNumber > 12) {
    console.log("Номер месяца должен быть от 1 до 12.");
} 
else {
 switch (monthNumber) {
        case 12:
        case 1:
        case 2:
            console.log("Зима");
            break;
        case 3:
        case 4:
        case 5:
            console.log("Весна");
            break;
        case 6:
        case 7:
        case 8:
            console.log("Лето");
            break;
        case 9:
        case 10:
        case 11:
            console.log("Осень");
            break;
        default:
            console.log("Некорректный номер месяца.");
    }
}

let userEnter = prompt('Пожалуйста введите любое число');
let number = parseFloat(userEnter);
if (!isNaN(number)) {
    if (number % 2 === 0) {
        alert("Число " + number + " четное");
    } else {
        alert("Число " + number + " нечетное");
    } 
} else {
    alert("Вы ввели не число. Пожалуйста введите любое число");
}

let clientOS = 0;
if (clientOS === 0) {
    console.log("Установите версию приложения для iOS по ссылке");
} else if (clientOS === 1) {
    console.log("Установите версию приложения для Android по ссылке");
} else {
    console.log("Неизвестная операционная система");
}

function checkDeviceCompatibility(os, clientDeviceYear) {
const currentYear = new Date().getFullYear();
if (clientDeviceYear >= 2015 && clientDeviceYear <= currentYear) {
    console.log(`Установите приложение для ${os} по ссылке.`);
} else if (clientDeviceYear < 2015) {
    console.log(`Установите облегченную версию приложения для ${os} по ссылке.`);
} else {
    console.log("Некорректный год выпуска устройства.");
}
}




















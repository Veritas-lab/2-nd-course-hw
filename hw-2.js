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

let a = '2';
let b = '3';
alert(Number(a) + Number(b));

let a = '2';
let b = '3';
alert(+a + +b);









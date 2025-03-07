// Задание №1 
// Напишите функцию, которая возвращает меньшее из двух чисел.
//  function min (a, b) {
//if (a < b) {
//return a;
//} else {
    //return b;
//}
//}
const min = (a, b) => (a < b) ? a : b;
console.log (min (8, 4));
console.log (min (6, 6));

//Задание 2
//Напишите функцию, которая принимает число и возвращает:
//1. строку  'Число четное', если число четное;
//2. строку 'Число нечетное', если число нечетное.

//function isEven(n) {
    //if (n % 2 === 0) {
        //return 'Число четное';
    //} else {
        //return 'Число нечетное';
    //}
//}

const isEven = (n) => (n % 2 === 0) ? 'Число четное' : 'Число нечетное';
console.log (isEven(100));
console.log (isEven(23));

//Задание 3
//Напишите функцию, которая принимает параметром число и выводит в консоль квадрат этого числа.
//Напишите функцию, которая принимает параметром число и возвращает квадрат этого числа значением — 
//так, чтобы потом это значение можно было использовать.

function square(number) {
    console.log(number ** 2);
}
const up = (n) => n ** 2;
square(7);
console.log(up(7));

//Задание 4
//Создайте функцию, которая:
//1. Спрашивает у пользователя, сколько ему лет.
//Если пользователь введет отрицательное число — выведет на экран 
//'Вы ввели неправильное значение'.
//Если пользователь введет число от 0 до 12
 //— выведет на экран 'Привет, друг!'.
//Если пользователь введет число больше или равно 13 — выведет на экран 'Добро пожаловать!'.
function age() {
    let age = +prompt("Сколько вам лет?");
    if (age < 0) {
        alert('Возраст не может быть отрицательным');
    } else if (age >= 0 && age <= 12) {
        alert('Привет, друг!');
    } else if (age >= 13) {
        alert('Добро пожаловать!');
    } else {
        alert('Пожалуйста, введите корректное число.');
    }
}
age();

//Задание 5
//Напишите функцию, которая принимает на вход два числа, а далее следует алгоритму:
//1. Проверяет, являются ли переданные параметры корректными числами.
//2. Если нет — возвращает строку 'Одно или оба значения не являются числом'.
//3. Если оба параметра — числа, то возвращает произведение данных чисел.
function calc(a, b) {
   console.log(isNaN(a));
   console.log(isNaN(b));
   if (isNaN(a) || isNaN(b)) {
    return 'Одно или оба значения не являются числом';
   } else {
    return a * b;
   }
}
console.log (calc(`hello`, 2));

//Задание 6
//Напишите функцию, которая выполняет следующий алгоритм:
//Запрашивает у пользователя число.
//Проверяет, является ли введенное значение числом.
//Если значение не является числом, возвращает строку 'Переданный параметр не является числом'.
//Если значение является числом, возвращает строку 'n в кубе равняется <получившееся значение>', 
//где n — введенное число, а <получившееся значение>— число, возведенное в куб.
//Проверьте работу функции с числами от 0 до 10.

function getNumber() {
    let number = prompt(`Введите число`);
    if (isNaN(number)) {
        return 'Переданный параметр не является числом';
    } else {
        return `${number} в кубе равняется ${number ** 3}`;
    }
}
console.log(getNumber());

//Задание 7
//Создайте два объекта, circle1 и circle2, каждый из которых имеет свойство radius.
//Оба объекта должны иметь:
//1. Метод getArea, который возвращает площадь круга, вычисляемую через радиус.
//2. Метод getPerimeter, который возвращает периметр окружности.

function getArea() {
    return Math.PI * this.radius ** 2;
}

function getPerimeter() {
    return 2 * Math.PI * this.radius;
}

const circle1 = {
    radius: 10,
    methodgetArea: getArea,
    methodgetPerimetr: getPerimeter,
}

const circle2 = {
    radius: 10,
    methodgetArea: getArea,
    methodgetPerimetr: getPerimeter,
}
console.log(circle1.methodgetArea());
console.log(circle2.methodgetArea());
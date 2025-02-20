//Задание 1
//Преобразовать строку 'js' в верхний регистр.

let str = 'js';
str = str.toUpperCase();
console.log(str);

//Задание 2
//Создать функцию, которая принимает массив строк и строку. Функция должна вернуть новый массив, содержащий только те элементы первого массива, 
//которые начинаются со второй строки. Регистр символов не влияет на результат.

function filter(arr, str) {
    const lowerStr = str.toLowerCase();
    return arr.filter(item => item.toLowerCase().startsWith(lowerStr));
}
console.log(filter(['JavaScript', 'Java', 'Python'], 'ja'));

//Задание 3
//Округлить число 32.58884:
//1. До меньшего целого.
//2. До большего целого.
//3. До ближайшего целого.

let num = 32.58884;
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(num));

//Задание 4
//Найти минимальное и максимальное значения из чисел 52, 53, 49, 77, 21, 32 и вывести их в консоль.

console.log(Math.min(52, 53, 49, 77, 21, 32));
console.log(Math.max(52, 53, 49, 77, 21, 32));

//Задание 5
//Создать функцию, которая выводит в консоль случайное число от 1 до 10.

function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}
console.log(getRandomNumber());

//Задание 6
//Написать функцию, которая принимает целое число и возвращает массив случайных чисел от 0 до этого числа. 
//Длина массива должна быть в два раза меньше переданного числа.

function getRandomValue(count) {
    let arr = [];
    for (let i = 0; i < count; i++) {
        arr.push(Math.floor(Math.random() * count));
    }
return arr;
}
console.log(getRandomValue(10));

function getRandomCount(number) {
    return Array.from({length: Math.floor(number / 2)}, () => Math.floor(Math.random() * num));
}
console.log(getRandomCount(10));

//Задание 7
//Создать функцию, которая принимает два целых числа и возвращает случайное число в этом диапазоне.

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(1, 10));

//Задание 8
//Вывести в консоль текущую дату.

console.log(new Date());


//Задание 9
//Создать переменную currentDate, хранящую текущую дату. Вывести дату, которая наступит через 73 дня после текущей.

const currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);

//Задание 10
//Написать функцию, которая принимает дату и возвращает ее в формате:
//1. Дата: [число] [месяц на русском] [год] — это [день недели на русском].
//2. Время: [часы]:[минуты]:[секунды]

function formatDate(date) {
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
    const year = date.getFullYear();
    const day = date.getDate();
    const month = date.getMonth();
    const dayOfWeek = days[date.getDay()];
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return `
    Дата : ${day} ${months[month]} ${year} - это ${dayOfWeek}.
    Время : ${hours}:${minutes}:${seconds}`;
}

console.log(formatDate(new Date()));
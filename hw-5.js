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


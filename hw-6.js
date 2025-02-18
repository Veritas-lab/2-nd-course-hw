//Задание 1
//Дан массив: [1, 5, 4, 10, 0, 3].
//Создайте цикл, который будет выводить элементы массива до тех пор, пока не встретит значение 10. 
//После вывода значения 10в консоль цикл должен прекратить свою работу.

const arr = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i] === 10) {
        break;
    }
}

//Задание 2
//Дан массив: [1, 5, 4, 10, 0, 3]. Найдите индекс значения 4 в этом массиве.

const are = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 4) {
        console.log(i);
        break;
    }
}

//const are = [1, 5, 4, 10, 0, 3]
//console.log(arr.indexOf(4));

//Задание 3
//Дан массив чисел: [1, 3, 5, 10, 20]. С помощью метода join выведите элементы массива через пробел (пустую строку ' ').

const ary = [1, 3, 5, 10, 20];
console.log(ary.join(' '));

//Задание 4
//С помощью вложенных циклов создайте многомерный массив вида: [[1, 1, 1], [1, 1, 1], [1, 1, 1]].

const aru = [];
for (let i = 0; i < 3; i++) {
    const aru2 = [];
    for (let i = 0; i < 3; i++) {
        aru2.push(1);
    }
    aru.push(aru2);
}
console.log(aru);

//Задание 5
//Дан массив: [1, 1, 1]. Добавьте в конец массива значения 2, 2, 2.

const ari = [1, 1, 1];
ari.push(2, 2, 2);
console.log(ari);

//Задание 6
//Дан массив: [9, 8, 7, 'a', 6, 5]. С помощью метода sort отсортируйте массив и удалите букву 'a' из массива. Затем выведите массив.

const sorty = [9, 8, 7, 'a', 6, 5];
sorty.sort();
console.log(sorty);

//Задание 7
//Дан массив: [9, 8, 7, 6, 5]. Попросите пользователя угадать число 
//с помощью метода prompt. Если значение, которое ввел пользователь, есть в массиве,
// выведите в alert «Угадал», в противном случае — «Не угадал».

const aur = [9, 8, 7, 6, 5];
const userNumber = +prompt('Введи число');
if (aur.includes(userNumber)) {
    alert('Угадал!');
} else {
    alert('Не угадал');
}

//Задание 8
//Дана строка: 'abcdef'. Выведите в консоль 'fedcba'.

let line = 'abcdef';
line = line.split('');
console.log(line);
line.reverse();
line = line.join('');
console.log(line);

//Задание 9
//Дан массив: [[1, 2, 3],[4, 5, 6]]. Выведите в консоль массив вида: [1, 2, 3, 4, 5, 6].

const dimens = [[1, 2, 3], [4, 5, 6]];
const newDimens = [];
for (let i = 0; i < dimens.length; i++) {
    newDimens.push(...dimens[i]);
}
console.log(newDimens);

const flat = [[1, 2, 3], [4, 5, 6]];
console.log(flat.flat());

//Задание 10
//1. Создайте массив с произвольными числами (диапазон от 1 до 10).
//2. Переберите его с помощью цикла for.
//3. В каждой итерации выведите в консоль сумму текущего и следующего элементов массива.

const random = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < random.length; i++) {
    if (random[i + 1]) {
    console.log(random[i] + random[i + 1]);
}
}

//Задание 11
//Создайте функцию, которая принимает на вход массив целых чисел, а возвращает массив квадратов этих чисел.

function square(sqr) {
    return sqr.map(item => item ** 2);
}
console.log(square([1, 2, 3]));

//Задание 12
//Создайте функцию, которая принимает на вход массив строк, а возвращает массив длины слов.

function getlength(string) {
    return string.map(item => item.length);
}
console.log(getlength(['hello', 'Veritas']));

//Задание 13
//Создайте функцию, которая принимает на вход массив целых чисел, а возвращает массив, содержащий только отрицательные значения.

function negativeNumbers(array) {
    return array.filter(item => item < 0);
}
console.log(negativeNumbers([1, 2, 3, -4, -5, -6, 7, 8, 9, 10]));

//Задание 14
//Создайте массив, состоящий из 10 значений. Значения массива необходимо сгенерировать с помощью метода Math.random()
//в диапазоне от 0 до 10. В данном массиве найдите все четные значения и добавьте их в новый массив. 
//Результат работы программы необходимо вывести в консоль — это будут два массива: исходный массив и массив с четными значениями.

function sporadicNumber() {
return Math.floor(Math.random() * 10);
}
const sporadic = [];
for (let i = 0; i < 10; i++) {
    sporadic.push(sporadicNumber());
}

console.log(sporadic);

const evenSporadic = [];

for (let i = 0; i < sporadic.length; i++) {
    if (sporadic[i] % 2 === 0) {
        evenSporadic.push(sporadic[i]);
    }
}

console.log(evenSporadic);

//Задание 15
//Создайте массив, состоящий из 6 элементов. Элементы массива необходимо сгенерировать с помощью Math.random() в диапазоне от 1 до 10.
//Требуется найти среднее арифметическое этих цифр, результат программы вывести в консоль.

function randomNumb() {
    return Math.floor(Math.random() * 10);
}

const odd = [];
for (let i = 0; i < 10; i++) {
    odd.push(randomNumb());
}
console.log(odd);
console.log(odd.reduce((a, b) => a + b) / odd.length);
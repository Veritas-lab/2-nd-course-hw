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
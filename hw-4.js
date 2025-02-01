let i = 0;
while (i < 2) {
    console.log("Привет");
    i++;
}

for (let i = 0; i < 2; i++) {
    console.log("Привет");
}

let a = 1;
while (a <= 5) {
    console.log(a);
    a++;
}

let l = 7;
while (l <= 22) {
    console.log(l);
    l++;
}

for (let l = 7; l <= 22; l++) {
    console.log(l);
}

const obj = {
    "Коля" : '200',
    "Вася" : '300',
    "Петя" : '400'
};
for (let name in obj) {
    console.log(`${name} ${obj[name]}`);
}

let n = 1000;
let num = 0;
while (n >= 50) {
    n = n / 2;
    num++;
}
console.log("Результат деления:", n);
console.log("Количество итераций:", num);

const firstFriday = 7;
let reportFriday = firstFriday;
while (reportFriday <= 31) {
    console.log(`Сегодня пятница, ${reportFriday}-е число. Необходимо подготовить отчет.`);
    reportFriday += 7;
}

let k = 100;
let iterations = 0;
while (k >= 0) {
    k-=7;
    iterations++;
}
console.log("Результат после вычитания:", k);
console.log("Количество итераций:", iterations);



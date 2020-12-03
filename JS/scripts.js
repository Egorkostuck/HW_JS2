//Zadacha 1
let name = prompt("Как вас зовут?"),
    age = prompt("Сколько вам лет?"),
    city = prompt("В каком городе вы проживаете?"),
    phone = prompt("Напишите ваш номер телефона:"),
    email = prompt("Введите ваш email:"),
    company = prompt("Напишите организацию в которой вы работаете:");
alert('Меня зовут ' + name + '. Мне ' + age + ' лет.' + ' Я проживаю в городе ' + city + ' и работаю в компании ' + company + '. Мои контактные данные: ' + phone + ', ' + email);

//zadacha 2

let year = 2020 - age;
alert(name + ' родился в ' + year + ' году.');

//zadacha 3

let str = '123103';
if ((+str[0] + +str[1] + +str[2]) == (+str[3] + +str[4] + +str[5])) {
    alert('Да');
}else alert('Нет');

// zadacha 4

let A = prompt('Введите число:');
if (A > 0) {
    alert('Верно');
} else alert('Неверно');

//zadacha 5

let a = 10,
    b = 2;
alert('сумма: ' + (a + b));
alert('разность: ' + (a - b));
alert('произведение: ' + (a * b));
alert('частное: ' + (a / b));
if ((a + b) > 1) {
    alert ('Степень: ' + Math.pow((a + b), 2));
}

// zadacha 6

if ( (a > 2 && a < 11) || (b >= 6 && b < 14) ) {
    alert('Верно');
} else alert('Неверно');

// zadacha 7
let n = prompt('Ведите число от 0 до 59: ');
if (n >= 0 && n < 15) {
    alert('Первая четверть часа');
} else if (n >= 15 && n < 30) {
    alert('Второя четверть часа');
}else if (n >= 30 && n < 45) {
    alert('Третья четверть часа');
}else if (n >= 45 && n < 60) {
    alert('Четвёртая четверть часа');
} else alert('неправильное значение');

//zadacha 8

let day = prompt('Введите число от 1 до 31: ');
if (day >= 1 && day < 11) {
    alert('Первая декада');
} else if (day >= 11 && day < 21) {
    alert('Вторая декада декада');
}else if (day >= 21 && day < 32) {
    alert('Третья декада');
}else alert('Такого числа в месяце не существует!');

//zadacha 9

let sumDay = prompt('Введите колличество дней: ');
let Year = sumDay / 365;
if (Year < 1) {
    alert('Меньше года');
} else alert(Year + 'год(лет)');

let  mounth = sumDay / 31;
if (mounth < 1) {
    alert('Меньше месяца');
}else alert(mounth + 'месяц(ев)');

let week = sumDay / 7;
if (week < 1) {
    alert('Меньше недели');
}else alert(week + 'недель(я)');

let hour = sumDay * 24;
alert(hour + 'часов');

let minutes = sumDay * 24 * 60;
alert(minutes + 'минут');

let seconds = sumDay * 24 * 60 *60;
alert(seconds + 'секунд');

//zadacha 10
let c;
if (sumDay > 0 && sumDay <=31) {
    c=1;
}else if (sumDay > 31 && sumDay <= 59) {
    c=2;
}else if (sumDay > 59 && sumDay <= 90) {
    c=3;
}else if (sumDay > 90 && sumDay <= 120) {
    c=4;
}else if (sumDay > 120 && sumDay <= 151) {
    c=5;
}else if (sumDay > 151 && sumDay <= 181) {
    c=6;
}else if (sumDay > 181 && sumDay <= 212) {
    c=7;
}else if (sumDay > 212 && sumDay <= 243) {
    c=8;
}else if (sumDay > 243 && sumDay <= 273) {
    c=9;
}else if (sumDay > 273 && sumDay <= 304) {
    c=10;
}else if (sumDay > 304 && sumDay <= 334) {
    c=11;
}else if (sumDay > 334 && sumDay <= 365) {
    c=12;
} else console.log('неправильное значение');

switch (c) {
    case 1:
        alert('Зима');
    break;
    case 2:
        alert('зима');
    break;
    case 3:
        alert('Весна');
    break;
    case 4:
        alert('Весна');
    break;
    case 5:
        alert('Весна');
    break;
    case 6:
        alert('лето');
    break;
    case 7:
        alert('лето');
    break;
    case 8:
        alert('лето');
    break;
    case 9:
        alert('осень');
    break;
    case 10:
        alert('осень');
    break;
    case 11:
        alert('осень');
    break;
    case 12:
        alert('зима');
    break;
}
let number
do{
    number = prompt("Введите номер билета:", "123456");
    console.log(number.length)
}while(number.length!=6)
let num1 = parseInt(number[0]) + parseInt(number[1]) + parseInt(number[2])
let num2 = parseInt(number[3]) + parseInt(number[4]) + parseInt(number[5])
let rez = num1 == num2
console.log("num1 = " + num1)
console.log("num2 = " + num2)
console.log("rez = " + rez)
alert("Ваш билет " + (rez?"счастливый":"обычный"));


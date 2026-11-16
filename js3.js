let number
let isEnd = false
let ln = 0
let rn = 100
let N = 50
let wd
let steps = 0
function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


do{
number = parseInt(prompt("Введите число:", "56"));
} while((number > 100) || (number < 0))
    
do{
    wd = ((rn<=ln))?(2):(rand(0,2));
    switch(wd){
        case 0:
            if(confirm("Ваше число > " + N + "?")){
                ln = N+1
            }
            else{
                rn = N
            }
            break
        case 1:
            if(confirm("Ваше число < " + N + "?")){
                rn = N-1
            }
            else{
                ln = N
            }
            break
        case 2:
            if(confirm("Ваше число == " + N + "?")){
                isEnd = true;
            }
            break
        default:
            break
    }
    N = Math.floor((rn-ln)/2) + ln
    steps++
}while(!isEnd)

alert("Хм-м-м\nДумаю ваше число: " + N + "\nЗагаданное: " + number + "\nКоличество шагов: " + steps);


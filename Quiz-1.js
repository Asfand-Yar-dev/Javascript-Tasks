let a = 10;
let b = 3;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

let x = 5;
console.log(++x);
console.log(x++);
console.log(x);
console.log(--x);

let number = prompt('Enter a number:');
if(number%3 || number%7){
    console.log("FizzBuzz");
}
else{
    console.log('Hello World');
}

let day = prompt('Enter day number (1-7):');
switch(day){
    case '1':
        console.log('Monday');
        break;
    case '2':
        console.log('Tuesday');
        break;
    case '3':
        console.log('Wednesday');
        break;
    case '4':
        console.log('Thursday');
        break;
    case '5':
        console.log('Friday');
        break;
    case '6':
        console.log('Saturday');
        break;
    case '7':
        console.log('Sunday');
        break;
    default:
        console.log('Invalid day number');
}

console.log("10" - "5");
console.log("10" + "5");
console.log("10" * "2");
console.log(true + true);
console.log(false - true);

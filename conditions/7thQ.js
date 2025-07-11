let num1 = prompt("Enter first number: ");
let num2 = prompt("Enter 2nd number: ");
let num3 = prompt("Enter 3rd number: ");

if(num1 > num2 && num1 > num3){
    console.log('Num1 is greater than Num2 and Num3');
}
else if(num2 > num1 && num2 > num3){
    console.log('Num2 is greater than Num1 and Num3');
}
else if(num3 > num1 && num3 > num2){    
    console.log('Num3 is greater than Num1 and Num2');
}
else{
    console.log('All are equal');
}
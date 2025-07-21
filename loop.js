for(i=1;i<=10;i++){
    console.log('Number:',i);
}





let sum = 0;
for (i=1;i<=100;i++){
    sum=sum+i;
}
console.log('Sum is:',sum);

for (i=0;i<=50;i++){
    if(i%2===0){
    console.log('Even number:',i);
}
}


let  check= prompt("Enter a number:");
for( i=1;i<=10;i++){
    console.log(check,'*', i,'=',check*i);
}


let num = parseInt(prompt("Enter a number to find factorial:"));
let result = 1;
for (i=1;i<=num;i++){
    result *=i;
}
console.log('factortial is:',result);
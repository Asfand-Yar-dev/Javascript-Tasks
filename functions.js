//function prac-1
function sum(a,b){
     return a+b;
 }
 let a =10;
 let b =20;
 console.log("Your sum is",sum(a,b));

//function prac-2

 let x = myfunction(10,2)

 function myfunction(a,b){
     return a+b;
 }
 console.log('Your number is',x);

//function prac-3
 let name="Asfand";
 function showmessage(){
     console.log('Hello', name);
 }
 showmessage();


//function prac-4
let cname ="Asfand Yar"

function noshow(){
    let cname="Charlie"
    console.log('Hello', cname);
}
noshow();

//function prac-5
function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}
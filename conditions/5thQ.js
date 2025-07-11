let username = prompt("Enter your name: ");
let password = prompt("Enter your password: ");
let confirmPassword = prompt("Confirm your password: ");

if(username===password){
    alert("Login Successfull");
}
else if(username!=password && password!=confirmPassword){
    alert("Login Failed");
}
else{
    alert("Password and confirm password do not match");
}
// // const user = {
// //     name: "Asfand Yar",
// //     age:21,
// //     degree: "CS",
// //     cool: function(){
// //         return (this.name + this.age)
// //     }
// // }
// // console.log(user.cool());


// const user = {
//     name: "Asfand Yar",
//     age: 21,
//     cool: function(){
//         console.log(`${this.name} , Welcome`)
//         console.log(this)
//     }
// }
// // user.cool();
// // user.name = "Ali"
// // user.cool();
// console.log(this);

function cool(){
    console.log(this)
}

cool();
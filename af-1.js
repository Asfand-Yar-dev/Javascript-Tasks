// // // // // // // // // // Task-1 => convert into arrow functions
// // // // // // // // // // function square(n) {
// // // // // // // // // //   return n * n;
// // // // // // // // // // }

// // // // // // // // // let square = (n) =>  (n*n)

// // // // // // // // // console.log(square(2));


// // // // // // // // // let number  = prompt("Enter your number")

// // // // // // // // const check = (number) => (
// // // // // // // //     (number%2==0)? 'Even':
// // // // // // // // 'Odd'
// // // // // // // // )

// // // // // // // // console.log(`Your number is:`+check(10));

// // // // // // // let n = [1,2,3,4,5]

// // // // // // // const check = () => (n.map(n => n + n))

// // // // // // // console.log(check());

// // // // // // let ages = [12, 19, 22, 15, 30];

// // // // // // const crude = () => (ages.filter(ages=> ages>18 ))

// // // // // // console.log(crude());



// // // // // const check = (n) => (n*n)

// // // // // console.log(check(8))


// // // // const checknum = (a,b) => (
// // // //     (a>b) ? a :
// // // //     b
// // // // )

// // // // console.log(checknum(10,20));

// // // const name = (name) => (name.length)

// // // console.log(name('abcdefghijklmnopqrstuvwxyz'));

// // let name =prompt("Enter your name")
// // const name1 = () => ("Hello" +" "+  name)

// // console.log(name1());


// const name1 = (name) => (name.split("").reverse().join(""))
// console.log(name1('Hello'));

const check = (age) => (
    (age>18) ? 'Adult':
    'Minor'
)
console.log(check(17));
// // const person ={first:"Asfand", last:"Yar", age:22, hobbies:["music","sports"], address:{street:"123 main st", city:"lahore"}};

// // console.log(person.age);


// const person = {
//     firstName: "John",
//     lastName : "Doe",
//     id       : 5566,
//     fullName : function() {
//       return this.firstName + " " + this.lastName;
//     }
//   };

//   console.log(person.fullName()); // Outputs "John Doe"




const students = [
    { name: "Asfand Yar", age: 22, institution: "BUITEMS", department: "Computer Science", isEnrolled: true },
    { name: "Ali Khan", age: 21, institution: "NUST", department: "Software Engineering", isEnrolled: true },
    { name: "Sara Baloch", age: 23, institution: "FAST", department: "Computer Science", isEnrolled: false },
    { name: "Ahmed Raza", age: 20, institution: "BUITEMS", department: "IT", isEnrolled: true },
    { name: "Zahra Sheikh", age: 22, institution: "IBA", department: "Computer Science", isEnrolled: true },
    { name: "Talha Asim", age: 24, institution: "COMSATS", department: "Data Science", isEnrolled: false },
    { name: "Laiba Noor", age: 21, institution: "UET", department: "AI", isEnrolled: true },
    { name: "Maaz Kasi", age: 22, institution: "BUITEMS", department: "Computer Science", isEnrolled: true },
    { name: "Kamran Shah", age: 23, institution: "NUML", department: "Cyber Security", isEnrolled: false },
    { name: "Zainab Fatima", age: 20, institution: "BUITEMS", department: "Computer Science", isEnrolled: true }
  ];
  
// for(i=0;i<students.length;i++){
//     console.log('Student',students[i].name,'| Age:',students[i].age);
// }

for(let i=0;i<students.length;i++){
    students[i].gpa = 3.5;
    if(students[i].department === "Computer Science"){
        console.log('Student:',students[i].name, '| Department:', students[i].department);
}}

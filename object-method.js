let f1 = "Asfand"
let l1 = "Yar"

const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function() {
    return (f1 + " " + l1).toUpperCase();
  }
};
console.log(person.fullName());


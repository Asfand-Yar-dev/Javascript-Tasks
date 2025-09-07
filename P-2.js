function checkPassOrFail(marks) {
    if (marks >= 40) {
        return "Pass";
    } else {
        return "Fail";
    }
}
console.log(checkPassOrFail(40));  // Output: Pass
console.log(checkPassOrFail(35));  // Output: Fail

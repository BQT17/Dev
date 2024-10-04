var userName = 'Bao';
let userAge = 17;
const userID = "N01707";
userName = "Brad";
userAge = 18;
let score = 95.5;
let courseName = "JavaScript Basics";
let isEnrolled = true;
let grades = [90, 95, 88, 92];
let student = {name: userName, age: userAge, course: courseName};
console.log("Add userAge and score: ", userAge + score);
console.log("Subtract userAge from score: ", score - userAge);
console.log("Multiply userAge by 2: ", userAge * 2);
console.log("Divide score by userAge: ", score / userAge);
console.log("userAge == 20: ", userAge == 20);
console.log("userAge === 20: ", userAge === 20);
console.log("score < 100: ", score < 100);
console.log("score >= 90: ", score >= 90);
console.log("isEnrolled: ", isEnrolled === true);

if (userAge > 18) {
    console.log("User is an adult.");
} else {
    console.log("User is not an adult.");
}

switch (courseName) {
    case "JavaScript Basics":
        console.log("Welcome to JavaScript Basics!");
        break;
    case "Advanced JavaScript":
        console.log("Welcome to Advanced JavaScript!");
        break;
    default:
        console.log("Course not recognized.");
}
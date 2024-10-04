let x = -5;
if (x > 0) {
    console.log(`${x} is positive.`);
} else if (x < 0) {
    console.log(`${x} is negative.`);
} else {
    console.log(`${x} is zero.`);
}
let grade = 'A';
switch (grade) {
    case 'A':
        console.log('Excellent');
        break;
    case 'B':
        console.log('Good');
        break;
    case 'C':
        console.log('Average');
        break;
    case 'D':
        console.log('Below Average');
        break;
    case 'F':
        console.log('Fail');
        break;
    default:
        console.log('Invalid grade');
}
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}
let j = 1;
do {
    console.log(j * 3);
    j++;
} while (j <= 5);
let colors = ['red', 'green', 'blue', 'yellow'];
for (let color of colors) {
    console.log(color);
}
let person = {
    name: 'Bao',
    age: 17,
    city: 'Toronto'
};
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
let grades = ['A', 'B', 'C', 'D', 'F'];
for (let grade of grades) {
    console.log(grade);
}
for (let k = 1; k <= 10; k++) {
    if (k === 5) {
        break;
    }
    console.log(k);
}
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let num of numbers) {
    if (num % 2 !== 0) {
        continue;
    }
    console.log(num);
}
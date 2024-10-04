let colors = new Array('Red', 'Green', 'Blue');
let sizes = ['Small', 'Medium', 'Large'];
let numbers = Array.of(5, 12, 18);
colors.push('Yellow');
console.log('Colors after push:', colors);
sizes.pop();
console.log('Sizes after pop:', sizes);
console.log('Second element in numbers:', numbers[1]);
let filteredNumbers = numbers.filter(number => number > 10);
console.log('Filtered numbers greater than 10:', filteredNumbers);
let squaredNumbers = numbers.map(number => number * number);
console.log('Squared numbers:', squaredNumbers);
console.log('Colors array elements:');
colors.forEach(color => console.log(color));
console.log('Numbers array using for...of:');
for (let number of numbers) {
    console.log(number);
}
console.log('Sizes array using traditional for loop:');
for (let i = 0; i < sizes.length; i++) {
    console.log(sizes[i]);
}
console.log('Colors array index-element pairs using entries():');
for (let [index, color] of colors.entries()) {
    console.log(index, color);
}
const firstName = `Ren`;
const lastName = `ri`;
const country = `Indonesia`;
const city = `Jakarta`;
const age = 21;
const isMarried = false;

console.log(`My name is ${firstName}${lastName}. I live in ${city}, ${country}. I am ${age} years old. I am ${isMarried ? `Married` : `Not Married`}.`)

console.log(10 == '10');

console.log(parseInt('9.8') == 10);
console.log(4 > 3);   // Output: true
console.log(4 >= 3);  // Output: true
console.log(4 < 3);   // Output: false
console.log(4 <= 3);  // Output: false
console.log(4 == 4);  // Output: true
console.log(4 === 4); // Output: true
console.log(4 != 4);  // Output: false
console.log(4 !== 4); // Output: false
console.log(4 != '4'); // Output: false
console.log(4 == '4'); // Output: true
console.log(4 === '4'); // Output: false

console.log('python'.length == 'jargon'.length);
console.log(4 > 3 && 10 < 12);        // Output: true
console.log(4 > 3 && 10 > 12);        // Output: false
console.log(4 > 3 || 10 < 12);        // Output: true
console.log(4 > 3 || 10 > 12);        // Output: true
console.log(!(4 > 3));                // Output: false
console.log(!(4 < 3));                // Output: true
console.log(!(false));                // Output: true
console.log(!(4 > 3 && 10 < 12));     // Output: false
console.log(!(4 > 3 && 10 > 12));     // Output: true
console.log(!(4 === '4'));            // Output: true

const python = `python`;
const jargon = `jargon`;

if (python.includes('on')) {
    console.log('yes');
} else {
    console.log('no');
}

if (jargon.includes('on')) {
    console.log('yes');
} else {
    console.log('no');
}

console.log(`Today I Will Breakfast in ${new Date().getHours()} hours.`);
console.log(`Today Is ${new Date().getFullYear()}.`);
console.log(`Today Is ${new Date().getMonth()}.`);
console.log(`Today Is ${new Date().getDate()}.`);
console.log(`Today Is ${new Date().getDay()}.`);
console.log(`Today Is ${new Date().getHours()}.`);
console.log(`Today Is ${new Date().getMinutes()}.`);

const currentDate = new Date();
const secondsElapsed = Math.floor(currentDate.getTime() / 1000); // Convert milliseconds to seconds

console.log("Seconds elapsed since January 1, 1970:", secondsElapsed);

// Excercises II 



// const a = parseFloat(prompt('Enter Side a')); // Convert input to a number
// const b = parseFloat(prompt('Enter Side b')); // Convert input to a number
// const c = parseFloat(prompt('Enter Side c')); // Convert input to a number

// function perimeter(a, b, c) {
//     return a + b + c; // Return the perimeter
// }

// const result = perimeter(a, b, c); // Calculate the perimeter
// alert("The perimeter of the triangle is: " + result); // Display the result




// Prompting the user to input the radius
var radius = parseFloat(prompt("Enter the radius of the circle:"));

// Calculating the area and circumference
var pi = 3.14;
var area = pi * radius * radius;
var circumference = 2 * pi * radius;

// Displaying the results
console.log("For a circle with radius " + radius + ":");
console.log("Area = " + area.toFixed(2));
console.log("Circumference = " + circumference.toFixed(2));

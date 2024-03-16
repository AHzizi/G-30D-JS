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


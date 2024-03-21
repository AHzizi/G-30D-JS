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
// var radius = parseFloat(prompt("Enter the radius of the circle:"));

// Calculating the area and circumference
// var pi = 3.14;
// var area = pi * radius * radius;
// var circumference = 2 * pi * radius;

// // Displaying the results
// console.log("For a circle with radius " + radius + ":");
// console.log("Area = " + area.toFixed(2));
// console.log("Circumference = " + circumference.toFixed(2));


// let base = parseFloat(prompt('Enter Base')); // Convert input to a number
// let height = parseFloat(prompt('Enter Height')); // Convert input to a number
// let result = base * height;

// alert(result)

// const calculateArea = () => {
//     let base = parseFloat(prompt('Enter Base')); // Convert input to a number
//     let height = parseFloat(prompt('Enter Height')); // Convert input to a number
//     let result = base * height;
//     alert(result);
// }

// calculateArea();

// const calculateTriangle = () => {
//     let sideA = parseFloat(prompt('Enter Side A')); // Convert input to a number
//     let sideB = parseFloat(prompt('Enter Side B')); // Convert input to a number
//     let sideC = parseFloat(prompt('Enter Side C')); // Convert input to a number
//     let result = sideA + sideB + sideC;
//     alert(`The Result Is ${result}`);
// }

// calculateTriangle()

// const circulateRectangle = () => {
//     let length = parseFloat(prompt('Enter Length')); // Convert input to a number
//     let width = parseFloat(prompt('Enter Width')); // Convert input to a number
//     let result1 = length * width;
//     let result2 = 2 * (length + width);
        
//     alert(`The area of Rectangle Is ${result1}`);
//     alert(`The primeter of Rectangle Is ${result2}`);
// }

// circulateRectangle()

// const radiusCalculateCircle = () => {
//     let radius = parseFloat(prompt('Enter Radius')); // Convert input to a number
//     let result = 2 * radius;
//     let result2 = 2 * Math.PI * radius;
//     alert(`The Circumference Of Circle Is ${result}`);
//     alert(`The Area Of Circle Is ${Math.floor(result2)}`);
// }

// radiusCalculateCircle()

// const calculateSlope = () => {
//     let x1 = parseFloat(prompt('Enter x1')); // Convert input to a number
//     let x2 = parseFloat(prompt('Enter x2')); // Convert input to a number
//     let y1 = parseFloat(prompt('Enter y1')); // Convert input to a number
//     let y2 = parseFloat(prompt('Enter y2')); // Convert input to a number
//     let result = (y2 - y1) / (x2 - x1);
//     alert(`The Slope Is ${result}`);
// }

// calculateSlope()

// const circulatePay = () => {
//     let inputHours = parseFloat(prompt('Enter Hours Worked')); // Convert input to a number
//     let inputRate = parseFloat(prompt('Enter Rate')); // Convert input to a number
//     let result = inputHours * inputRate;
//     alert(`The Pay Is ${result}`);
// }
// circulatePay()

// let inputUser = prompt("Enter Your Name");

// if (inputUser.length >= 7) {
//     alert(`your name is long else`);
// } else {
//     alert(`your name is short`);
// }

// let firstName1 = prompt("Enter Your First Name");
// let lastName1 = prompt("Enter Your Last Name");

// if (firstName1.length >= lastName1.length) {
//     alert(`Nama Depan Lu Lebih Panjang drpd Nama belakang Lu`);
// } else {
//     alert(`Nama Belakang Lu Lebih Panjang Drpd Nama Belakang Lu`);
// }

// let myAge = 250;
// let yourAge = 12;

// if (myAge > yourAge) {
//     alert(`I am ${myAge - yourAge} years older than you`);
// } else {
//     alert(`I am ${yourAge - myAge} years younger than you`);
// }

// const circulateAge = () => {
//     let userInputBirthYear = parseFloat(prompt('Enter Your Birth Year')); // Convert input to a number
//     let result = 2024 - userInputBirthYear;
//     if (result >= 25) {
//         alert(`You Are ${result}, You are old to enough to drive`);
//     } else {
//         alert(`You Are ${result} You will be allowed to drive after ${25 - result} years`);
//     }

// }

// circulateAge()

// function ageInSeconds() {
//     // Prompt user to enter their birthdate
//     const birthdate = prompt("Enter your birthdate (YYYY-MM-DD):");
    
//     // Get the current date
//     const currentDate = new Date();
    
//     // Convert birthdate string to Date object
//     const birthDateObj = new Date(birthdate);
    
//     // Check if the birthdate is valid
//     if (isNaN(birthDateObj)) {
//         alert("Invalid birthdate format. Please enter in YYYY-MM-DD format.");
//         return;
//     }
    
//     // Calculate the difference in milliseconds
//     const differenceInMillis = currentDate - birthDateObj;
    
//     // Convert milliseconds to seconds
//     const ageInSeconds = Math.floor(differenceInMillis / 1000);
    
//     return ageInSeconds;
// }

// // Call the function and display the result
// const age1 = ageInSeconds();
// if (age1 !== undefined) {
//     alert("Your age in seconds: " + age1);
// }


//Exercises III

const todayIs = () => {
    const now = new Date();

    // Format the time components (hours, minutes, seconds)
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    // Format the date components (year, month, day)
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
    const day = now.getDate().toString().padStart(2, '0');

    // Create the formatted date and time string
    const dateTimeString = `${year}-${month}-${day} | ${hours}:${minutes}:${seconds}`;

    // Update the clock element with the formatted date and time
    document.getElementById('todayIs').textContent = dateTimeString;
}

todayIs()

setInterval(todayIs, 1000);


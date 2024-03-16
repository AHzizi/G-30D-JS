let challange = `30 Days Of JavaScript`;
console.log(challange);

console.log(challange.length);

console.log(challange.toLocaleUpperCase());

console.log(challange.toLocaleLowerCase());

console.log(challange.substring(8, 2));

console.log(challange.includes('30'));

console.log(challange.split(''));

const companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
const companiesArray = companiesString.split(', ');

console.log(companiesArray);

console.log(challange.replace('JavaScript', 'Python'));

console.log(challange.charAt(15));

console.log(challange.charCodeAt('J'));

console.log(challange.indexOf('a'));

console.log(challange.lastIndexOf('a'));

console.log(challange.startsWith('30'));

console.log(challange.endsWith('JavaScript'));

console.log(challange.match('a'));

let newStr = '30 Days Of';
let oldStr = 'JavaScript';

console.log(newStr + " " + oldStr);

console.log(challange.repeat(10));


// Excercise Level 2

console.log(`The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`)

console.log(`"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`)

let angka = '10';
let angkaa = 10;

const jika = () => {
  let hasil;
  // Use === for comparison to check if the values are exactly equal
  if (angkaa === parseInt(angka)) {
    hasil = angkaa;
  }
  return hasil;
}

console.log(jika()); // Output: 10

if (parseFloat('9.8') == 10 ) {
  console,log(10);
};

let string = 'python';
let string2 = 'jargon';

const check = (kata) => {
  if (kata.includes('on')) {
    return 'yes';
  } else {
    return 'no';
  }
};

console.log(check(string)); // Output: yes
console.log(check(string2)); // Output: yes

let soal = 'I hope this course is not full of jargon';

console.log(soal.includes('jargon')); // Output: yes

let number = Math.floor(Math.random() *101); // Output:
console.log(number); // Output:

// Generate a random number between 50 and 100 inclusively
const randomNumber = Math.floor(Math.random() * (100 - 50 + 1)) + 50;

console.log(randomNumber);


// Generate a random number between 50 and 100 inclusively
const randomNumber2 = Math.floor(Math.random() * (200 - 30 + 1)) + 30;

console.log(randomNumber2);

const randomNumber3 = Math.floor(Math.random() *226);

console.log(randomNumber3);

const str = 'JavaScript';
const randomIndex = Math.floor(Math.random() * str.length);
const randomCharacter = str[randomIndex];

console.log(`Random character at index ${randomIndex}: ${randomCharacter}`);

// Define the number of rows for the pattern
const rows = 10;

// Outer loop for rows
for (let i = 1; i <= rows; i++) {
    let row = '';

    // Inner loop for columns
    for (let j = 1; j <= 10; j++) {
        if (j === 1) {
            row += `${i} `;
        } else {
            row += `${Math.pow(i, j)} `;
        }
    }

    // Print each row
    console.log(row);
}

let kataKata = 'You cannot end a sentence with because because because is a conjunction';
let searchStr = 'because because because';
console.log(kataKata.indexOf(searchStr));

const sentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
const wordToCount = 'love';

// Split the sentence into an array of words
const words = sentence.split(' ');

// Initialize a counter for the number of occurrences
let count = 0;

// Iterate over each word in the array
for (let i = 0; i < words.length; i++) {
    // Convert the word to lowercase for case-insensitive comparison
    const word = words[i].toLowerCase();

    // Check if the word matches the word to count
    if (word === wordToCount) {
        count++;
    }
}

console.log(`The word "${wordToCount}" appears ${count} times in the sentence.`);


let banyakStr = `You cannot end a sentence with because because because is a conjunction`;

let cari = /because/gi

console.log(banyakStr.match(cari))

const kataKati = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';

// Clean the text by removing special characters and symbols
const cleanedText = kataKati.replace(/[^\w\s]/g, '');

// Split the cleaned text into an array of words
const wir = cleanedText.split(/\s+/);

// Count the frequency of each word
const wordFrequency = {};
words.forEach(word => {
    word = word.toLowerCase();
    wordFrequency[word] = (wordFrequency[word] || 0) + 1;
});

// Find the word with the highest frequency
let mostFrequentWord = '';
let maxFrequency = 0;
for (const word in wordFrequency) {
    if (wordFrequency[word] > maxFrequency) {
        mostFrequentWord = word;
        maxFrequency = wordFrequency[word];
    }
}

console.log("Most frequent word:", mostFrequentWord);
console.log("Frequency:", maxFrequency);


const text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';

// Extract numbers using regular expression
const numbers = text.match(/\d+/g);

// Convert the numbers to integers and calculate total annual income
let totalIncome = 0;
if (numbers) {
    const salaryPerMonth = parseInt(numbers[0]);
    const annualBonus = parseInt(numbers[1]);
    const onlineCoursesPerMonth = parseInt(numbers[2]);
    
    totalIncome = (salaryPerMonth * 12) + annualBonus + (onlineCoursesPerMonth * 12);
}

console.log("Total annual income:", totalIncome, "euro");


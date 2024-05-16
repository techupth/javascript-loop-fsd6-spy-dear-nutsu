// Exercise #5: Concatenate the Alphabets
// let companyName = "TechUp";

// for (let letter of companyName) {
//     console.log(`Number ${letter + 1} character is ${companyName[letter]}`)
// }

let companyName = 'TechUp';

// Start coding here
for (let letter in companyName) {
  console.log(`Number ${+letter + 1} character is ${companyName[letter]}`);
}
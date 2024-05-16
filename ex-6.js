// Exercise #6: Reverse the String
let companyName = 'TechUp Thailand';
let reversedCompanyName = '';

// Start coding here

// console.log(companyName.length)

for (let i = 0; i < companyName.length; i++) {
  reversedCompanyName = companyName[i] + reversedCompanyName;
}

// for (let i = 0; i < companyName.length; i++) {
//   reversedCompanyName =  reversedCompanyName + companyName[i] ;
// }

// for (let i = companyName.length - 1; i >= 0; i--) {
//   reversedCompanyName += companyName[i];
// }

// for (let char of companyName) {
//   reversedCompanyName = char + reversedCompanyName;
// }

// for (let index in companyName) {
//   reversedCompanyName = companyName[index] + reversedCompanyName;
// }

console.log(reversedCompanyName);

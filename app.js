const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// simple for loop
/*
  console.log('========== Simple for loop start ==========');
  for (let i = 0; i < companies.length; i++) {
    console.log(companies[i]);
  }
  console.log('========== Simple for loop end ==========');
*/


// using forEach
/*
  console.log('========== forEach start ==========');
  companies.forEach(company => console.log(company));

  // lets print company name using forEach
  companies.forEach(company => console.log(company.name));
  console.log('========== forEach end ==========');
*/
// let's find people who's age is grater than 21;

// create a empaty array so that we can store all adult people who can drink
// let canDrink = [];
// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] >= 21) {
//     canDrink.push(ages[i]);
//   }
// }

// const canDrink = ages.filter(age => {
//   if (age >= 21) {
//     return true
//   }
// })

const canDrink = ages.filter(age => age >= 21)
console.log(canDrink);


// Filter Retail company from companies list
/*
  // lets do this in ES5
  const retailCompanies = companies.filter(function (company) {
    if (company.category === 'Retail') {
      return true;
    }
  });
*/

/*
   // lets do this in ES6
   const retailCompanies = companies.filter(company => company.category === 'Retail');
*/

// Gets 80's companies
const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));

// Get compaines that lasted 10 years or more
const lastedTenYears = companies.filter(company => (company.end - company.start >= 10));


// Now lets move on Map
// Create array of company name
//const companyName = companies.map(company => company.name);
const companyName = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);

// Now lets move on Sort

// using ES5
/*
  const sortedCompanies = companies.sort(function (c1, c2) {
    if (c1.start > c2.start) {
      return 1;
    } else {
      return -1
    }
  });
*/
// using ES6
const sortedCompanies = companies.sort((a, b) => a.start > b.start ? 1 : -1);

// Sort ages by ascending order
const ascendingAges = ages.sort((a, b) => a - b);

// Sort ages by descending order
const descendingAges = ages.sort((a, b) => b - a);


// Now it's time to move on reduce

// Let's get sum of ages

// old way in javascript
/*
  let ageSum = 0;
  for (let i = 0; i < ages.length; i++) {
    ageSum += ages[1]
  }
*/

// Using ES5
/*
  const ageSum = ages.reduce(function (total, age) {
    return total + age;
  });
*/
// Using ES6
/*
  const ageSum = ages.reduce((total, age) => total + age, 0);
*/

// Now lets get total years for all companies
// ES 5
/*
  const totalYears = companies.reduce(function (total, company) {
    return total + (company.end - company.start);
  }, 0)
*/

// ES 6
const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);

console.log(totalYears);
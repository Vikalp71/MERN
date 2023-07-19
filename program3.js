// check if a year is a leap year

function isLeapYear(year) {
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
      console.log(year + " is a leap year.");
    } else {
      console.log(year + " is not a leap year.");
    }
  }
  
  // Example usage
  isLeapYear(2020); 
  isLeapYear(2021); 
  
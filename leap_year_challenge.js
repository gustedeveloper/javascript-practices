function isLeap(year) {
    
    let year_MODULO_4 = year % 4;
    let year_MODULO_100 = year % 100;
    let year_MODULO_400 = year % 400;

       if(year_MODULO_4 === 0 && year_MODULO_100 !== 0) {
        console.log("Leap year.");
        } else if(year_MODULO_100 === 0 && year_MODULO_400 === 0) {
        console.log("Leap year.");
       } else {
        console.log("Not leap year.");
       }
    
    }

isLeap(2009);

function isLeap(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log("Leap year.");
    } else {
        console.log("Not leap year.");
    }
}

isLeap(2000);

function isLeap(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true; // Es un año bisiesto
    } else {
        return false; // No es un año bisiesto
    }
}

console.log(isLeap(2021));

/* A year is a leap year if it is evenly divisible by 4 ;
except if that year is also evenly divisible by 100;
unless that year is also evenly divisible by 400.

e.g. Is the year 2000 a leap year?:

2000 ÷ 4 = 500 (Leap)
2000 ÷ 100 = 20 (Not Leap)
2000 ÷ 400 = 5 (Leap!)


So the year 2000 is a leap year.

But the year 2100 is not a leap year because:

2100 ÷ 4 = 525 (Leap)
2100 ÷ 100 = 21 (Not Leap)
2100 ÷ 400 = 5.25 (Not Leap)*/
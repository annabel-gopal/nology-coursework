// Write a function that takes a number and returns true if it is a positive number 
// and false if it is a negative number.
// isNumberPositive(-1);  returns false
// isNumberPositive(10); returns true

const isPositiveNumber = (num) => {
    if (num > 0) {
        return true
    } else if (num < 0) {
        return false
    } else {
        return "enter a number above or below 0"
    }
}

console.log(isPositiveNumber(2))
console.log(isPositiveNumber(0))
console.log(isPositiveNumber(-1))

// Write a function that takes a number of days and converts it into an age.
// convertDaysToAge(3650);  returns 10
// convertDaysToAge(6570);  returns 18

const convertDaysToAge = (num) => {
    years = num/365
    return Math.floor(years)
}

console.log(convertDaysToAge(3650));
console.log(convertDaysToAge(6570))
console.log(convertDaysToAge(8580))


// Write a function that takes three numbers and returns the largest of the three 
// numbers.
// getLargestNumber(2 ,1, 4);  returns 4
// getLargestNumber(6,2,3);  returns 6

const getLargestNumber = (x, y, z) => {
   if (x > y && x > z) {
    return x
   } else if (y > x && y > z) {
    return y
} else if (z > x && z > y) {
    return z
} else {
    return "2 or more numbers are the same"
}
}

console.log(getLargestNumber(2 ,1, 4));
console.log(getLargestNumber(6,2,3))

// Write a function that takes an array of names and returns the last name from 
// the array of names.
// getLastName([”Charlie”, “Rob”, “Andy”]);  returns “Andy”
// getLastName(["Ash","Stu"]);  returns "Stu"

const getLastName = (array) => {
    return array[array.length-1]
}

console.log(getLastName(["Charlie", "Rob", "Andy"]));
console.log(getLastName(["Ash","Stu"]));

// Write a function that takes an array of numbers and returns true if all of 
// the numbers are positive. It should return false if there are one or more 
// negative numbers in the array.
// allNumbersPositive([2,4,5]);  returns true
// allNumbersPositive([-5,4,6]);  returns false

const allNumbersPositive = (array) => {
    return array.every(number => number > 0)
}

console.log(allNumbersPositive([2,4,5]));
console.log(allNumbersPositive([-5,4,6]));

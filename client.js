console.log("Hello World!");

// 1. Reverse a string 

let originalString = "Whiteboard Questions";

function reverseString(){
    let splitString = originalString.split("");
    let reverseArray = splitString.reverse(); 
    let joinArray = reverseArray.join("");
    return joinArray
}
reverseString();
console.log(reverseString());



// 2. Conditionals and Mod Operator Fizz-Buzz

function fizzBuzz(number) {
 
    if(number % 15 === 0) {
        return "FizzBuzz";
    } else if (number % 3 === 0) {
        return "Fizz";
    } else if (number % 5 === 0) {
        return "Buzz";
    } else {
        return number;
    } 
}

console.log(fizzBuzz(45)); //'fizzBuzz'
console.log(fizzBuzz(10));  //'buzz'
console.log(fizzBuzz(9));   //'fizz'
console.log(fizzBuzz(7));  //'7'
console.log(fizzBuzz(15));  //'fizzBuzz'

// 3. Leap Year

function leapYear(year) {
    if (year % 400 === 0) {
        return true;
    } else if (year % 100 === 0) {
        return false;
    } else if (year % 4 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log('leap year', leapYear(2024));
console.log('leap year', leapYear(2023));
console.log('leap year', leapYear(1993));
console.log('leap year', leapYear(2020));



// 4. Is this a BLT????????????????????


let BLT = ["bread", "bacon", "lettuce", "tomato", "bread"]
function isItBLT() {
    if (BLT[0] === "bread" && BLT[BLT.length - 1] === "bread") {
        let bacon = BLT.includes("bacon");
        let lettuce = BLT.includes("lettuce");
        let tomato = BLT.includes("tomato");
        if (bacon == true && lettuce == true && tomato == true) {
            return true;
        } else {
            return false;
        }
    }
}
console.log(isItBLT());



// function isBLT(){
//     const hasBreadOnBothSides = (
//         BLT[0] === "bread" &&
//         BLT[BLT.length - 1] === "bread"
//     )

//     let hasBacon = false;
//     let hasLettuce = false;
//     let hasTomato = false;

//     for (let item of BLT){
//         if (item === "bacon"){
//             hasBacon = true;
//         }else if (item === "lettuce"){
//             hasLettuce = true;
//         }else if (item === "tomato"){
//             hasTomato = true;
//         }
//     }
//     return (
//         hasBreadOnBothSides &&
//         hasBacon &&
//         hasLettuce &&
//         hasTomato
//     )
// }
// console.log(isBLT());
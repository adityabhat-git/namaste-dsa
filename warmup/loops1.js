// #region For Loops

// Loop from 0 to 9, incrementing by 1 each iteration
for(let i = 0; i < 10; i++) {
    console.log("Hello World " + i);
}

// Loop through even numbers from 2 to 8, incrementing by 2
for(let i = 2 ; i<10; i+=2) {
    console.log("Hello World " + i);
}

// Reverse loop: count down from 5 to 1
for(let i = 5 ; i > 0; i--) {
    console.log("Hello World " + i);
}

/** Functions inside loop */
function sayHello(i) {
    console.log("Hello World " + i);
}

for(let i = 0; i < 5; i++) {
    sayHello(i);
}

/** Squares of numbers from 1 to 25 */
function printSquares(n){
    console.log(`Square of ${n} is ${n*n}`);
}

for(let i = 1 ;i<=25;i++){
    printSquares(i);
}


/** Loops and arrays */
let arr = [10,2,6,8,5,80];
for(let i = 0; i< arr.length; i++) {
    console.log(arr[i]);
}


/** Print all even numbers from an array */
let arr = [10,2,7,8,5,80];
for(let i = 0; i< arr.length; i++) {
    if(arr[i] % 2 === 0) {
        console.log(arr[i]);
    }
}

/**
 * infinite loop
 * for(let i = 0; i >= 0; i++) {
 *     console.log("Hello World " + i);
 * }
 */

// #endregion


// #region While Loops
// Simple while loop: execute while i is less than 10
let i = 0;
while(i < 10) {
    console.log("Hello World " + i);
    i++;
}


// #endregion
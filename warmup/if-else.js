// Determine voting eligibility based on age with validation for missing or invalid values.
function eligibleToVote(age) {
    if(!age){
        console.log("Age is required to determine eligibility.");
    }
    else if(age < 0){
        console.log("Age cannot be negative.");
    }
    else if(age < 18){
        console.log("You are not eligible to vote.");
    }
    else{
        console.log("You are eligible to vote.");
    }
}

// Test eligibleToVote with a variety of age inputs.
eligibleToVote(17);
eligibleToVote(18);
eligibleToVote(20);
eligibleToVote(-5);
eligibleToVote();


// Check whether a number is even or odd and log the result.
function checkEvenOdd(num) {
    if(num % 2 === 0){
        console.log(num + " is even.");
    }
    else{
        console.log(num + " is odd.");
    }
}

// Test checkEvenOdd using positive, zero, and negative values.
checkEvenOdd(10);
checkEvenOdd(15);
checkEvenOdd(0);
checkEvenOdd(-4);
checkEvenOdd(-7);
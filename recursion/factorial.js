let n = 5;
function factorial(num){
    if(num === 0) return 1;
    return num * factorial(num - 1);
}
console.log(`The factorial of ${n} is: ${factorial(n)}`);

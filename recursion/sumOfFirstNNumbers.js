function calculateSum(num){
    if(num === 1) return 1;
    return num + calculateSum(num - 1);
}

let n = 5;
console.log(calculateSum(n));
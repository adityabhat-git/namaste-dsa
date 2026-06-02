//Print Fibonacci series up to n using recursion
function printFibonacciSeries(n, a = 0, b = 1) {
    if (a > n) return;
    console.log(a);
    printFibonacciSeries(n, b, a + b);
}

let n = 10;
printFibonacciSeries(n);

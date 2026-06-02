//function to print from n to 1 using recursion

// function printnto1(n){
//     if(n<1)return;
//     console.log(n);
//     printnto1(--n);
// }

// let n = 10;
// printnto1(n);


//function to print from 1 to n using recursion
let start = 1;
function print1ton(n){
    if(start > n) return;
    console.log(start);
    start++;
    print1ton(n);
}
let m = 10;
print1ton(m);
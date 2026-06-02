let arr = [1, 2, 3, 4, 5];
function sumOfOddElements(index){
    if(index < 0) return 0;
    if(arr[index] % 2 !== 0){
        return arr[index] + sumOfOddElements(index - 1);
    }
    return sumOfOddElements(index - 1);
}

let length = arr.length;
console.log(`The sum of odd elements in the array provided is: ${sumOfOddElements(length -1)}`);
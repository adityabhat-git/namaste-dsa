function sumOfElements(index){
    if(index < 0) return 0;
    return arr[index] + sumOfElements(index - 1);
}
let arr = [5,3,2,0,1];
let length = arr.length;
console.log(`The sum of elements in the array provided is: ${sumOfElements(length -1)}`);
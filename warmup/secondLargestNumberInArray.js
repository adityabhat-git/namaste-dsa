/** write a function to find the second largest number in an array */

function findSecondLargest(arr){
    let firstLargest = -Infinity;
    let secondLargest = -Infinity;

    for(let i = 0 ; i< arr.length; i++){
        if(arr[i]> firstLargest){
            secondLargest = firstLargest;
            firstLargest = arr[i];
        } else if(arr[i] > secondLargest && arr[i] != firstLargest){
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}

let arr = [10,4,6,9,0,3,7,11,15];
console.log(`The second largest element in the array is: ${findSecondLargest(arr)}`);
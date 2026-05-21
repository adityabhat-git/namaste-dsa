/** Write a function that searches for a value in an array and returns its index, or -1 if not found */
function searchElement(arr, value){
    for(let i = 0; i< arr.length;i++){
        if(arr[i] === value){
            return i;
        }
    }
    return -1;
}


let arr = [10,4,6,9,0,3,7,11,15];
console.log(searchElement(arr, 3));
console.log(searchElement(arr, 5));

/** Write a function that returns the number of negative numbers in an array */
function countNegatives(arr){
    let count = 0;
    for(let i = 0; i< arr.length;i++){
        if(arr[i]< 0){
            count++;
        }
    }
    return count;
}

let arr = [10,-4,6,-9,0,3,-7,11,15];
console.log(`The number of negative numbers in the array is: ${countNegatives(arr)}`);

/** Write a function to find the largest element in an array */
function findLargest(arr){
    let largest = arr[0];
    for(let i = 1; i< arr.length;i++){
        if(arr[i] > largest){
            largest = arr[i];
        }
    }
    return largest;
}

let arr = [10,4,6,9,0,3,7,11,15];
console.log(`The largest element in the array is: ${findLargest(arr)}`);

/** Write a function to find the smallest element in an array */
function findSmallest(arr){
    let smallest = arr[0];
    for(let i = 1; i< arr.length;i++){
        if(arr[i] < smallest){
            smallest = arr[i];
        }
    }
    return smallest;
}

let arr = [10,4,6,9,0,3,7,11,15];
console.log(`The smallest element in the array is: ${findSmallest(arr)}`);
//Write a function that will be given two arrays of numbers, and returns the sum of the smallest number and second smallest number in each array
function sumOfSmallNums(arr1, arr2){
    //1. For Loop + If Statements to find the small numbers
    //2. Sort the array first and then grab the lowest 2
    //3. Use Math.min(), then remove the smallest, Use Math.min() a second time

    //Find the smallest number
    let smallest = arr1[0];
    let secondSmallest = arr1[0];
    for (let i = 1; i < arr1.length; i++){
        //If the number I'm looking at is smaller, then let's remember that instead
        if (smallest > arr1[i]){
            secondSmallest = smallest;
            smallest = arr1[i];
        } else if (secondSmallest > arr1[i]){
            secondSmallest = arr1[i];
        }
    }
    //2.
    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);
    //return arr1[0] + arr1[1] + arr2[0] + arr2[1];
    //3.
    return Math.min(...arr1) + Math.max(...arr1) + Math.min(...arr2) + Math.max(...arr2);
}

const arr = [2, 5, 3];
const arr2 = [4, -1, 8, -6, -3];
console.log(sumOfSmallNums(arr, arr2));


// Expected: 14
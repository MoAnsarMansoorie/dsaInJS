// ----------------------------------------------------
// -----------------Question1--------------------------
// ----------------------------------------------------

// Write a function that return the second largest number in an array. ???

function secondLargestNumber(arr1) {
    if(arr1.length<2){
        return "Array shoul have atleast 2 elements."
    }
    let largest = -Infinity;  
    let secondLargest = -Infinity;

    for(let i=0; i< arr1.length; i++){
        if(arr1[i] > largest){
            secondLargest = largest;
            largest = arr1[i];
        } else if(arr1[i] > secondLargest && arr1[i] !== largest){
            secondLargest = arr1[i];
        }
    }
    return secondLargest;
};

let arr1 = [5, 17, 23, 2, 89, 34, 22]   

let result1 = secondLargestNumber(arr1)
console.log(result1)
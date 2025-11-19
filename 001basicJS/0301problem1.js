
// ----------------------------------------------------
// Basic JavaScript: Search Element in Array
// ----------------------------------------------------
// Write a function that searches for an element in an array and return the index, if the element is not present then return just -1. ???

function searchElement(arr, targetEle) {
    for(let i=0; i< arr.length; i++){
        if(arr[i] == targetEle){
            return i
        }
    }
    return -1;
}

let arr = [10, 4, 5, 3, 8, 9, 11]

let result1 = searchElement(arr, 3) // 3
console.log(result1)

let result2 = searchElement(arr, 6) // -1
console.log(result2)





// ----------------------------------------------------
// -----------------Question2--------------------------
// ----------------------------------------------------

// Write a function that return the numbers of negative numbers in an array. ???

function countNegativeNumber(arr2) {
    let count = 0;
    for(let i=0; i<arr2.length; i++){
        if(arr2[i] < 0){
            count++
        }
    }
    return count;
}

let arr2 = [2, -9, 17, 0, 1, -10, -4, 8]

let result3 = countNegativeNumber(arr2)
console.log(result3)

// let result4 = countNegativeNumber(arr2)
// console.log(result4)








// ----------------------------------------------------
// -----------------Question3--------------------------
// ----------------------------------------------------

// Write a function that return the largest number in an array. ???

function largestNumber(arr3) {
    let largest = -Infinity;  
    for(let i=0; i< arr3.length; i++){
        if(arr3[i] > largest){
            largest = arr3[i];
        }   
    }
    return largest;
};

let arr3 = [5, 17, 23, 2, 89, 34, 22]

let result5 = largestNumber(arr3)
console.log(result5)








// ----------------------------------------------------
// -----------------Question3--------------------------
// ----------------------------------------------------

// Write a function that return the smallest number in an array. ???

function smallestNumber(arr4) {
    let smallest = Infinity;  
    for(let i=0; i< arr4.length; i++){
        if(arr4[i] < smallest){
            smallest = arr4[i];
        }   
    }
    return smallest;
};

let arr4 = [5, 17, 23, 11, 89, 34, 22]

let result6 = smallestNumber(arr4)
console.log(result6)
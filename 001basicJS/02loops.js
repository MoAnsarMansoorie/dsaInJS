// for loop
for(let i=1; i<=10; i++){
    console.log(`Hello world`, i)
}

for(let i=10; i>=1; i--){
    console.log(`Hello world`, i)
}


// -------------------question-----------------------------------
// Q. print all even number of elements of an array.
let arr = [10, 2, 5, 4, 3, 1, 0, 9, 6]

for(let i=0; i<arr.length; i++) {
    if(arr[i] % 2 == 0){
        console.log(arr[i])
    }
}


// while loop
let i=0;
while(i<5){
    console.log("hello world", i);
    i++
}
// count the digit of number

let num = 589764
let count = 0;

while(num > 0){
    num = Math.floor(num / 10);
    count++;
}

console.log("The number of digits are: " + count); 
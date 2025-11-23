let array = [1,2,4,5,6,7,3,10];
//  debugger;
// let arr = [];
// for(let x of array){
//     if(x%2 == 0){
//         console.log(x)
//     }
// }

for(let i=0; i<array.length; i++){
    if(array[i]%2 == 0){
        console.log(array[i])
    }
}

// revere a string
let str = "ansar";
let result = ""
for(let i=str.length-1; i>=0; i--){
    result += str[i]
}
console.log(result)

// Q.1 Print a star pattern like this using loops
// ****
// ****
// ****
// ****

console.log(1)
for(let i=0; i<4; i++){
    let str = "";
    for(let j=0; j<4; j++){
        str = str + "*"
    }
    console.log(str)
}

// Q.2 Print a star pattern like this using loops
// *
// **
// ***
// ****

console.log(2)
for(let i=1; i<=4; i++){
    let str = "";
    for(let j=1; j<=i; j++){
        str = str + "*";
    }
    console.log(str)
}



// Q.3 Print a pattern like this using loops
// 1
// 12
// 123
// 1234
// 12345

console.log(3)
for(let i=1; i<=5; i++){
    let str = "";
    for(let j=1; j<=i; j++){
        str = str + j;
    };
    console.log(str);
}



// Q.4 Print a pattern like this using loops
// 1
// 22
// 333
// 4444
// 55555

console.log(4)
for(let i=1; i<=5; i++){
    let str = "";
    for(let j=1; j<=i; j++){
        str = str + i;
    };
    console.log(str);
}



// Q.5 Print a pattern like this using loops
// 12345
// 1234
// 123
// 12
// 1

console.log(5)
for(let i=1; i<=5; i++){
    let str = "";
    for(let j=1; j<=(6-i); j++){
        str = str + j;
    };
    console.log(str)
}



// Q.6 Print a pattern like this using loops
//     *
//    **
//   ***
//  ****
// *****

console.log(6)
for(let i=0; i<5; i++){
    let str = "";
    for(let j=0; j<5-(i+1); j++){
        str = str + " ";
    }
    for(let k=0; k<i+1; k++){
        str = str + "*";
    }
    console.log(str)
}



// Q.7 Print a pattern like this using loops
// *****
// ****
// ***
// **
// *

console.log(7)
for(let i=0; i<5; i++){
    let str = "";
    for(let j=i; j<5; j++){
        str = str + "*";
    };
    console.log(str)
}





// Q.8 Print a pattern like this using loops
// 1
// 10
// 101
// 1010
// 10101
// 101010

console.log(8)
for(let i=0; i<6; i++){
    let str = "";
    for(let j=0; j<i+1; j++){
        if(j%2 == 0){
            str = str + "1"
        } else{
            str = str + "0"
        }
    }
    console.log(str)
}



// Q.8 Print a pattern like this using loops
// 1
// 01
// 010
// 1010
// 10101

console.log(9)
for(let i=0; i<5; i++){
    let str = "";
    for(let j=0; j<i+1; j++){
        if((i+j)%2 == 0){
            str = str + "1"
        } else{
            str = str + "0"
        }
    }
    console.log(str)
}


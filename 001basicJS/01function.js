// 1 simple function
function greet(name) {
    console.log(`Hello, ` + name)
}

greet("Ansar")
greet("Krishna")

// 2 Write a function which accept age and tells us person is eligible for vote or not...
function isEligibleForVote(age) {
    if(age<1) {
        console.log("Please enter valid age")
    } else if(age<18) {
        console.log("Not eligible for vote")
    } else {
        console.log("Eligible for vote")
    }
}

isEligibleForVote(24)
isEligibleForVote(15)
isEligibleForVote(18)
isEligibleForVote(-1)

// 3 Write a function which tells given number is even or odd...
function isEvenOdOdd(num) {
    if(num % 2 == 0) {
        console.log(`Number is even`)
    } else {
        console.log(`Number is odd`)
    }
}

isEvenOdOdd(24)
isEvenOdOdd(21)
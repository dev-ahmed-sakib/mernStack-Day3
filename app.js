//Find GPA and Grade with respect to Marks in any subject //

let mark = prompt("Enter a value");
let GPA;
let Grade;

if(mark >= 0 && mark < 33){
    GPA = "GPA 0";
    Grade = "failed";
}else if(mark >= 33 && mark < 39){
    GPA = "GPA 1";
    Grade = "D";
}
else if(mark >= 40 && mark < 49){
    GPA = "GPA 2";
    Grade = "C";
}
else if(mark >= 50 && mark < 59){
    console.log("GPA = GPA 3");
    console.log("B");
}
else if(mark >= 60 && mark < 69){
    GPA = "GPA 4";
    Grade = "A";
}
else if(mark >= 60 && mark < 79){
    GPA = "4.5";
    Grade = "A-";
}
else if(mark >= 80 && mark <= 100){
    GPA = "5";
    Grade = "A+";
}
console.log(GPA);
console.log(Grade);

// Code end //

// Create a loop that will rotate from 1000 to 300 //
for(let i = 1000; i >= 300; i--){
    console.log(i)
}

// Code end //


// Find the even and odd numbers from 1 and 1000 through for loop //
let evenNumbers = [];
let oddNumbers = [];

for(let i = 1; i <= 1000; i++){
    if(i % 2 == 0){
        evenNumbers.push(i);
    }else{
        oddNumbers.push(i);
    }
}
console.log("Even Numbers are here...",evenNumbers)
console.log("ODD Numbers are here...",oddNumbers)


// Code end //



// Find the number divisible by 7 between 1 and 1000 //
let divisibleNum = [];
for(let i = 1; i <= 1000; i++){
    if(i % 7 === 0){
        divisibleNum.push(i);
    }
}
console.log("Divisible by 7", divisibleNum) // divisible by 7

// Code end //


//Create a loop using “for” that will increment by 3 per step and break the loop when it finds a number divisible by 11 //

for (let i = 0; i <= 500; i = i + 3) {
    if (i !== 0 && i % 11 === 0) {
        console.log("Found a number divisible by 11:", i);
        break;
    }
}

// Code end //

// Create a loop that rotates 500 times using the for loop where you just pull out the numbers divisible by 3 and 4 //

let getNumbers = [];
for(let i = 0; i <= 500; i++){
    if(i % 3 === 0 && i % 4 === 0){
        getNumbers.push(i)
    }
}
console.log(getNumbers)

// Code end //


// Create a loop where the initial value is 10,000. You need to rotate the loop 50 times by using the increment and decrement operators twice. //
let getNum = [];
for(let i = 10000; i > 0; i--){
    if(i % 200 === 0){
        getNum.push(i);
    }
}
console.log(getNum)
// Code end //

























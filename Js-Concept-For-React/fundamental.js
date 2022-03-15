// ----------------------- JS 6 Fundamental---------------------------

// 1. How to declare a variable useing let and Const
const name = 'hasan';

let age = 22;
age = 23;

// 2. Conditions

// 6-Basic conditions: <, >, ===, !===, <=, >= And 
// Multiple Conditions: &&, ||

if(name === 'hasan' || name === 'mahmudul'){

}
else if(name === 'fizz' && age === 22){

}
else{

}

//3. Array Declare

//index
//length, push
const numbers = [2, 32, 43, 23, 54, 63, 78]
numbers [1] = 100;

// 4. for loop
for(let i=0; i<numbers.length; i++){
    const number = numbers[i];
    console.log(number);
}

// 5. function
function multiply(num1, num2){
    const output = num1*num2;
    return output;
}
const result = multiply(10, 5);
console.log(result);

// 6. object

// 3-way to access property by name
const student = {
    name: 'fizz',
    age: 25,
    work: ['facebook', 'youtube', 'instagram']
}
const myVeriable = 'age';

console.log(student.age); // direct by property
console.log(student['age']); //access via property name string
console.log(student[myVeriable]); //access via property name in a veriable


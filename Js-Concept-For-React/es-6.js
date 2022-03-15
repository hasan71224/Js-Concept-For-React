const numbers = [2, 32, 43, 23, 54, 63, 78]
const student = {
    name: 'fizz',
    age: 25,
    work: ['facebook', 'youtube', 'instagram']
}
// 1. Template String
const about = `My name is ${student.name} and My age is ${student.age}, My fevorit Social media site is ${student.work[2]} and I have ${numbers[4]} Subscribe in ${student.work[1]}.`

console.log(about);

// 2. Arrow Function

const getFiftyFive = () => 55; // 1st way
const addSixtyNine = num => num + 69; // 2nd way
const isEven = x => x % 2 == 0; //3rd way
const addThree = (x, y, z) => x + y + z; //4th way

const doMath = (num1, num2) =>{ // 5th way
    const sum = num1 + num2;
    return sum;
}
const result = doMath(2, 8);
console.log(result);

// 3. Spread Operator
const newNumbers = [...numbers];

//create new array from an older array and an element
const curentNumbers = [...numbers, 55];

numbers.push(99);
console.log(numbers);
console.log(newNumbers);
console.log(curentNumbers);
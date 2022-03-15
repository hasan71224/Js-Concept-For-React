// truthy: 'almas', [], {}, 5
//falsy: ' ', undefined, 0, false, null

// 1. chech truethy
let myVar = 5;
if(myVar){
    myVar = myVar*5;
}
else{
    myVar=0;
}

// 2. check false
if(!myVar){

}

const monye = 50;
let food;
if(monye>100){
    food = 'beriany';
}
else{
    food = "kochu"
}
console.log(food);

// 3. ternary
const food1 = monye>100? "khichury" : "Dal Vat"
console.log(food1);

const drink = (monye>80 || myVar==25)? "7up" : "water";
console.log(drink);

// 4. number to string convertion
const num1 = 50;
console.log(num1);
const strnum= num1 + '';
console.log(strnum);

// 5. string to number
const string='200';
console.log(string);
const numString= +string;
console.log(numString);

// condition check
let isActive = false;
const showUser = () => console.log('user is true');
const hideUser = () => console.log('user is false');

isActive? showUser() : hideUser();
// use && if left site is true then right side is exicuted
isActive && showUser();

// use || if left site is false then right side is exicuted
isActive && hideUser();

// toggle bolean
isActive = !isActive
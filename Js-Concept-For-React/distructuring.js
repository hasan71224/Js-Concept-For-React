// 1. Array Distructuring
const numbers = [42, 65];

// const [x, y] = [42, 65] ;

const [x, y] = numbers ;

console.log(x, y);
//----------------------------------------------
function boxify(num1, num2){
    const nums = [num1, num2];
    return nums;
}
console.log(boxify(2, 4));

//----------------------------------------------
const student = {
    name: 'fizz',
    StudentAge: 25,
    work: ['facebook', 'youtube', 'instagram']
}
const [firstWork, secondWork] = student.work;

// 2. object distructuring (object ke distructureing korte siquencely kora lage na)
const {name, StudentAge} = {name: "hasan", id: 12, age:23}

//-----------------------
const employe={
    ide: "vs code",
    designation: "developer",
    matchine: "mac",
    language: [java, python, c],
    specification:{
        age: 32,
        hight: "70 inchi",
        weight: "60 kg",
        watch:{
            color: 'black',
            price: 300,
            brand:'mi'
        }
    }
}
const {matchine, ide} = employe;
const {age, weight} = employe.specification;
const {brand} = employe.specification?.watch; //specification karo ase karo nai tokhon ? bebhar kora hoy.

"use strict";
const crush1 = {
    name: "Moina Pakhi",
    age: 22,
    profession: "web developer",
    address: "Uganda",
};
const crush2 = {
    name: "Tia Pakhi",
    profession: "next level web developer",
    address: "mexico",
};
const isCrushMarried = false;
const calculate = (number1, number2, operation) => {
    return operation(number1, number2);
};
calculate(20, 20, (x, y) => x + y);
console.log(calculate(30, 20, (x, y) => x + y));
console.log(calculate(30, 20, (x, y) => x - y));
console.log(calculate(30, 20, (x, y) => x * y));

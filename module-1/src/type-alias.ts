type CrushType = {
  name: string;
  age?: number;
  profession: string;
  address: string;
};

const crush1: CrushType = {
  name: "Moina Pakhi",
  age: 22,
  profession: "web developer",
  address: "Uganda",
};
const crush2: CrushType = {
  name: "Tia Pakhi",
  profession: "next level web developer",
  address: "mexico",
};

type CrushMarriedType = boolean;
const isCrushMarried: CrushMarriedType = false;

type OperationType = (x: number, y: number) => number;
const calculate = (
  number1: number,
  number2: number,
  operation: OperationType
) => {
  return operation(number1, number2);
};
calculate(20, 20, (x, y) => x + y);
console.log(calculate(30, 20, (x, y) => x + y));
console.log(calculate(30, 20, (x, y) => x - y));
console.log(calculate(30, 20, (x, y) => x * y));

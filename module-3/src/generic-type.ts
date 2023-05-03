// const rollNumber1:number[]=[12,56,79]
// const rollNumber2:string[]=['12','56','79']
const rollNumber1: Array<number> = [12, 56, 79];
const rollNumber2: Array<string> = ["12", "56", "79"];
const rollNumber3: Array<boolean> = [true, false];

const nameAndroll: Array<{ name: string; roll: number }> = [
  {
    name: "Mr. X",
    roll: 2,
  },
  {
    name: "Mr. Y",
    roll: 1,
  },
];

//generic type
type GenericArray<T> = Array<T>;
const rollNumber4: GenericArray<number> = [12, 56, 79]; //evabe gerenric kore dea jai...
const rollNumber5: GenericArray<string> = ["12", "56", "79"]; //evabe gerenric kore dea jai...

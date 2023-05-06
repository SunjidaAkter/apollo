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
type NameAndRollType = {
  name: string;
  roll: number;
};
interface NameAndRollType2 {
  name: string;
  roll: number;
}
const nameAndroll1: GenericArray<NameAndRollType> = [
  {
    name: "Mr. X",
    roll: 2,
  },
  {
    name: "Mr. Y",
    roll: 1,
  },
];
//egular sathe generictype use kora recommended
type GenericTuple<x, y> = [x, y]; //etar khetre generic type dia kichhuta upokar pailam
const relation: GenericTuple<string, string> = ["sunjida", "mir"];
const relation2: GenericTuple<Object, string> = [
  { name: "sunjida", salary: 343434343 },
  "mir",
];
const relation3: //relation 2 er cheye relation 3 best practice
GenericTuple<NameAndRollType2, string> = [{ name: "sunjida", roll: 78 }, "mir"];
interface INameWithSalary {
  name: string;
  salary: number;
}
const relation4: //relation 2 er cheye relation 3 best practice
GenericTuple<INameWithSalary, string> = [
  { name: "sunjida", salary: 78 },
  "mir",
];

//normal function
function add(num1: number, num2: number): number {
  return num1 + num2;
}

add(2, 2);

//array function
const addArrow = (num1: number, num2: number): number => num1 + num2;

//implicitely types declared
// const arr=[1,6,6];
// const newAarray=arr.map(element=>element*element);

//explicitely types declared
const arr = [1, 6, 6];
const newAarray = arr.map((element: number) => element * element);

//implicitely types declared
// const admin={
//     name:"Mejba",
//     balance:5,
//     getBalance(money:number){
//         return this.balance+money;
//     }
// }

//explicitely types declared
//type-1
// const admin: {
//   name: string;
//   balance: number;
//   getBalance(money: number): number;
// } = {
//   name: "Mejba",
//   balance: 5,
//   getBalance(money:number) {
//     return this.balance + money;
//   },
// };
//type-2
// const admin: {
//   name: string;
//   balance: number;
//   getBalance(money: number): string;
// } = {
//   name: "Mejba",
//   balance: 5,
//   getBalance(money:number) {
//     return `my balance is ${this.balance+money}`;
//   },
// };
// type-3
const admin: {
  name: string;
  balance: number;
  getBalance(money: number): void;
} = {
  name: "Mejba",
  balance: 5,
  getBalance(money: number) {
    console.log(`my balance is ${this.balance + money}`);
  },
};

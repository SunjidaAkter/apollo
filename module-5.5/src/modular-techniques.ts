import { add as add2 } from "./module";

const add = (param1: number, param2: number): number => {
  return param1 + param2;
};

const res = add2(2, 5, 6);
console.log(res);

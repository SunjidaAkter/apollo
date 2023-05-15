export const add = (param1: number, param2: number, param3: number): number => {
  return param1 + param2 + param3;
};
export const subtract = (param1: number, param2: number): number => {
  return param1 - param2;
};
const multiple = (param1: number, param2: number): number => {
  return param1 * param2;
};
export default {
  add,
  subtract,
  multiple,
};

//Arrow function
const createArray = (param: string): string[] => {
  return [param];
};
const result = createArray("Bangladesh");
const createArray1 = <T>(param: T): T[] => {
  //as ekhane T die akta general type bujaise so eta generic type function
  return [param];
};
interface IName {
  name: string;
}
const result1 = createArray1<IName>({ name: "sun" }); //angel bracket r etar vitorer ta na dileo chole

//generic function tuple
const createArray2 = <X, Y>(param1: X, param2: Y): [X, Y] => {
  //as ekhane T die akta general type bujaise so eta generic type function
  return [param1, param2];
};
const result2 = createArray2<IName, IName>({ name: "sun" }, { name: "sun" }); //angel bracket r etar vitorer ta na dileo chole

//normal function
function createArray3<T>(param: T): T[] {
  //as ekhane T die akta general type bujaise so eta generic type function
  return [param];
}
interface IName {
  name: string;
}
const result5 = createArray1<IName>({ name: "sun" }); //angel bracket r etar vitorer ta na dileo chole

//generic function tuple
function createArray4<X, Y>(param1: X, param2: Y): [X, Y] {
  //as ekhane T die akta general type bujaise so eta generic type function
  return [param1, param2];
}
const result6 = createArray2<IName, IName>({ name: "sun" }, { name: "sun" }); //angel bracket r etar vitorer ta na dileo chole

//spread operator
// eta emneo kintu dea jai but amra generic vabei debo
// const addMeInCrushMind = (myInfo: object) => {
const addMeInCrushMind = <T>(myInfo: T) => {
  const crush7 = "mir";
  const newData = { ...myInfo, crush7 };
  return newData;
};
const myInfo = {
  name: "sun",
  age: 3434,
  salary: 11212,
};
const result3 = addMeInCrushMind(2);
console.log(result3);

//generic function k jor kore kichhu korano e hochhe generic constraints

//eguli holo generic type function
type MyInfoType = {
  name: string;
  salary: number;
  age: number;
};
const myInfo2: MyInfoType = {
  name: "sun",
  salary: 34,
  age: 12,
};
const addMeInCrushMind2 = <T>(myInfo: T) => {
  const crush7 = "mir";
  const newData = { ...myInfo, crush7 };
  return newData;
};
const result7 = addMeInCrushMind2<MyInfoType>(myInfo2);
console.log(result7);

// eguli holo generic conostraints
type MandetoryType = {
  name: string;
  salary: number;
  age: number;
};
interface IInfo {
  name: string;
  salary: number;
  age: number;
  other: boolean;
}
const myInfo3: IInfo = {
  name: "sun",
  salary: 34,
  age: 12,
  other: true,
};
const addMeInCrushMind3 = <T extends MandetoryType>(myInfo: T) => {
  const crush7 = "mir";
  const newData = { ...myInfo, crush7 };
  return newData;
};
const result8 = addMeInCrushMind2<IInfo>(myInfo3);
console.log(result8);

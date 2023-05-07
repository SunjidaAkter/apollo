const arrayOfNumbers = [1, 2, 3]; //['1','2','3']
const arrayOfStrings = arrayOfNumbers.map((number) => number.toString());
console.log(arrayOfStrings);

type AreaNumber = {
  height: number;
  width: number;
};
type AreaString = {
  height: string;
  width: string;
};
const rectangularArea: AreaNumber = {
  height: 12,
  width: 23,
};
rectangularArea.width = 10;
const rectangularArea2: AreaReadOnly = {
  height: 12,
  width: 23,
};
// rectangularArea2.width=10//change kora jai na readonly er khetre
type AreaReadOnly = {
  readonly height: number;
  readonly width: number;
};
//object er khetre
const obj = {
  name: "hi",
};
console.log(obj["name"]); //evabe key value pawa jai...
//  type er khetre nimnorup
type a = AreaNumber["height"]; //look up type
type b = keyof AreaNumber; //'height'|'width'

//Dynamic and generic look up type
type Volume = {
  height: number;
  width: number;
  depth: number;
};
type Area = {
  [key in "height" | "width"]: string;
};
type VolumeNumber = {
  [key in keyof Volume]: Volume[key];
};

type Area1<T> = {
  readonly [key in keyof T]: T[key];
};
const area1: Area1<Volume> = {
  height: 45,
  width: 34,
  depth: 34,
};

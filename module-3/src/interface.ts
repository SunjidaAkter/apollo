type User = {
  name: string;
  age: number;
};

type ExtendUser = User & {
  role: string;
};

const userWithTypeAlias: ExtendUser = {
  name: "Type Alias",
  age: 122,
  role: "no one",
};

interface IUser {
  //eta use korbo object type datar khetre.. jekono primitive type declare er jonno interface use kora jai na setar khetre alias type e use korte hobe like
  //   type CrushMarriedType = boolean;
  // const isCrushMarried: CrushMarriedType = false;

  name: string;
  age: number;
}

const userWithTypeInterface: IUser = {
  name: "Type Interface",
  age: 122,
};

interface IExtendedUser extends IUser {
  //IUser er property gulao nie nilo IExtendUser ei extend keyword er madhyome jeta just interface er sathe use kora jai.. erokom alias type er sathe korte hole & use korte hoi
  role: string;
}

const user1: IExtendedUser = {
  name: "Omanush",
  age: 20,
  role: "Unknown",
};

// js e function, object and array egula object type data..
//alias type for function//function er jonno ei alias type e recommended
type funType = (x: number, y: number) => number;
const fun: funType = (x, y) => x + y;

//interface for function
interface IFun {
  (x: number, y: number): number;
}
const fun1: IFun = (x, y) => x + y;

//array
// const rollNumber:number[]=[1,3,6];//normally

//array
//type alias
type rollNumberType = number[];
const rollNumber: rollNumberType = [1, 3, 6];

//interface
interface IRollNumber {
  [index: number]: number | string;
}
const rollNumbe2r: IRollNumber = [1, "3", 6];

//just object r class er khetre amra interface dekhbo r baki khetre amra type alias use korbo

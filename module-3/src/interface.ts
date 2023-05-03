type User = {
  name: string;
  age: number;
};

const userWithTypeAlias: User = {
  name: "Type Alias",
  age: 122,
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

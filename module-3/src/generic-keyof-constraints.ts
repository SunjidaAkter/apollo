type PersonType = {
  name: string;
  age: number;
  address: string;
};

type newType = "name" | "age" | "address"; //manually done
type newTypeUsingKeyOf = keyof PersonType;

const a: newType = "address";
const b: newTypeUsingKeyOf = "name";

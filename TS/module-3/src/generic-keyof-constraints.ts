type PersonType = {
  name: string;
  age: number;
  address: string;
};

type newType = "name" | "age" | "address"; //manually done
type newTypeUsingKeyOf = keyof PersonType;

const a: newType = "address";
const b: newTypeUsingKeyOf = "name";
// ({name:'Mr. X',age:100},'age')//100
function getProperty<X, Y extends keyof X>(obj: X, key: Y) {
  //Y extends keyof X means Y='name'|'age'
  obj[key];
}
const property = getProperty({ name: "Mr. X", age: 100 }, "age");

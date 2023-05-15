//pick

interface Person {
  name: string;
  email?: string;
  contact: string;
}
//boro kono interface theke jekono property type use korte hole pick use korte hoi
type Email = Pick<Person, "email">;
type Contact = Pick<Person, "email" | "contact">;

//omit
//Name er type interface er email r contact er type er moto hobe na.. omit die etai bujai
type Name = Omit<Person, "email" | "contact">;

//partial and required
//to make all the properties be optional type
type Optional = Partial<Person>;
//to make all the properties be required type
type RequiredProps = Required<Person>;

//readonly
const person: Readonly<Person> = {
  name: "sun",
  email: "sun@",
  contact: "01",
};

// using index signature
type MyObj1 = {
  [key: string]: string;
};
const obj: MyObj1 = {
  a: "0",
  b: "1",
  c: "4",
};

//record type
type MyObj = Record<"a" | "b", string>;

const obj1: MyObj = {
  a: "0",
  b: "1",
};
//amon aro utility type achhe
//documentation porte hobe

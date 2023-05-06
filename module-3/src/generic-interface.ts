//generic interface
interface CrushInterface<T> {
  name: string;
  husband: T;
}
const crush: CrushInterface<boolean> = {
  name: "mir",
  husband: true,
};
const crush1: CrushInterface<string> = {
  name: "mir",
  husband: "sun",
};
const crush2: CrushInterface<object> = {
  //just object dea good practice na... or type gulao likhe dile valo hoi
  name: "mir",
  husband: { name: "sun", salary: 3434 },
};
interface HusbandInterface {
  name: string;
  salary: number;
}
const crush3: CrushInterface<HusbandInterface> = {
  //eta best practice
  name: "mir",
  husband: { name: "sun", salary: 3434 },
};

//new kind of generic typrs
interface Crush2Interface<T, U = undefined> {
  name: string;
  husband: T;
  wife?: U;
}
const crush4: Crush2Interface<string, string> = {
  name: "mir",
  husband: "true",
  wife: "true",
};
const crush5: Crush2Interface<HusbandInterface, HusbandInterface> = {
  name: "mir",
  husband: { name: "true", salary: 34000 },
  wife: { name: "true", salary: 34000 },
};

interface Crush3Interface<T, U = undefined, V = undefined> {
  name: string;
  husband: T;
  wife?: U;
  other: V;
}
const crush6: Crush3Interface<
  HusbandInterface,
  HusbandInterface,
  HusbandInterface
> = {
  name: "mir",
  husband: { name: "true", salary: 34000 },
  wife: { name: "true", salary: 34000 },
  other: { name: "true", salary: 34000 },
};

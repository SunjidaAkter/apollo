//a type is dependent on another type... this is conditional type
type a1 = string; //eta string chhara onno type hole a2 null hoibo
type a3 = undefined;
type a4 = number;
type a2 = a1 extends string ? string : null;
const b1: a2 = "df";
console.log(b1);
// nested conditional type
type d = a1 extends null
  ? null
  : a3 extends number
  ? number
  : a4 extends null
  ? null
  : never;

//check korbe ei sheikh type e wife1 ase kina ? true:false

type Sheikh = {
  wife1: string;
  wife2: string;
};
type CheckProperty<T, K> = K extends keyof T ? true : false;
type CheckWife1 = CheckProperty<Sheikh, "wife1">;

//matha kharap example
type Bandhubi = "Monika" | "Rachel" | "Phoebe"; //union er modhe konotar type never hole seta oi union theke remove hoe jai
type RemoveBandhubi<T, K> = T extends K ? never : T;
type CurrentBandhubi = RemoveBandhubi<Bandhubi, "Monika">;

//ternary operator

const age: number = 22;
// if(age>=18){
//     console.log("yse");
// }else{
//     console.log("no");
// }

const isAdult = age >= 18 ? "yes" : "no";
console.log(isAdult);

//nullish coalescing operator
//null and undefined

const isAuthenticatedUser = ""; //etar jonno clg kichhu asbe na
// const isAuthenticatedUser = undefined;//etar jonn clg guest
const userName = isAuthenticatedUser ?? "Guest"; //first er tar type null ba undefined hole porer ta debo
const userName2 = isAuthenticatedUser ? isAuthenticatedUser : "Guest";
console.log(userName, userName2);

type Manush = {
  name: string;
  age: number;
  address: {
    city: "no city";
    road: "no road";
    home?: "";
  };
};
const manush1: Manush = {
  name: "Manush",
  age: 100,
  address: {
    city: "no city",
    road: "no road",
  },
};
const home = manush1?.address?.home ?? "No home"; //default'No home'
console.log({ home });

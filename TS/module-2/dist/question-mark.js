"use strict";
//ternary operator
var _a, _b;
const age = 22;
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
const userName = isAuthenticatedUser !== null && isAuthenticatedUser !== void 0 ? isAuthenticatedUser : "Guest"; //first er tar type null ba undefined hole porer ta debo
const userName2 = isAuthenticatedUser ? isAuthenticatedUser : "Guest";
console.log(userName, userName2);
const manush1 = {
    name: "Manush",
    age: 100,
    address: {
        city: "no city",
        road: "no road",
    },
};
const home = (_b = (_a = manush1 === null || manush1 === void 0 ? void 0 : manush1.address) === null || _a === void 0 ? void 0 : _a.home) !== null && _b !== void 0 ? _b : "No home"; //default'No home'
console.log({ home });

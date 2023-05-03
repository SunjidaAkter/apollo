"use strict";
//spread operator
const myFriend = ["chandler", "joey", "ross"];
const newFriends = ["monica", "rachel", "phoebe"];
myFriend.push(...newFriends);
console.log(myFriend);
//rest parameter
// const greetFriend = (friend1: string, friend2: string, friend3: string): void =>
//   console.log(`Hi ${friend1}\nHi ${friend2}\nHi ${friend3}\n`);
// greetFriend("abul", "kabul", "babul");//etar khetre abar bondhu komano barano jabe na... tai nicher niom follow kori
const greetFriend = (...friends) => friends.forEach((friend) => console.log(`Hi ${friend}`));
greetFriend("abul", "kabul", "babul", "bangla vai"); //etar khetre abar bondhu komano barano jabe na... tai nicher niom follow kori
//array and object destructuring
//egular khetre type declare kora jabe na
const myBestFriend = {
    fullName: "mejba",
    age: 24,
};
const [bestfriend] = myFriend;
const { fullName } = myBestFriend;
console.log(fullName);

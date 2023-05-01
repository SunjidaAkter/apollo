//spread operator
const myFriend = ["chandler", "joey", "ross"];
const newFriends = ["monica", "rachel", "phoebe"];

myFriend.push(...newFriends);
console.log(myFriend);

//rest parameter
const greetFriend = (friend1: string, friend2: string, friend3: string): void =>
  console.log(`Hi ${friend1}\nHi ${friend2}\nHi ${friend3}\n`);

greetFriend("abul", "kabul", "babul");

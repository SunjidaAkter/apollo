//any type
let emni: any; //akek somoi akek vabe use kora jai as die... ei as kei assertion type bole

emni = "Next level web development";
(emni as string).concat(emni);

emni = 23;
(emni as number).toExponential();

function kgToGram(param: string | number): string | number | undefined {
  //return type e or thakle akta type undefined o dite hobe
  if (typeof param === "string") {
    const value = parseFloat(param) * 1000;
    return `The converted result is :${value} gram`;
  } else if (typeof param === "number") {
    const value = param * 1000;
    return value;
  }
}
const resultToBeNumber = <string>kgToGram("12"); //type assertion k evabeo lakha jai thouhg ei liner khetre as er tamon kono importance dekhlam na
console.log(resultToBeNumber);

type CustomErrorType = {
  message: string;
};
try {
} catch (err) {
  console.log((<CustomErrorType>err).message);
}

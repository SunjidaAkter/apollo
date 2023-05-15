// ekhane export die add array function er jonno akta alada scope banano hoise. fole ak e name onno file(module.ts) e same namer array function create korar poreo crash kortese na ... ei system ta ke modular techniques bole ... eta just ak file r arek file er modhe same variable/function jno crash na hoi tai.. onno file theke export kora variable or function k arek file e nite import use korte hoi
//khuchra import er podhoti
import multiple /* multiple function ta ke module file theke default vabe export kora hoise tai er sathe ar curly braces use korte hoi nai*/, {
  add as add2,
  subtract,
} from "./module";
import subtract2 from "./utils/subtract";
import multiply from "./utils/multiple";

export const add = (param1: number, param2: number): number => {
  return param1 + param2;
};

const res = add2(2, 5, 6);
console.log(res);
const res1 = subtract(2, 5);
console.log(res1);

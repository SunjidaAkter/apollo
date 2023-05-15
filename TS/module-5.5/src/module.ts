// ekhane export die add array function er jonno akta alada scope banano hoise. fole ak e name onno file(module-techniques.ts) e same namer array function create korar poreo crash kortese na ... ei system ta ke modular techniques bole ... eta just ak file r arek file er modhe same variable/function jno crash na hoi tai

export const add = (param1: number, param2: number, param3: number): number => {
  return param1 + param2 + param3;
};
export const subtract = (param1: number, param2: number): number => {
  return param1 - param2;
};

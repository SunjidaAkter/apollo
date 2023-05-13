"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const module_1 = require("./module");
const add = (param1, param2) => {
    return param1 + param2;
};
const res = (0, module_1.add)(2, 5, 6);
console.log(res);

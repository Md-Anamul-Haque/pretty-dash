"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
const groupBy_grid = ({ datas, bgoupByKey, print = false, cols }) => {
    let result = {
        cols: cols || [],
        data: [],
        rows: []
    };
    if (!cols) {
        result.cols = lodash_1.default.uniq(lodash_1.default.flatMap(datas, lodash_1.default.keys));
    }
    result.data = lodash_1.default.groupBy(datas, bgoupByKey);
    // @ts-ignore
    result.rows = lodash_1.default.map(Object.values(result.data), (value) => {
        const singleRow_object = lodash_1.default.merge({}, ...value);
        const singleRow_value = {};
        result.cols.forEach((col) => singleRow_value[col] = singleRow_object[col]);
        // @ts-ignore
        return (singleRow_value);
    });
    delete result.data;
    if (print) {
        console.table(result.rows);
    }
    return (result);
};
exports.default = groupBy_grid;

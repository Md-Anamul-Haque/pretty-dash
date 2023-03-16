"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
const tableFormate = (datas, bgoupByKey) => {
    let result = {
        cols: [],
        data: [],
        rows: []
    };
    result.cols = lodash_1.default.uniq(lodash_1.default.flatMap(datas, lodash_1.default.keys));
    // result.cols = [...new Set(datas.flatMap(Object.keys))]; same as this _.uniq(_.flatMap(datas, _.keys));
    result.data = lodash_1.default.groupBy(datas, bgoupByKey);
    // @ts-ignore
    result.rows = lodash_1.default.map(Object.values(result.data), (value) => {
        const singleRow_object = lodash_1.default.merge({}, ...value);
        const singleRow_value = {};
        result.cols.forEach((col) => singleRow_value[col] = singleRow_object[col] || '');
        // @ts-ignore
        return Object.values(singleRow_value);
    });
    delete result.data;
    return (result);
};
exports.default = tableFormate;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupBy = exports.pretty_dash = void 0;
const lodash_1 = __importDefault(require("lodash"));
const tableFormate_1 = __importDefault(require("./functions/tableFormate"));
exports.pretty_dash = lodash_1.default;
exports.groupBy = Object.assign(lodash_1.default.groupBy, {
    tableFormate: tableFormate_1.default
});
exports.pretty_dash.groupBy = exports.groupBy;

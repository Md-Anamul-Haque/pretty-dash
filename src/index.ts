import _ from "lodash";
import tableFormate from "./functions/tableFormate";
export let pretty_dash: _.LoDashStatic = _;
export const groupBy = Object.assign(_.groupBy, {
    tableFormate: tableFormate
});

pretty_dash.groupBy = groupBy



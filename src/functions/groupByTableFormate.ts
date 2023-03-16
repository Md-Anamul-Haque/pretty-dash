import _ from "lodash";
type resultType = {
    cols: any,
    data: any,
    rows: any,
};
const groupByTableFormate = (datas: _.List<unknown> | null | undefined, bgoupByKey: _.ValueIteratee<unknown> | undefined) => {
    let result: resultType = {
        cols: [],
        data: [],
        rows: []
    }
    result.cols = _.uniq(_.flatMap(datas, _.keys));
    // result.cols = [...new Set(datas.flatMap(Object.keys))]; same as this _.uniq(_.flatMap(datas, _.keys));
    result.data = _.groupBy(datas, bgoupByKey);
    // @ts-ignore
    result.rows = _.map(Object.values(result.data), (value) => {
        const singleRow_object = _.merge({}, ...value);
        const singleRow_value: any = {}
        result.cols.forEach((col: string | number) => singleRow_value[col] = singleRow_object[col] || '')
        // @ts-ignore
        return Object.values(singleRow_value)
    })
    delete result.data
    return (result)
}

export default groupByTableFormate

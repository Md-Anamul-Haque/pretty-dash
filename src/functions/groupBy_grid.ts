import _ from "lodash";
type resultType = {
    cols: any,
    data: any,
    rows: any,
};
type paramsTypes = {
    datas: _.List<unknown>;
    bgoupByKey: _.ValueIteratee<unknown>;
    print?: boolean;
    cols?: string[]
};
const groupBy_grid = ({ datas, bgoupByKey, print = false, cols }: paramsTypes) => {
    let result: resultType = {
        cols: cols || [],
        data: [],
        rows: []
    }
    if (!cols) {
        result.cols = _.uniq(_.flatMap(datas, _.keys));
    }
    result.data = _.groupBy(datas, bgoupByKey);
    // @ts-ignore
    result.rows = _.map(Object.values(result.data), (value:any) => {
        const singleRow_object = _.merge({}, ...value);
        const singleRow_value: any = {}
        result.cols.forEach((col: string | number) => singleRow_value[col] = singleRow_object[col])
        // @ts-ignore
        return (singleRow_value)
    })
    delete result.data
    if (print) {
            console.table(result.rows)
        }
    return (result)
}

export default groupBy_grid

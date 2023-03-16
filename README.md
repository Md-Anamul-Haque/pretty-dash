# pretty-dash


```js
const {pretty_dash}= require('pretty-dash')

const arr = [
    { name: 'user', roll: 20 },
    { name: 'user3', roll: 22 },
    { name: 'user4', roll: 23 },
    { name: 'user', age: 20 },
    { name: 'user2', age: 21 },
    { name: 'user3', age: 22 },
    { name: 'user4', age: 23 },
    { name: 'user', classId: 70 },
    { name: 'user2', classId: 71 },
    { name: 'user3', classId: 72 },
];
console.log(pretty_dash.groupBy.tableFormate(arr, 'name'))
/*
"out put is"
{
  cols: [ 'name', 'roll', 'age', 'classId' ],
  rows: [
    [ 'user', 20, 20, 70 ],
    [ 'user3', 22, 22, 72 ],
    [ 'user4', 23, 23, '' ],
    [ 'user2', '', 21, 71 ]
  ]
}
*/
```
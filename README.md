
pretty-dash

pretty-dash for pretty json or database data

```
npm i pretty-dash

```

```js

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

```


```js

const {groupByTableFormate} = require('pretty-dash');

console.log(groupByTableFormate(arr, 'name'))

```

or

```js

const _ = require('pretty-dash');

console.log(_.groupByTableFormate(arr, 'name'))

```

```js

/*
"output is"
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

```js

const { lodash } = require("pretty-dash"); // lodashjs

```


```js
const { groupBy_grid } = require("pretty-dash"); // as like as groupByTableFormate but some advance

groupBy_grid({
            datas: arr,
            bgoupByKey: 'name',
            print: true
        })

```

# pretty-dash

pretty-dash for pretty json or database data

```
npm i pretty-dash

```

```js

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

```


```js

const {groupByTableFormate} = require('pretty-dash');

console.log(groupByTableFormate(arr, 'name'))

```

or

```js

const _ = require('pretty-dash');

console.log(_.groupByTableFormate(arr, 'name'))

```

```js

/*
"output is"
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

```js

const { lodash } = require("pretty-dash"); // lodashjs

```


```js
const { groupBy_grid } = require("pretty-dash"); // as like as groupByTableFormate but some advance

groupBy_grid({
            datas: arr,
            bgoupByKey: 'name',
            print: true
        })

```


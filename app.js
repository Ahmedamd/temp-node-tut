const os = require('os');

const user = os.totalmem();
// console.log(user)


const _ = require('lodash')

const items = [1,[2, [3,[4]]]]
const newItems = _.flatMapDeep(items);
console.log(newItems);
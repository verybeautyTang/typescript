import { name } from './a'

import * as Info from  './b'

import { name as nameProps} from './b'

import * as A from './a'


// 这样引入适用于一些全局作用的一些代码逻辑，不适用于再用来加工的逻辑
import './a'

console.log(name)
console.log(Info)
console.log(nameProps)

console.log(A)



import defalutData from './c'


import sex = require('./c')

console.log(sex)

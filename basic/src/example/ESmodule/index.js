import {time} from './a.js'

import {name, age, item} from './b.js'

// 重命名的方式
import {default as Func} from './d.js'

// import命令有提升的效果，一般提升到最前面执行
getName()

import {getName} from './c.js'


import zzz, {xxx as nameProp, yyy,qqq} from './e.js'


// 全部导入
export * from './f.js'

// 引入的是一个基本数据的话是只读的，如果是一个对象的话 就是可以修改的
// import是静态执行的，所以在编译阶段的时候就要写好引用， 不能动态的或者使用模版字符串去使用变量名
// import {'get' + 'Name'} from './c.js' 这个代码是错误的

// import 、 export 都是不可以写在if语句里面 

// import如果重复导入多个，后续编译的时候只会执行一次不会重复引入
console.log(time)
console.log(name, age)
console.log(item)
// 可以修改
item.name ='hesy'
console.log(item)
// setInterval(() => {
//   console.log(time)
// },1000)

Func()


console.log(nameProp,yyy,qqq)
zzz()


// export {default as Info} from './a.js'



// import() 这种可以实现动态加载， 返回primise

const fatc = 1
if (fatc) {
  import('./f.js')
} else {
  import('./g.js')
}
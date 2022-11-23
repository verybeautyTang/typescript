// ES6
// export 【可以导出变量、常量、类、函数】

export const name = 'lison';
export const age ='ss'

const item = 'akjdsfh';
const aa = 'ssdf';
const  bb = 'ass';
export {
  aa,
  bb,
  item
}

export class Item {}

export function create(){}

// 可以进行重命名

function A(){}
class B {};
const cc =''
export {
  A as FunctionA,
  B as ClassB,
  cc as stringC
}
// import 
// export default 

// exports

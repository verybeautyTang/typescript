//  类型推论

// 基础
let a = 'sss';
// a = 122 a会报错，这就是基础的类型推论

// 多类型联合

let arr4 = ['1','we',12];
arr4 = [2,2,2,'wer']


window.onmousedown = (mounseEvent)  =>{
  console.log(mounseEvent)
}
// 上下文类型

interface Info {
  name: string
}
let infox:Info;
const infoy = {name: 'xxx'}
// 兼容性

// 函数兼容性
// 参数个数

// 枚举

// 类

// 泛型
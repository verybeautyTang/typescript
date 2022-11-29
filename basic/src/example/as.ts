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

// 函数重载

function merge(arg1: number, arg2: number):number
function merge(arg1: string, arg2: string):string
function merge(arg1: any, arg2: any) {
  return arg1 + arg2
}

// 枚举

enum StatusAs {
On,
Off
}

let s_as = StatusAs.Off
s_as = 1


enum AnimalStatus {
  Dog,
  Cat
}

// class AnimalClass {
//   public

// }
// 类

// 泛型

// 类型参数【使用的时候会变成特定的参数的部分]
interface Data<T>{
  data: T
}
let data1: Data<number>
let data2: Data<string>

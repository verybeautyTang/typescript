// this

import { NoEmitOnErrorsPlugin } from "webpack"

// class Counters {
//   constructor ( public count: number  = 0) {
//   }
//   public add (value: number): number {
//     this.count += value;
//     return this
//   }
//   public substract  (value: number): number {
//     this.count -= value;
//     return this
//   }
// }

// let count1 = new Counters (10);
// // 可以实现链式调用
// console.log(count1.add(4).substract(1))

// class PowCounter extends Counters {
//   constructor (public count: number = 0) {
//     super(count)
//   }
//   public pow(value: number): number {
//     this.count = this.count ** value;
//     return this
//   }
// }

// let pows = new PowCounter(11);
// pows.add(3).substract(11).pow(12)

// 索引
// interface索引类型查询操作符 keyof
interface IProps {
  name: string
  age: number
}
let infor: keyof IProps
infor = "age"
infor = "name"

// 泛型索引类型操作符  keyof,不包括never
function getValue<T, K extends keyof T>(obj: T, name: K[]): T[K][] {
  return name.map(n => obj[n])
}

const inforObj = {
  name: "lison",
  age: 18,
}
let valuesItem = getValue(inforObj, ["name", "age"])
console.log(valuesItem)

// 索引访问操作符号[]
type NameType = IProps["name"]

interface IPropsData {
  a: never
  b: never
  c: string
  d: null
  e: number
  f: object
  g: undefined
}

type Test = IPropsData[keyof IPropsData]

// 映射类型
interface IInfo {
  age: number
  name: string
  sex: string
}

// 这就是映射类型
type ReadOnlyType<T> = {
  readonly [P in keyof T]: T[P]
}

// Pick Record 都是内置的映射类型
// Record 将属性改为其他值的场景
type Pick1<T, K extends keyof T> = {
  [P in K]: T[P]
}

interface IInfo2 {
  age: number
  name: string
  sex: string
}

const infor2: IInfo2 = {
  name: "jasmine",
  age: 18,
  sex: "s",
}

// function picking<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
//   const res = {}
//   keys.map(key => {
//     res[key] = obj[key]
//   })
//   return res
// }

// function mapObject<K extends string | number, T, U>(
//   obj: Record<K, T>,
//   f: (x: T) => U
// ):Record<K, U> {
//   const  res = {}
//   for (const key in obj) {
//     res[key] = f(obj[key])
//   }
//   return res
// }

// 同态： 两个相同类型的数据保持映射

type Proxy<T> ={
  get(): T,
  set(value: T): void
}

type Proxyify<T> = {
  [P in keyof T]: Proxy<T[P]>
}

// 合并
function xproxy<T>(obj:T): Proxyify<T> {
  let res = {} as Proxyify<T>
  for (const key in obj) {
    res[key] = {
      get: () => obj[key],
      set: (value) => obj[key] = value
    }
  }
  return res;
}
let propsItem = {
  name: 'proxy',
  age: 123234
}

let proxyify2 = xproxy(propsItem);
console.log(proxyify2.name.set('wwww'))
console.log(proxyify2.name.get())

// 拆包
function unproxy<T>(t: Proxyify<T>): T {
  let res = {} as T;
  for (const key in t) {
    res[key] = t[key].get();
  }
  return res;
}
let uno = unproxy(proxyify2)
console.log(proxyify2)
console.log(uno)

// 增加或移除特定修饰符【使用 + / -】

type DeleteReadOnlyType<T> = {
  -readonly [P in keyof T]: T[P]
}

// unknown类型
// 1、任何类型都可以赋值给unknown类型
let value2: unknown
value2 = '11',
value2 ='wewe'

// 2、如果没有类型断言或者基于控制流的类型，此时她只能赋值给自身或者是any类型
 let value3:unknown
 value2 = value3


// 3、如果没有类型断言或者基于控制流的类型，不能在它上面进行任何操作
let value4:unknown

// 4、unknown与任何其他类型组成的交叉类型，最后都等于其他类型

type type1 = string & unknown
type type2 = number & unknown
type type3 = null & unknown
type type4 = undefined & unknown

 // 5、unknown与其他类型组成的联合类型【除了any】，都等于unknown类型

 type type8 = string | unknown
 type type5 = number | unknown
 type type6 = null | unknown
 type type7 = undefined | unknown

 // 6、 nerver类型是unknown的子类型

 type type9 = never extends unknown ? true : false


 // 7、 keyof unknown等于类型never
 type type10 = keyof unknown


 // 8、只能对unknown进行等或者不等操作，不能进行其他操作
 let valuex: unknown
//  value2 += valuex 报错
 

// 9、 unknown类型的数据不能访问它的属性、作为函数调用和作为类创建实例
let value10: unknown
// value10.age 
// value10()
// new value10()

// 10、使用映射类型时遍历时候是unknow属性 不会映射任何类型

type type11<T> ={
[P in keyof T]: number
}
type type12 =type11<any> // [x: string]: number
type type13 =type11<unknown> // {}



// 条件类型[类似于三元操作符] T extends U ? X : Y

type Type2<T> = T extends string ? string : number
let index: Type2<123>
let index2: Type2<'123'>
// 分布式条件类型

type Type3<T> = T extends any ? T : never
type Type4<T> = Type3<number | string>

type Type5<T> = T extends string ? string :  T extends number ? number :  T extends boolean ? boolean : T extends undefined ? undefined : T extends () => void ? () => void : object
type Type6<T> = Type5<() => void>
type Type7<T> = Type5<string[]>

type Type8<T> =  {
  [K in keyof T]:T[K] extends (() => void) ? K : never
}[keyof T]

interface IPart {
  id:  number,
  name: string,
  substract: IPart[],
  updatePart(newVal: string): void
}

type Test1 = Type8<IPart>

// infer： 用于推断类型

type Type10<T> = T extends Array<infer U> ? U : T;

type type15 = Type10<string[]>


// Exclude<T, U>
type Type12 = Exclude<'a' | 'b' | 'c' | 'd', 'a'>

// Extract<T, U>,选取出来T里面可以赋值给U的数据
type Type13 = Extract<'a' | 'b' | 'c' | 'd', 'a'>

// Nonullable<T> 从T里面去掉null和undefined

type Type14 = NonNullable<string | number | null | undefined>

// ReturnType<T>获取函数类型的返回值类型
type Type16 = ReturnType<() => string>

// InstanceType<T> 只要T是构造函数就可以
// type Type17 = InstanceType()
class AClass {
  constructor(){};
}
type T1 = InstanceType<typeof AClass> // AClass

type T2 = InstanceType<never> // never

type T3 = InstanceType<any> // any

type T4 = InstanceType<string> // 报错
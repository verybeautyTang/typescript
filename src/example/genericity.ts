//  泛型 [主要是加强对类型的检测]

const getArray =<T> (value: T, times: number = 5): T[] => {
  return new Array(times).fill(value)
}


getArray<number[]>([1,1,2,3,32,4,34,35], 4)



// 泛型变量 T -> 并不是一个固定的用法， 可以用其他的大写字母代替～


// [T,U] 返回的是元组构成的数组
const getArray1 =<T, U> (value: T, data: U, times: number): [T,U][] => {
  return new Array(times).fill([value, data]);
}


// 使用泛型定义函数类型

let getArray2 :<T> (value: T,  times: number) =>T[]

getArray2 = (value: any, times: number) => {
  return new Array(times).fill(value)

}


// 使用泛型变量使用类型别名

type GetArray3  = <T, U> (value: T, data: U, times: number) =>T[]

let getArray3:GetArray3 = (value: any, data: any, times: number) => {
  return new Array(times).fill(value)
}


// 泛型变量可以提升到最外层
interface ArrInter<T> {
  [ar: T, times: number]: T[],
  array: T[];
}


// 泛型约束

interface IValue {
  length : number;
}

const getArray5= <T extends IValue>(value: T, times: number): T[] =>{
  return new Array(times).fill(value)
}
// getArray5(2334234, 4)


// 在泛型约束中使用类型约束

const getProp = <T,K extends T>(object: T, getName: K) => {
  return object[getName]
}
getProp({
  a: 'a',
  b: 'b',
  c: 'c',
}, 'c')
// 交叉类型[取多个类型的并集，使用&]
const mergeFunc = <T, U>(arg1: T, arg2: U,): T & U => {
  let res = {} as T & U;
  res = Object.assign(arg1, arg2);
  return res;
}
console.log(mergeFunc({ a: 'a' }, { b: 'b' }))

// 联合 [只要符合其中一种类型就可以，使用 |]
const getLengthAd = (content: number | string):number => {
  if (typeof content === 'string') return content.length
  else return content.toString().length
}
console.log(getLengthAd('324243'))


// 类型保护

const valueList = ['111',1111]
const getRandomValue = () => {
  const numbers = Math.random() * 10;
  if( numbers < 5) return valueList[0]
  else return valueList[1]
}

// 这里是重点哦【 instanceof  typeof 】
function isString(value: number | string): value is string  {
  return typeof value === 'string';
}

const item = getRandomValue();
if(isString(item)) {
  console.log(item.length)
} else {
  console.log(item.toFixed())
}

// null和undefined

let values: string | undefined = '123'
values = undefined


const sumFunc = (x: number, y?:  number) => {
  return x + y?? 0;
}


const getLengthAdd = (value: string | null): number => {
  // if ( value == null) return 0; return value.length
  return (value || '').length
}

// 类型断言

// 类型保护和类型断言
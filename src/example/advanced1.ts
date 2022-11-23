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

// 类型别名： 给一种类型取另一个名字

  // type
type TypeString = string;
let strx: TypeString
strx = 'ssss'

  // 泛型
type PositionType<T> = {x: T, y: T}
const positionOne :PositionType<number>  = {
  x: 1,
  y: 1
}


// 可以在属性中引用类型别名自己
// 这个时候不可以用extends、 implements
type Childs<T> = {
  current: T,
  child?: Childs<T>,
}

let ccc: Childs<string> = {
  current: 'person',
  child: {
    current: 'children',
  }
}


type Alias = {
  num: number,
}


type Name = 'lison'
// const name23: Name = 'hhh' // 报错， 这里的lison是类型


type Direction = 'one' | 'two' | 'three' | 'four'
function getEnglish(direction: Direction): string {
  return direction.substring(0,1)
}


  // 可辨识类型两要素
  /**
   * 1、具有普通的单利类型属性
   * 2、一个类型别名包含了那些类型的联合
   */

  interface Square {
    kind: 'square',
    size: number,
  }

  interface Rectangle {
    kind: 'rectangle',
    height: number,
    width: number,
  }

  interface Circle {
    kind: 'circle',
    radius: number,
  }

  // 联合类型
  type Shape = Square | Rectangle | Circle


  function assertNever (s: never): never {
    throw new Error("error");
  }
  function getArea (s: Shape): number {
    switch(s.kind) {
      case 'square': return s.size * s.size;
      break;
      case 'rectangle': return s.height * s.width;
      break;
      case 'circle': return Math.PI * s.radius * 2; break;
      default:  return assertNever(s)
    }
  }


  // 完整性检查
   // 1、在tsconfig里面把strictNullChecks类型打开
   // 或者写一个assertNever类型的数据返回即可
   
// 正常描述
interface INameInfo {
  firstName: string;
  lastName: string;
}
const getFullName= ({firstName, lastName}: INameInfo) => {
  return `${firstName} ${lastName}`;
}

getFullName({
  firstName: 'jasmine',
  lastName: 'www'
})

// 指定支持可选属性
interface IColor {
  type: string;
  color?: string; // 指定可选属性
}
const getColor =({color, type}: IColor) =>{
  return ` A ${color ? color : ''} ${type}`
}

// 多余属性检查
// 使用类型断言


// 只读属性

interface IReadOnly {
   readonly name: string;
}

interface ArrInter {
  0: string,
  readonly  1: number

}
let arr11:ArrInter = ['1',2]
const data =({name}:IReadOnly) => {
  name = 'wwww'
}

//  写成函数的形式
type IAddFunc = (num1:number, num2: number) => number

const AA:IAddFunc =(num1, num2) => num1 + num2


// 索引类型
interface IRoleDic {
  [id: string]: number
}

const role: IRoleDic = {
  'sdkfhjs': 123
}


// 接口的继承

interface IV{
  color: string
}
interface ICarrot  extends IV {
  size: string
}


// 混合类型接口
interface  ICounter {
  (): void,
  count: number
}

// 在js中的闭包的意思啊
const getCount = ():ICounter => {
  const c = () => {c.count++};
  c.count = 0;
  return c;
}
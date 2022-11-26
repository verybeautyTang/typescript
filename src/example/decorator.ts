// 装饰器 
// 使用@+名字【名字随便起，但是一定要是一个函数】 装饰器不能用于声明文件中.d.ts这种
// 装饰器工厂，就是函数里面返回一个函数


// function setProp (target:any) {
//   // ...
// }
// @setProp


// // 装饰器工厂
// function setPropFac () {
//   return function () {}
// }

// @setPropFac()
// function setName () {
//   console.log('get setName')
//   return (target: string) =>  {
//     console.log('first')
//   }
// }

// function setAge () {
//   console.log('get setAge')
//   return (target: string) =>  {
//     console.log('setAge')
//   }
// }

// @setName('ss')
// @setAge()
// class clsaaDes {

// }



// 类装饰器【在类声明之前声明。且要紧挨着要装饰的内容】
let sign = null;
function getSign (name: string) {
  return (target: new() => any) => {
    sign = target;
    console.log(target.name)
  }
}
@getSign('jasmine')
class SignClass {
  constructor() {}
}
console.log(sign === SignClass) // true
console.log(sign === SignClass.prototype.constructor) // true


function addSign(constructor: new() => void): void {
  constructor.prototype.name = "addSign"
}

@addSign
class AddSign {}
interface AddSign {
  name: string
}
const addd = new AddSign()
console.log(addd.name)



function classicalDes<T extends { new( ...agrs: any[]):{} }>(target: T) {
  return class extends target {
    public newProperty  = 'newProperty';
    public hello = ' hello'
  }
}
@classicalDes
class Greater {
  public property = 'property';
  public hello: string;
  constructor (m: string) {
    this.hello = m;
  }
}


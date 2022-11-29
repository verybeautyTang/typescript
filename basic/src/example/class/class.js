// es5和es6都是通过new来创建实例的

// es5做为类【继承】

// this.x = x;
// this.y = y;

// Point.prototype.getPosition = function() {
//   return '(' + this.x + ',' + this.y + ')';
// }

// var p1 = new Point(1,1)
// console.log(p1)
// console.log(p1.getPosition())

// var p2 = new Point(2,2)
// console.log(p2)
// console.log(p2.getPosition())

// es6
class Point1 {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  getPosition() {
    return `${this.x} ${this.y}`
  }
}

var p3 = new Point1(1, 1)
console.log(p3)
console.log(p3.getPosition())

// 属性都是在实例上面的
// 方法都是在类上面的

console.log(p3.hasOwnProperty("x")) // true

console.log(p3.hasOwnProperty("getPosition")) // false

console.log(p3.__proto__.hasOwnProperty("getPosition")) // true

let obj = {
  _age: 18,
  set age(newValue) {
    if (newValue > 18) {
      console.log("怎么变老了")
    } else {
      console.log("我还年轻")
    }
  },
  get age() {
    return this._age
  },
}
obj.age = 19
console.log(obj.age)

class Info {
  constructor(age) {
    this._age = age
  }
  set age(newValue) {
    if (newValue > 18) {
      console.log("怎么变老了")
    } else {
      console.log("我还年轻")
    }
    this._age = newValue
  }
  get age() {
    console.log("this._age", this._age)
    return this._age
  }
}

let ages = new Info(20)
ages.age
ages.age = 17

// 函数的创建形式
const funcc = function () {}
function xxx() {}

// class创建的两种形式
// class xx {}

// const Infos = class {
//   constructor(age) {
//     this._age = age
//   }
// }
// 实际的类名是前面的变量而不
// let ages = new Infos(20);
// ages.age

// 静态方法
// 使用static关键字来标识静态方法，表示只有本class可以使用

class StaticClass {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.name = "static"
  }
  getPosition() {
    return `${this.x} ${this.y}`
  }
  static getClassName() {
    return `${this.name}`
  }
}

const s = new StaticClass(1, 1)
console.log(s.getPosition())
console.log(StaticClass.getClassName())

// 实例属性的方法

class Points4 {
  z = 0
  constructor(x, y) {
    this.x = x
    this.y = y
    this.name = "static"
  }
  getPosition() {
    return `${this.x} ${this.y}`
  }
  static getClassName() {
    return `${this.name}`
  }
}

console.log(new Points4())

// 静态属性 es6明确规定只有静态方法 没有静态属性
class StaticClass1 {
  constructor() {
    this.x = 0
  }
}
StaticClass1.y = 1
const pp = new StaticClass()
console.log("pp.x", pp.x)
console.log("pp.y", pp.y)

// 私有方法

// 方法一 ： 通过命名实现，有_的默认要求为私有【但是不太现实，约束能力不强】
class PrivateClass {
  func1() {}
  _func1() {}
}

// 方法二：

const _func2 = () => {}
class PrivateClass2 {
  func1() {
    _func2.call(this)
  }
}

// 方法三： 使用symbol

const func1 = Symbol("func1")
class PrivateClass3 {
  static [func1]() {}
}


// 私有属性 # 
// 在变量前面➕# 表示私有属性

class PrivateClass4 {
  #end = 12
}


// new.target属性【一般用于构造函数中】

class PrivateClass5  {
  constructor () {
    console.log(new.target)
  }
  
}
const pp1 = new PrivateClass5();
console.log('pp1pp1pp1', pp1)

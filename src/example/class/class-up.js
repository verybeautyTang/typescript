// es5继承[通过修改原型链]

function Food() {
  this.type = "Food"
}
Food.prototype.getType = function () {
  return this.type
}
function Vegitable(name) {
  this.name = name
}

Vegitable.prototype = new Food()
const tomato = new Vegitable("tomato")
console.log(tomato.getType())

// es6继承
class Parent {
  constructor(name) {
    this.name = name
  }
  getName() {
    return this.name
  }
}

class Child extends Parent {
  constructor(name, age) {
    super(name);
    this.age = age;
    this.type = 'child'
  }
  childPoint () {
    super.getName()
  }
}

const c = new Child('lilian', 12)
console.log(c);
console.log(c.getName())
console.log('childPoint', c.childPoint())

// 使用了父类的实例 既有父类的实例 也有子类的实例
console.log(c instanceof Child)
console.log(c instanceof Parent)


// 获取构造函数的原型对象
console.log(Object.getPrototypeOf(Child) === Parent)


// super 
// 1、 super作为函数使用的情况： 代表父类的constructor，子类的构造函数中必须调用super函数，没有参数可以不传，但是一定要调用
// 2、作为对象
  // 在普通方法中，指向的父类的原型对象 
  // 在静态方法中，指向的是父类
class Super {
  constructor() {
    this.name = 'super'
  }
  getName() {
    return this.name
  }
}
Super.getType = () => {
  return 'is super'
}

class ChildSuper extends Super {
  constructor() {
    super()
    console.log('constructor',super.getName())
  }
  getSuperName() {
    console.log('getSuperName',super.getName())
  }
  static getSuperType () {
    console.log('getSuperType',super.getType())
  }
}
const cs = new ChildSuper();

cs.getSuperName()

// cs.getSuperType() // 这里会报错的哦，因为这里super指向父类本身，加一个static就好啦～



 
// prototype属性
 
var objs = new Object();
console.log(objs.__proto__ === Object.prototype)

// 子类的__proto__指向父类本身
// 子类的prototype的__proto__属性指向父类的prototype
// 实例的__proto__属性的__proto__指向父类实例的__proto__



// 原生构造函数的继承
// 在es5中，原生构造函数是没有办法继承的
// Boolean Number Array Date Function Error Object String RegExp


class CustomerArray extends Array {
  constructor(...args) {
    super(...args)
  }
}
const arr = new CustomerArray(3,4,5);
// arr.fill('+')
console.log(arr)



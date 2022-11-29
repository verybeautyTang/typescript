// 基础
class Point {
  public x: number
  public y: number

  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }
  public getPosition() {
    return `${this.x} ${this.y}`
  }
}

const px = new Point(1, 2)
console.log(px)

// 继承 这里和js的类没有区别
class Parent {
  name: string
  constructor(name: string) {
    this.name = name
  }
  public getName() {
    return this.name
  }
}

class Child extends Parent {
  constructor(name: string) {
    super(name)
  }
}

// 修饰符

/**
 * public
 * protect
 * private
 */
// public: 公共的，定义的在外部可以通过实例去访问的【例子如上面基础可见】

// private： 私有的， 修饰的属性在类的定义外面是无法访问的

class PrivateClass {
  private name: string
  constructor(name: string) {
    this.name = name
  }
}
const proviteP = new PrivateClass("19")
console.log(PrivateClass.name) // 不能通过proviteP访问，只能通过PrivateClass访问

// protected: 受保护的修饰符
class ProtectedClass {
  protected name: string
  constructor(name: string) {
    this.name = name
  }
  protected getName() {
    console.log(this.name)
  }
}
class ProtectedChild extends ProtectedClass {
  constructor(name: string) {
    super(name)
    console.log(super.name)
    console.log(super.getName())
  }
}

const protectC = new ProtectedChild("19")

// readonly: 将属性设置为只读

class ReadonlyClass {
  public readonly name: string
  constructor(name: string) {
    this.name = name
  }
}

const read = new ReadonlyClass("sdfsadf")
// read.name = 'sdf' // 这里会报错 因为name是只读属性 不能赋值
console.log(read.name)

// 参数属性[给constructor属性 任意加上四个修饰符之一]

class A {
  constructor(private name: string) {}
}
const a1 = new A("jasmine")
console.log(a1)

// 静态属性
class StaticCl {
  // public static name: string = '1111'; // 这里也会报错÷
  public static getAge() {
    return StaticCl.name
  }
  constructor() {}
}
const ppp = new StaticCl()
// console.log(ppp.name) // 这里会报错
console.log(StaticCl.getAge())

// 可选类属性: 用？来代替即可

class CanbeClass {
  public name?: string
  constructor(name?: string) {
    this.name = name
  }
}
const canbe = new CanbeClass()
console.log(canbe.name)

// 存取类

class GetSetClass {
  private name: string;
  public info : string;
  constructor(name: string) {
    this.name = name
  }
  get Info() {
    return this.info
  }
  set Info(info: string) {
    this.info = info
    console.log(this.info)
  }
}
const infos = new GetSetClass('hellp~');
infos.info ='info'
// infos.Info("getset")
console.log(infos.Info)


// 抽象类: 一般用于其他类的继承 不用于直接创建实例 abstract

abstract class People {
  public name: string
  public abstract age: number;
  constructor(name: string, age: number) {}
  public abstract getName(): void;
  abstract get Age(): number;
  abstract set Age(age: number); // set是不需要标记返回值类型的，如果标记了就会报错
}

class Man extends People {
  public name: string;
  public age: number;
  constructor(name: string, age: number) {
    super(name, age)
    this.name = name
    this.age = age
  }
  public getName () {
    console.log(this.name)
  }
  get Age () {
    return this.age
  }
  set Age (age: number) {
    this.age = age
  }

}

const man = new Man('jasmine', 22)
man.getName()


// 对前面知识的补充

// 接口与类结合
interface FoodInterface {
  type: string;
  name: string;
  age?: number;
}

class FoodClass implements FoodInterface {
  public  type: string;
  public name: string;
  public static age: number
}

// 接口继承类【只继承成员、成员类型，但是不能继承实现】
class B {
  protected name: string
}

interface I extends B {}

class D  extends B implements I {
  name: string;

}


// 在泛型中使用类

const create =<T>(c: new() => T): T => {
  return new c()
}
class CreatClass {
  public name: string
}
create(CreatClass)
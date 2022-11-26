// 对象的混入

// 把两个对象或者类混合到一起，做到代码复用
interface ObjectA {
  a: string;
}

interface ObjectB {
  b: string
}

let AAA: ObjectA ={
  a: 'a'
}
let BBB: ObjectB = {
  b: 'b'
}

// 既有A的特性又有B的特性
let AB:ObjectA & ObjectB = Object.assign(AAA, BBB)
console.log(AB)



// 类的混入
class AV  {
  public isA: boolean = false;
  public funcA() {}
}
class ABCC {
  public isB: boolean = false;
  public funcB() {}
}

class ABV implements AV, ABCC {

  isA: boolean = false;
  isB: boolean = false;
  funcA () {
    console.log('first')
  }
  funcB(){
    console.log('first')
  }
  constructor () {}
}


// 类的混合的写法

function minxin(base: any, front: any[] ) {
  console.log(front)
  front.forEach((item) => {
    Object.getOwnPropertyNames(item.property).forEach((key) => {
      console.log(key);
      base.property[key] = item.property[key]
    })
  })
}
minxin(ABV, [ABCC, AV])
const ab = new ABV();
console.log(ab)
// 如何引入命名空间

// tslint:disable-next-line:no-reference
/// <reference path='./namespace.ts' />

// tslint:disable-next-line:no-reference
/// <reference path='./namespace1.ts' />

// 两个同命名的namespce打印出来是什么呢？

// 使用命令tsc
// outFile 来指定输出文件 tsc --outFile src/tsNamespace/index.js ./src/tsNamespace/index.ts
let isLetter1 = Validation.checkLater('aksdhkasdhk')
console.log(isLetter1)

// 现在很少使用namespace，一般都是使用module进行操作



// 使用别名
namespace Shape {
  export namespace Square {
    export class A {};
    export class B {};
  }
}

// 使用别名的方案
import shape = Shape.Square

let abs = new shape.A();



// 模块解析

// 相对模块
// 相对导入 / ./ ../
// 分别表示 根目录 上级目录 上上级目录

// 模块的解析策略【node / classical】  classical: es6模块 node： 就是node的解析策略

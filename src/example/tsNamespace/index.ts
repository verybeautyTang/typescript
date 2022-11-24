// 如何引入命名空间

// tslint:disable-next-line:no-reference
/// <reference path='./namespace.ts' />

// tslint:disable-next-line:no-reference
/// <reference path='./namespace1.ts' />

// 两个同命名的namespce打印出来是什么呢？
// 使用命令tsc
// outFile 来指定输出文件
let isLetter = Validation.checkLater('aksdhkasdhk')
console.log(isLetter)

// 现在很少使用namespace，一般都是使用module进行操作

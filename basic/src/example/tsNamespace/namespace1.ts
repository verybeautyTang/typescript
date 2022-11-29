// 什么时候使用namespace 什么时候使用module
// namespace: 防止全局污染
// module:  封装了某个工具需要


// namespace 类似于一个大的对象


// tslint:disable-next-line:no-namespace
namespace Validation {
  const isLetterReg1 = /^[a-zA-Z] + $/g;
  export const isNumverReg1 = /^[0-9]+ $/g;
  export const checkLater1 = (text: string): boolean => {
    return isLetterReg1.test(text)
  }
}

// 如何引用命名空间

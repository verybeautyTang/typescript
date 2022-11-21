// 数字枚举【枚举成员有一个初始值】

enum Status {
  Uploading = 22,
  Success,
  Error,
}

console.log(Status.Error)
console.log(Status['Success'])
// 反向映射


console.log(Status)


// 字符串枚举
enum Message {
  Error = 'sorry Error',
  Success ='HOlo  Success',
  Failed = Error
}
console.log(Message.Success)

// 异构枚举: 既包含数字的值 又包含字符串的值
enum Result {
  Success = 1,
  Failed = 'FAILED',
}

// 枚举成员类型和联合枚举类型 , 就可以作用为类型,以下几种情况可以

// 1、不带初始值的枚举成员
enum E {
  A
}
// 2、值为字符串字面量
enum E1 {
  B = 'b'
}
// 3、值为数值字面量
enum E2 {
  A = -1
}

// 枚举成员类型
enum Animal {
  Dog = 'dog',
  Cat = 'cat'
}

interface Dog {
  type: Animal.Dog
}


// 联合枚举类型
enum Status {
  Off,
  On
}
interface Light {
  status: Status
}

// 运行时的枚举



// const enum: 在定义了之后会编译成真实的enum对象

const enmu Animal1 {
  Off,
  On
}
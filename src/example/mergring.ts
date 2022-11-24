// 声明合并【命名空间、类型、值】image.pngimage.png


// 补充
// 多个成员接口里面定义的类型是不应该重复的 重复的话就被报错
// 函数成言都是函数的重载

interface MessageA {

  name: string;
  getRes(input: string): number
}

interface MessageA {
  // name: number; // 报错了
  name:string
}

let msg:MessageA
msg = {
  name: 'jasmine',
  getRes (text: any): any  {
    if(typeof text === 'string') return text.length
    return String(text)
  }
}

console.log(msg.getRes('234243'))

// 合并接口
interface InfoInter {
  name: string;
}
interface InfoInter {
  age : number;
}
let infoInter: InfoInter;
// 此时infoInter 的属性是 name、age的合并
infoInter = {
  name : 'www',
  age : 23
}


// 合并命名空间[同名的命名空间也是会合并在一起的]
// 如果在命名空间没使用export导出的话在另一个命名空间是找不到的

// tslint:disable-next-line:no-namespace
namespace ValiName1 {
  const xx = () => {
    console.log('first')
  }
  export const VALI_NAME = 'aaa'
}
// tslint:disable-next-line:no-namespace
namespace ValiName1 {
  export const VALI_AGE  = 18;
  // xx() .报错

}


// 相当于

// 不同类型合并
  // 命名空间和函数[要求函数写在前面]

  // 同名的类要定义在同名的命名空间前面 [要求类写在前面]
  class Validation{
    constructor () {};
    public checkType () {}
  }
  namespace Validation {
  export const numberReg = /^[0-9] + $/
  }

  console.dir(Validation.numberReg)


  // 函数也是一样的，声明合并的时候也是需要函数写在前面的
  function countUp () {
    countUp.count ++;
  }

  namespace countUp {
    export let count = 0;
  }

  console.log(countUp.count)



  // 命名空间与枚举【给枚举拓展内容，没有先后顺序要求】
  enum Colors {
    red,
    green,
    pink
  }

  namespace Colors {
    export const yellow = 3
  }
  console.log(Colors)
// 基础类型
  // boolean类型
    let bool: boolean;
    bool  = true;
    // 或者
    let bool1: boolean = false;

  // 数值类型[2进制、8进制、16进制都是可以互相转化的]
    let num: number = 0;
    num = 0o10101 // 8
    num = 0b10101 // 2
    num = 0x10101 // 16


  // 字符串类型
     let str: string = "abc";
     str = `数值是${num}`

  // 数组类型
    // 写法1
    let arr1: number[];
    arr1 = [1, 2, 3]; 

    // 写法2
    let arr2: Array<number> = [1,2,3,4]

    // 数组既可以是string类型、也可以是number类型
    let arr3: (string | number)[] = [1,2,3,4,'222',',']


  // 元祖类型[必须一一对应上]
    let tuple: [string, number, boolean]
    tuple = ["abc",2,false ]

  // 枚举类型[如果不写后面的 = xxx， 默认第一个等于0， 后面的依次累加1]
    enum Roles {
      ADMIN,
      MANAGER,
      USER
    }
  
  // any类型： 任何类型[一般不要用，any得不到没有价值的信息]
    let any1: any;
    any1 = {
      a: 1,
      b: 2,
      c: 3,
      d: 4,
      e: 5,
      f: 6,
      g: 7}
      any1 = false;
      any1 = 1;

  // void类型:  什么类型都不是
    // 没有明确的说返回什么类型 默认会返回undefined； 制定返回值为void，可以赋值给null或者undefined
    const consoleText =(text: string): void => {
      console.log(text);
    }
    let v: void = undefined;
    v = null;
  

  // null & undefined
    let und:undefined = undefined;
    let nul: null = null;
    // null & undefined是其他类型的字类型，所以可以赋值给其他类型

  
  // never类型[一般是抛错误、或者根本没有返回值的就是never类型]
    // never是任意类型的子类型，但是没有任何类型是never的子类型
    // 就是所有的类型都可以被赋值给never，但是nerve不能赋值给任意类型
      const errorFunc = (message: string):never => {
        throw new Error(message)
      }

  // object类型
    let obj = {
      name: 'jasmine'
    }
    let obj2 = obj
    obj2 = {
      name: 'shown'
    }
    console.log(obj2)


    function getObject(obj: object) {
      console.log(obj)
    }


  // 类型断言
    // 两种方案 
    // <string>target)
    //(target as string) jsx只能用这种方案去做
    const getLength = (target: string | number): number => {
      if ((<string>target).length || (target as string).length === 0) {
        return (<string>target).length;
      } else {
        return target.toString().length;
      }

    }

    

    
      
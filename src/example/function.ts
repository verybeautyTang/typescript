// /给函数定义类型
function Add (num1: number, num2: number):number {
  return num1 + num2;

}

const Add1  = (num1: number, num2: number):number => {
  return num1 + num2;

}

let Add2: (num1: number, num2: number) => number

Add2 = (arg1, arg2) => arg1 + arg2;

// Add2(1,'2')



interface IProp {
  x: number;
  y: number;
  z: number;

}

// let TProp: Add2


// 函数使用可选参数
// 可选参数一定要在必选参数的后面

let Add3 = (num1: number, num2: number, num3?: number) => num1 + num2 + num3;
Add3 = (arg1:number,arg2 :number, arg3:number) => arg1 + arg2 + (arg3 ? arg3 : 0);


// 默认参数
// 如果用户默认不填写的话默认就是当前的数据

type Add4 = (num1: number, num2: number ) => number; 

let add4: Add4

add4 = (arg1, arg2) => arg1 + arg2;

// console.log(AAdd4dd4())


// 数据组合拆分

// .... 是拆解操作符号

let handleData1 = (arg: number, ...args: number[])=> {
  // ...
}


// 函数重载

function handleData(s: string): string[];
function handleData(s: number): number[];

// 编译器可以根据传入的参数返回特定的类型【函数实体不是重载的一部分】而且函数重载只能用function，不可以用类型别名或者接口
function handleData (s: string | number){
  if(typeof s === 'string') {
    return s.split('')
  } else {
    return s.toString().split('').map((i) => Number(i))
  }
}
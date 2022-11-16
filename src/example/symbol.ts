// symbol 是es6新增的语法类型 是基本数据类型【用于表示独一无二的数值】

const s = Symbol();
console.log(s)

const s1 = Symbol();
// console.log(s === s1) // 是不会相等的


let props = 'name';
let info = {
  // name : 'jasmine'
  [`my${props}is`]: 'jasmine'
}


const s2 = Symbol('name')
let info2 = {
  [s2]: 'jasmine'
};

//  symbal作为属性名称的话只可以用
console.log(info2[s2])


// 以下遍历方案都获取不了symbol

for(const key in info2) {
  console.log(key)
}

console.log(Object.keys(info2))

console.log(Object.getOwnPropertyNames(info2))

console.log(JSON.stringify(info2))


// 一下几种方案可以获取到symbol

console.log(Object.getOwnPropertySymbols(info2))

console.log(Reflect.ownKeys(info2))
 

// symbol的方法
// Symbol.for / Symbol.keyFor()

const s3 = Symbol.for('hh')
const s4 = Symbol.for('hh')


// Symbol & Symbol.for的区别： Symbol每一个创建的都是独一无二的 Symbol for会现在全局里面找是否有一致的，如果有直接赋值，如果没有那么再创建 
// 这里的全局 =  当前的页面 + ifarme + 其他

// console.log(s3 === s4) // 这里应该是相等的


Symbol.keyFor(s3) // 入参是使用Symbol.for全局注册的数据 ，如果是传递的是Symbol的话，那么直接返回undified


// 10个Symbol的方法

// Symbol.hasInstance 

// Symbol.isConcatSpreadable 
// concat会让数据先扁平化之后在进行合并，如果使用isConcatSpreadable就不会让数据扁平化了

let ss: number[]  = [1,2]
ss[Symbol.isConcatSpreadable] = false
console.log([].concat(ss, [2,4,5])) 



class C extends Array {
  getName () {
    return 'jasmine'
  }
}


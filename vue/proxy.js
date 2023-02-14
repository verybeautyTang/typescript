

// 定义副作用名字自定义
let activeEffect
function effect(fn) {
  activeEffect = fn;
  fn();
}

// 存放副作用的地方
const bucket = new Set();
// 原始数据
const data =  {text: 'hello world'}
// 对原始数据进行代理
const objs = new Proxy(data, {
  // 对数据进行读取
  get(target, key) {
    if(activeEffect) {
      bucket.add(activeEffect);
    }
    return target[key];
  },
  // 对数据进行设置
  set(target, key, value) {
    // 设置属性值
    target[key] = value;
    //  把副作用取出来执行
    bucket.forEach(fn => fn());
    return true
  },
})

// let newData =''
// function effect () {
//   newData = objs.text;
//   console.log('我现在是：'+ newData)
// }
effect(() =>{
  console.log('first')
  objs.text = 'yeal I changed'
});

setTimeout(() => {
  objs.xx ='222'
}, 1000);


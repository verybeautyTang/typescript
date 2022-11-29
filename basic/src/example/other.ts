// promise async
setTimeout(() => {
  console.log(1)
}, 1000);
console.log(2)


function getIndex(bool: boolean) {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      console.log('promise');
      if(bool){
        resolve('happy new year');
      } else {
        reject('bad new year');
      }
    },1000)
  })
}
getIndex(false).then((res) => {
  console.log(res)
  console.log('promise then')
}).catch((err) => {
  console.log(err)
})


async function asyncFunction () {
  const res = await getIndex(false)
  try {
    console.log(res)
  } catch (err) {
    console.error(res)
  }

}

asyncFunction()


interface Res {
  data: {
    [key: string]: any;
  }
}
namespace axios {
  export function post(url: string, config: object): Promise<Res> {
    return new Promise<Res>((resolve, reject) => {
      setTimeout(() => {
        let res:Res = {data: {}};
        if(url === '/login') {
          res.data.user_id =111
        } else {
          res.data.user_id = 'admin';
        }
        resolve(res)
      },);
    })
  }
}

interface Info {
  user_name: string;
  password: string;
}
async function loginReq({user_name, password}:Info) {
  try {
    console.log(1);
    const res = await axios.post('/login', {
      data: {
        user_name,
        password
      }
    })
    console.log(3);
    return res
  } catch (err) {
    throw new Error('bad for in ');
  }
}

loginReq({user_name: '11111', password: '12313'}).then(res => {
  const {data: {user_id}} = res;
  console.log(user_id)
})
// tsconfig.json

// 动态导入

async function getTime(format: string) {
  const moment = await import('moment');
  return moment.default().format('YYYY-MM-DD')
}

getTime('').then((res) => {
  console.log(res)
})

// 弱类型探测

interface ObjIn {
  name?: string;
  age?: number;
}
let OB ={
  age : 122
}

function printer(info:ObjIn) {
  console.log(info)
}

printer(OB)


// 泛型也可以用...
function mergeAd<T, U extends string> (opt1: T, opt2: U) {
  return {...opt1, opt2}
}

console.log(mergeAd({a: 'a'}, 'name'))

// 导出的方式
export interface FuncInterFace {
  name: string;
  (arg: number): string
}

export class FuncInter{};

class D {}
export { D }
export {D as ClassD}


export * from './b'

export {name} from './b'

export {age as Age} from './b'
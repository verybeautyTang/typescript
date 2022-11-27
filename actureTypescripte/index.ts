 const arrayMap =<T,U>(arr: T[], callback: (T: any, index: number, arr: T[]) => U): U[] => {
  const resultData = [];
  let i = -1;
  while(++i < arr.length) {
    resultData.push(callback(arr[i], i, arr));
  }
  return resultData;
 }

 export = arrayMap
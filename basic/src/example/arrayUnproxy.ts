
type TypeArray<T> = {
  [P in keyof T]: Array<T[P]>
}
function unproxy<T>(t: TypeArray<T>): T {
  let res = {} as T;
  for (const key in t) {
    res[key] = t[key];
  }
  return res;
}
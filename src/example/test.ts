// Array<string>

// type MapType<T> = 

// type newType = MapType<string[]>


type Data<T> = {
  [P in keyof T]: T[P]
}

type Type<T> = T extends (infer U)[] ? U : any;

type testt = Type<Window[]>

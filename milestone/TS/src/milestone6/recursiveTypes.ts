// recursive types in ts,  allows u to defined the type to itself

type LinkedLisst<T> = {
    value:T,
    next:LinkedLisst<T> | null
}

let ll:LinkedLisst<number>={
    value:1,
    next:{value:2, next:{value:3 , next:null}}
}


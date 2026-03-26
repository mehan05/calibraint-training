// oru type irukum
// adhanoda keys ellam eduthu
// loop madhiri iterate panni
// new structure create pannuvom


// conceptually
/**
 * for each key in User
    newType[key] = transformation
 */


// syntax
// type UpdateUser = {
//   [K in keyof User]: User[K];
// };


type User = {
  id: number;
  name: string;
  email: string;
  age: number;
};
// now we are going to make all the property optional

type UpdatedUser = {
    [K in keyof User]?: User[K]
}

// another example
type Features = {
  dashboard: boolean;
  analytics: boolean;
  billing: boolean;
};

type UpdatedFeature = {
    [K in keyof Features]: {
        enabled:Features[K]
    }
}

// it will look like
/**
 * {
  dashboard: { enabled: boolean };
  analytics: { enabled: boolean };
  billing: { enabled: boolean };
}
 */


type UpdatedFeature1  ={
    readonly [K in keyof Features]: Features[K];
}
// vice vrsa to remove readonly use - infront of readonl
// this will convert all the, properties readonly

// custom conditions
type UpdatedFeature2 = {
    [K in keyof Features] : Features[K] extends boolean ? string : number;
}


// changing properties names
type changePropertyName<T> = {
    [K in keyof T as `changed_${K & string}`]:T[K]
}


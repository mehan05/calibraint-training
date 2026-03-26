class StorageContainer<T>{
    private data:T;

    constructor(data:T){
        this.data  = data;
    }

    getData():T{
        return this.data
    }
}

const stringData = new StorageContainer<string>("mehan");
const numberData = new StorageContainer<number>(123);

// generic constraints in class
class StorageContainerWithConstraint<T extends {id:number}>{
    ID:T;
    constructor(id:T){
        this.ID = id;
    }

    getID():T{
        return this.ID;
    }
}

const obj = {id:123};
let constrainData = new StorageContainerWithConstraint(obj);


// using interfaces with generic classes
class ApiResponseStoreClass<T>{
    data:T;
    status:number;
    statusCode:number;

    constructor(data:T,status:number,statusCode:number)
    {
        this.data = data;
        this.status = status;
        this.statusCode = statusCode;
    }
}

interface User{
    id:number,
    name:string
}

const apiStoreClass = new ApiResponseStoreClass<User>({id:123,name:"mehan"},12,12);

// it ensures only one instance of class is created in the entire application

class Database{
    private static instance:Database;

    private constructor(){}

    public static getInstance(){
        if(!Database.instance){
            Database.instance = new Database();
        }
        return Database.instance;
    }


}

let db1 = Database.getInstance();
let db2 = Database.getInstance();
console.log(db1==db2);
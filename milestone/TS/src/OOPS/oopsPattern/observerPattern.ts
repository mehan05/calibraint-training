// observer pattern, it allows us to make react multiple objects, when one is changed

interface Observer{
    update(data:string):void
}


class Subject{
    private observers:Observer[] = [];
    addObserver(observer:Observer){
        this.observers.push(observer);
    }

    notify(data:string){
        this.observers.forEach(ele=> ele.update(data))
    }
}

class Logger implements Observer{
    update(data:string){
        console.log("log",data);
    }
}

let logger = new Logger();
let subject = new Subject();

subject.addObserver(logger);
subject.notify("data changed")

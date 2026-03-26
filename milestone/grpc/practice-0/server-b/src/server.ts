const grpc = require("@grpc/grpc-js");
const proto_loader = require("@grpc/proto-loader");
const path = require("path");
const { whiteList } = require("./interceptor");
const protoDefinition = proto_loader.loadSync(path.join(__dirname,"./protos/split.proto"));
const splitProto = grpc.loadPackageDefinition(protoDefinition);

const helloPackage = splitProto.helloPackage;

function sayHello(call:any,callback:any){
    console.log("hello from server2")
        callback(null,{
            greetString:"hello from server2"
        })
}


const microservice = new grpc.Server({
    interceptors: [whiteList]
});

microservice.addService(helloPackage.HelloClass.service,{
    get_hello_B:sayHello
})


microservice.bindAsync("0.0.0.0:3002", grpc.ServerCredentials.createInsecure(), (error: Error | null, port: number) => {
    if (error) {
        console.error("Failed to bind server:", error);
        return;
    }
    console.log(`server2 running on port, ${port}`);
})
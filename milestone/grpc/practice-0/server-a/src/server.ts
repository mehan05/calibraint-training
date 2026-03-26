const grpc = require("@grpc/grpc-js");
const proto_loader = require("@grpc/proto-loader");
const path = require("path");
const express = require("express");

const app = express();

const protoDefinition = proto_loader.loadSync(path.join(__dirname,"./protos/split.proto"));
const splitProto = grpc.loadPackageDefinition(protoDefinition);

const helloPackage = splitProto.helloPackage;

const server2 = new helloPackage.HelloClass(
    "0.0.0.0:3002",
    grpc.credentials.createInsecure()
);

const metadata = new grpc.Metadata();
metadata.set("ip-address", "127.0.0.1");


app.get("/api/hello", (req:any,res:any) => {
    server2.get_hello_B({}, metadata, (err:any,response:any) => {
        if (err) {
            console.error("error from server B:", err);
            return res.status(500).json({ err:err, message: "Error from server B" });
        }
        res.json({
            message: "response from server B",
            data: response
        });
    });
});

app.listen(3000, () => {
    console.log("express is running on port 3000");
});

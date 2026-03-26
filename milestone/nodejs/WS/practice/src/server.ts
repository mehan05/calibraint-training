import httpServer from "./app.js";
import "dotenv/config";
import { connectDB } from "./config/config.js";

async function startserver(){
    let dbConnectjonStatus = await connectDB();
    console.log(dbConnectjonStatus);
    if(dbConnectjonStatus){
        const PORT = process.env.PORT || 5000;
    
        httpServer.listen(PORT,()=>{
            console.log("server running in port: ",PORT);
        })
    }

}

startserver();
const app = require("./app");
require("dotenv").config()
const connectDB = require("./DB/connect");
async function startServer(){
    
    const PORT = process.env.PORT || 3000;
    await connectDB();

    app.listen(PORT,()=>{
        console.log("server running in port", PORT);
    });

}





startServer();
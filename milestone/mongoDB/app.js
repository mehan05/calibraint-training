const  express = require("express");
const app = express();
const {Router} = require("./routes/route");
app.use(express.json())
app.use("/api/mongo-practice",Router);

module.exports = app;
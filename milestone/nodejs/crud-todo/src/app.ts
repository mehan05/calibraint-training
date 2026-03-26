import express from "express";
import todoRouter from "./routes/todoRoutes.js";
import userRouter from "./routes/userRoutes.js";
export const app = express();
let count = 0;
app.use((req, res, next) => {
  count++;
  let sum = 0;
  for (let i = 0; i < 5e7; i++) {
    sum += i;
  }
  res.send("done");
  // console.log(count);
  // console.log(req.method,req.url);
  next();
});

app.use(express.json());
app.use("/test", (req, res) => {
  console.log("test", count);
});
app.use("/api/todo", todoRouter);
app.use("/api/user", userRouter);

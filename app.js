const express = require("express");
const app = express();
const taskRouter = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
const notFound = require("./middlewares/notFound");
const errorHandler = require("./middlewares/errorHandler");
app.use(express.json());

app.use("/api/v1/tasks", taskRouter);
app.use(notFound);
app.use(errorHandler);



const start = async () => {
  try {
    await connectDB(process.env.DB_LINK);
    app.listen(process.env.PORT??3000, () => {
      console.log("Listining on port " + process.env.PORT??3000);
    });
  } catch (error) {
    console.log(error);
  }
};
start();

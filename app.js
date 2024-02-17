const express = require("express");
const app = express();
const taskRouter = require("./routes/tasks");
const connectDB = require("./db/connect");
require('dotenv').config()
app.use(express.json());

app.use("/api/v1/tasks", taskRouter);
const PORT = 3000;


const start = async () => {
  try {
    await connectDB(process.env.DB_LINK);
    app.listen(PORT, () => {
      console.log("Listining on port " + PORT);
    });
  } catch (error) {
    console.log(error);
  }
};
start()

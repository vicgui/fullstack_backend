const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
//const { PORT } = require("./config");
const db = require("./db");

const app = express();
app.disable("x-powered-by");
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// app.get("/",async(req,res)=>{
//     res.status(200).send('Succesfully request')
// })
// app.listen('8089',() => {
//     console.log(`API listenning on port 8089`)
// })

const teamRouter = require("./resources/team/team.router.js");
const driverRouter = require("./resources/driver/driver.router.js");

app.use("/teams", teamRouter);
app.use("/drivers", driverRouter);

const startServer = async () => {
  await db.connect();
  app.listen("7070", () => {
    console.log(`API listenning on port 7070`);
  });
};
startServer();

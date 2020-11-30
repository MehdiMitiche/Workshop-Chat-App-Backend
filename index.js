const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const messageRouter = require("./routes/messageRouter");

mongoose.connect("mongodb://localhost/chatDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.once("open", () => {
  console.log("DB LUNCHED SUCCESSFULLY");
});

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/test", (req, res) => {
  res.send("Api Working!");
});

app.use("/message", messageRouter);

const server = app.listen(8082, () => console.log("API RUNNING IN PORT 80808"));

const io = require("socket.io")(server);

//listen to every connection
io.on("connection", (socket) => {
  socket.on("new_message", (data) => {
    //Broadcasting the message
    io.emit("new_message", data);
  });
});

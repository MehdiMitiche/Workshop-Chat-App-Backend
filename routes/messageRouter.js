const express = require("express");
const messageController = require("../controllers/messageController");

const messageRouter = express.Router();

messageRouter.get("/", messageController.getmessages);
messageRouter.post("/", messageController.addmessage);

module.exports = messageRouter;

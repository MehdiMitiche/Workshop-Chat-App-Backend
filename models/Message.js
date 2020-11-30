const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  from: {
    type: "string",
    required: "Message Sender is required",
  },
  message: {
    type: "string",
    required: "Message is required",
  },
});

const Message = mongoose.model("Message", MessageSchema);
module.exports = Message;

const Message = require("../models/message");

const getmessages = async (req, res) => {
  try {
    const data = await Message.find();
    if (!data) return res.status(400).json({ message: "ERROR !" });
    return res.status(200).json({ data });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ msg: "INTERNAL SERVER ERROR !" });
  }
};

const addmessage = async (req, res) => {
  try {
    const { message, from } = req.body;
    if (!message || !from)
      return res.status(400).json({ message: " Information missing !" });
    const newMessage = new Message();
    newMessage.from = from;
    newMessage.message = message;

    const data = await newMessage.save();
    if (!data) return res.status(400).json({ message: "ERROR" });
    return res
      .status(201)
      .json({ message: "Message added successfully ! ", data });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ msg: "INTERNAL SERVER ERROR !" });
  }
};

module.exports = {
  getmessages,
  addmessage,
};

const { Chat } = require("../models/chatModel");

exports.getChats = async (req, res) => {
    try {
        const chats = await Chat.find();
        res.send(chats);
    } catch (error) {
        res.send(error);
    }
}

exports.deleteChat = async (req, res) => {
    const id = req.params.id;
    try {
        const chat = await Chat.findByIdAndDelete(id);
        res.send(chat)
    } catch (error) {
        res.send(error);
    }
}

exports.createChat = async (req, res) => {
    const { username, message } = req.body;
    try {
        const chatDocument = new Chat({ username, message });
        const newChat = await chatDocument.save();
        res.send(newChat);
    } catch (error) {
        res.send(error);
    }
}
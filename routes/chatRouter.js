const { Router } = require("express");
const { getChats, createChat, deleteChat } = require("../controllers/chatControl");

exports.chatRoutes = Router().get('/chats', getChats).post('/chats', createChat).delete('/chat/:id', deleteChat);
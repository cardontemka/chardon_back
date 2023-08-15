const { Schema, model } = require("mongoose")

const chatSchema = new Schema({
    username: {
        type: String,
        require: true,
    },
    message: {
        type: String,
        require: true,
    },
    date: {
        type: Date,
        default: Date.now(),
    }
})

const Chat = model('Chat', chatSchema);
exports.Chat = Chat;
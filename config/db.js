const mongoose = require("mongoose");

const connect = async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect('mongodb+srv://ptemuulen82:2micDWEv0qURzCTu@cluster0.v5a8obs.mongodb.net/?retryWrites=true&w=majority');
        console.log('Succesfully connected to mongodb');
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = connect;
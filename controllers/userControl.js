const { User } = require("../models/userModel");

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find({}, {password: 0});
        res.send(users);
    } catch (error) {
        res.send(error);
    }
}

exports.getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.send(user);
    } catch (error) {
        res.send(error);
    }
}
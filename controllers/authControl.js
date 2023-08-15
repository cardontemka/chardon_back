const { User } = require("../models/userModel");
const bcrypt = require("bcrypt");

exports.signup = async (req, res) => {
    const { username, password } = req.body || {};

    if (!username || !password)
        return res.status(400).send("username and password is required");
    
    if (await User.findOne({ username }))
        return res.status(400).send("this username already exists");

    const encryptedPassword = await bcrypt.hash(password, 10);
    try {
        const userDocument = new User({
            username,
            password: encryptedPassword,
        });
        const user = await userDocument.save();
        res.send(user);
    } catch (error) {
        res.send(error);
    }
};

exports.login = async (req, res) => {
    const { username, password } = req.body || {};

    if (!username || !password)
        return res.status(400).send("username and password is required");

    try {
        const user = await User.findOne({ username });

        const isEqual = await bcrypt.compare(password, user.password);
        if (isEqual) return res.send(user);

        res.status(400).send("Your password is incorrect");
    } catch (error) {
        res.status(400).send("User not found");
    }
};

const { Router } = require("express");
const { getUsers, createUser, getUser } = require("../controllers/userControl");

exports.userRoutes = Router().get('/users', getUsers).get('/user/:id', getUser);
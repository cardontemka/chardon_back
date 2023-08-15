const { Router } = require("express");
const { login, signup } = require("../controllers/authControl");

exports.authRoutes = Router().post('/signup', signup).post('/login', login);
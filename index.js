const express = require("express");
const connect = require("./config/db");
const cors = require("cors");
const { userRoutes } = require("./routes/userRouter");
const { chatRoutes } = require("./routes/chatRouter");
const { authRoutes } = require("./routes/authRouter");

const app = express();

const port = 8080;

app.use(cors());
app.use(express.json());

connect();

app.use(userRoutes)
app.use(chatRoutes)
app.use(authRoutes)

app.get('/', (req, res) => {
    res.send("lomaoi");
})

app.listen(port, () => {
    console.log('Server running at:', port)
})
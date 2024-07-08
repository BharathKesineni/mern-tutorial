const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const app = express();
const authRoutes = require("./routes/auth.routes");
const messageRoutes = require("./routes/message.route");
const userRoutes = require("./routes/user.route");

const connectToMongoDB = require('./db/connectMongodb');
dotenv.config();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);



app.listen(PORT,() => {
    connectToMongoDB()
    console.log(`server listening on port ${PORT}`);
})
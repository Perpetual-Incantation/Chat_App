const colors = require("colors");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const dotenv = require("dotenv");
const express = require("express");
const connectDB = require("./config/db");
const { chats } = require("./data/data");
const app = express();
dotenv.config();
var cors = require("cors");
//const { notFound, errorHandler } = require("./middlewares/errorMiddlware");
app.use(cors());

connectDB();

app.use(express.json()); //to accept json data

app.get("/", (req, res) => {
  res.send("api is running");
});
app.get("/api/chat", (req, res) => {
  res.send(chats);
});
app.get("/api/chat/:id", (req, res) => {
  //console.log(req.params.id);
  const singleChat = chats.find((c) => c._id == req.params.id);
  res.send(singleChat);
});

// app.use(notFound);
// app.use(errorHandler);
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use("/api/chat", chatRoutes);
app.use("/api/user", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`.yellow.bold));

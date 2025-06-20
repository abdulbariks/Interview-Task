const express = require("express");
const app = express();
const cors = require("cors");
const userRoutes = require("./routes/user.routes");
const taskRoutes = require("./routes/task.routes");

app.use(cors());
app.use(express.json());

app.use("/user", userRoutes);
app.use("/tasks", taskRoutes);

module.exports = app;

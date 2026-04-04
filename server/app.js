const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

const usersRoutes = require('./src/users/routes.js');
const groupsRoutes = require('./src/groups/routes.js');
const messageRoutes = require('./src/messages/routes.js');

app.use(express.json()); //enable req.body parsing
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.use("/users", usersRoutes);
app.use("/groups", groupsRoutes);
app.use("/groups/:groupId", messageRoutes);

module.exports = app;
const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./src/modules/auth/auth.routes.js');
const usersRoutes = require('./src/modules/users/users.routes.js');
const groupsRoutes = require('./src/modules/groups/groups.routes.js');
const messageRoutes = require('./src/modules/messages/messages.routes.js');

app.use(express.json()); //enable req.body parsing
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}));

app.use("/", authRoutes);
app.use("/users", usersRoutes);
app.use("/groups", groupsRoutes);
app.use("/groups/:groupId", messageRoutes);

module.exports = app;
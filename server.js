require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

mongoose.connect(process.env.DB_CONNECT)
.then(() => {
    console.log('Connected to the mongo DB.');
});

app.listen(PORT, () => {
    console.log(`Server is running on the port: ${PORT}.`);
});
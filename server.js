const express = require('express');
require("dotenv").config();

const app = express();
const PORT = process.env.PORT2 || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log(`Server is running on the port: ${PORT}.`);
});
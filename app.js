const express = require('express');

const app = express();
const port = 5000;

app.listen(port, ()  => {
    console.log("Server is running at port 3000");
});
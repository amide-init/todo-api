const express = require('express');

const app = express();
const port = 8000;

app.listen(port, ()  => {
    console.log("Server is running at port 3000");
});
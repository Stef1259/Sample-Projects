const express = require('express');
const app = express();


app.get('/api', (req, res) => {

    res.json({"users":["user oner","user two","user three"]});
});

app.listen(5000,()=> {
    console.log("Server is running on port 5000");
});
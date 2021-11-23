const express = require('express');
const app = express();

const port= 1995;
require('./models/index.js');
var userCtrl = require('./controllers/userController.js');

app.get("/" , (req , res) => {
    res.send("Home page");
});

app.get('/add' , userCtrl.addUser);
app.get('/crud', userCtrl.addCrud);
app.listen(port ,() => {
    console.log('Running');
});
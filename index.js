const express = require("express");
const app = express();

// Defines EJS as HTML renderer
app.set('view engine', 'ejs')

app.get("/", (req,res) => {
    res.render('index')
});

app.get("/user", (req,res) => {
    res.render('profile/index')
});


app.listen(3000, () => {
    console.log('App running on port: 3000')
});
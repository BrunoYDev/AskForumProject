const express = require("express");
const app = express();

// Defines EJS as HTML renderer
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get("/", (req,res) => {
    res.render('index');
});

app.get("/ask", (req,res) => {
    res.render('ask');
});

app.listen(3000, () => {
    console.log('App running on port: 3000')
});
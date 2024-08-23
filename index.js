const express = require("express");
const app = express();
const connection = require('./database/database')

connection.authenticate().then(() => {
    console.log('connection stable')
})
.catch((errorMsg) => {
    console.log(errorMsg);
})

// Defines EJS as HTML renderer
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/", (req,res) => {
    res.render('index');
});

app.get("/ask", (req,res) => {
    res.render('ask');
});

app.post("/savequestion", (req,res) => {
    let title = req.body.title;
    let description = req.body.description;
    res.send(`Form Received! Title: ${title} Description: ${description}`);
});

app.listen(3000, () => {
    console.log('App running on port: 3000')
});
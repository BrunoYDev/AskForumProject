const express = require("express");
const app = express();
const connection = require("./database/database");
const questionModel = require("./database/Question");
const Question = require("./database/Question");
const { Order } = require("sequelize");

connection
  .authenticate()
  .then(() => {
    console.log("connection stable");
  })
  .catch((errorMsg) => {
    console.log(errorMsg);
  });

// Defines EJS as HTML renderer
app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  Question.findAll({ raw: true, order: [["id", "desc"]] }).then((questions) => {
    res.render("index", {
      questions: questions,
    });
  });
});

app.get("/ask", (req, res) => {
  res.render("ask");
});

app.post("/savequestion", (req, res) => {
  let title = req.body.title;
  let description = req.body.description;
  Question.create({
    title: title,
    description: description,
  }).then(() => {
    res.redirect("/");
  });
});

app.get("/question/:id", (req, res) => {
    var id = req.params.id;
    Question.findOne({
        where: {id: id}
    }).then(question => {
        if(question != undefined){
            res.render('question',{
                question: question
            });
        }else{
            res.redirect('/');
        }
    });
  });

app.listen(3000, () => {
  console.log("App running on port: 3000");
});

const express = require("express");
const app = express();
const connection = require("./database/database");
const questionModel = require("./database/Question");
const Question = require("./database/Question");
const Answer = require("./database/Answer");
const { Order, where } = require("sequelize");

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
    where: { id: id },
  }).then((question) => {
    if (question != undefined) {
      Answer.findAll({
        where: {
          questionId: question.id,
        },
        order:[ ['id', 'DESC'] ],
      }).then((answers) => {
        res.render('question',{
          question: question,
          answers: answers
        })
      });
      
    } else {
      res.redirect("/");
    }
  });
});

app.post("/answer", (req, res) => {
  let body = req.body.questionBody;
  let questionId = req.body.questionId;

  Answer.create({
    body: body,
    questionId: questionId,
  }).then(() => {
    res.redirect(`/question/${questionId}`);
  });
});

app.listen(3000, () => {
  console.log("App running on port: 3000");
});

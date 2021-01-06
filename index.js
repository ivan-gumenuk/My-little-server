const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const joke = require('./joke');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.set("view engine", "pug");

app.get("/form", (req, res) => {
  res.sendFile('form.html', { root: __dirname + '/public' })
});

app.post("/form-send", (req, res) => {
  res.render("formData", {
    email: req.body.email,
    name: req.body.name
  });
});

app.get("/", async (req, res) => {
  res.render("main", {
    joke: await joke(),
  });
});

app.all('/*', (req, res) => {
  res.status(404).render("error");
});

app.listen(3000, () => console.log("Server has been started."));
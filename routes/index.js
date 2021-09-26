var express = require("express");
var router = express.Router();

const controller = require('../controller/controller')

/* GET home page. */
router.get("/", (req, res) => {
  res.render('index', { title: "SAWO Class Portal" })
});

router.get("/login", (req, res) => {
  res.render("login", { title: "Login" });
  // res.send("respond with a resource");
});

router.get('/logout', controller.logout)

router.get("/success", (req, res) => {
  res.render("index", { title: "Home", payload: payload });
});

router.get("/successfull", function (req, res, next) {
  res.render("successfull", { title: "Submission successfull :)" });
});

router.get('/status', (req, res) => {
  const response = {
    "name": "SAWO Class API",
    "description": "Project Submission Platform developed using Express and MongoDB",
    "stauts": "Working OK",
    "routes": [
      {
        "/": {
          "index": "Home Page",
          "login": "Log-in using SAWO API",
          "logout": "Log-out",
          "successfull": "Redirecting after successfull submission!"
        },
        "/users": {
          "users": "Home Page",
          "submission": {
            "GET": "Display assignment submission form",
            "POST": "Save assignment data on the server"
          }
        },
        "/admin": {
          "admin": "Home Page",
          "login": {
            "GET": "Display admin login page",
            "POST": "Verify credientials and redirect to admin panel"
          },
          "assignment": {
            "GET": "Display assignment creatoin form",
            "POST": "Get list of all submitted assignments"
          },
          "view-submissions": "See all submitted assignments"
        }
      }
    ]
  }
  res.send({ response })
})

module.exports = router;

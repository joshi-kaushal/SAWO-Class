var express = require("express");
var router = express.Router();

const controller = require("../controller/controller")

// ? @route GET / ('/users')
// ? @desc 'rnder students page'
router.get("/", controller.assignment_get);


// ? @route GET /submission
// ? @desc 'take to assignment submission form'
router.get("/submission", (req, res) => {
  res.render("submission", { title: "Submit Assignment" });
});

// ? @route GET /submission
// ? @desc 'save submission form information'
router.post('/submission', controller.submission_post)

module.exports = router;

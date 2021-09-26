var express = require("express");
var router = express.Router();
require('dotenv').config()

const controller = require('../controller/controller')

// ? route GET / ('/admin')
// ? @desc 'admin home'
router.get('/', (req, res) => {
  res.render('admin', { title: "Admin" })
})

// ? route GET /login
// ? @desc 'admin login'
router.get('/login', (req, res) => {
  res.render('admin-login', { title: "Admin Login!" })
})

// ? route POST /login
// ? @desc 'checks credientials and redirect to admin panel'
router.post('/login', controller.adminLogin_post)

// ? @route GET /assignment
// ? @desc 'assignment creatoin form'
router.get("/assignment", (req, res) => {
  res.render("assignment", { title: "Assignment Creation" });
});

// ? @route POST /assignment
// ? param 'save assignment creatoin form'
router.post('/assignment', controller.assignment_post)

// ? @route GET /view-submissions
// ? @desc 'get list of all submitted assignments'
router.get('/view-submissions', controller.assignments_get)

module.exports = router;
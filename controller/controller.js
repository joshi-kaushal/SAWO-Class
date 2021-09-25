require('dotenv').config()
const { validationResult } = require('express-validator');

const Assignment = require('../models/assignment')
const Submission = require('../models/submission')

// ? Checks if user is loggeg in (SAWO Payload)
exports.check_login = (req, res) => {
    const payload = req.session.payload;
    console.log(req.session.payload);
}

// ? Logout Functionality
exports.logout = (req, res) => {
    const payload = req.session.payload;
    console.log(`req.session -> ${req}`);
    res.redirect('/')
}

// ? (STUDENT) Retrieves assignments from DB 
exports.assignment_get = (req, res) => {
    Assignment.find()
        .then((each) => {
            res.render('student',{title: "Live Assignments",assignments: each,
                 helpers: {
                    foo: function () { return 'foo.'; }
                }           
            })
        })
}

// ? (STUDENT) Uploads student submission in the DB
exports.submission_post = (req, res, next) => {
    const {firstName, lastName, github, deployed, document, description} = req.body
	const errors = validationResult(req)

    if(!errors.isEmpty()) {
		res.render('error', { title: "error", errors: errors.errors })
		return
	}

	let currentTime = Date()

    const newSubmission = new Submission({
        firstName,
        lastName, 
        github,
        deployed,
        document,
        description,
        timestamp: currentTime
    })

    newSubmission.save(err => {
        if(err) return next(err)
		res.redirect('/successfull')
    })
}

// ? (ADMIN) Retrieves assignments to DB
exports.assignments_get = (req, res) => {
    Submission.find()
        .then((each) => {
            res.render('view_submissions', {title: "Uploaded Assignments", submissions: each})
        })
}

// ? (ADMIN) Uploads assignments to DB
exports.assignment_post = (req, res, next) => {
    const {title, description, deadline} = req.body
    const errors = validationResult(req)

    if(!errors.isEmpty()) {
		res.render('error', { title: "error", errors: errors.errors })
		return
	}

    const newAssignment = new Assignment({
        title,
        description,
        deadline,
    })

    newAssignment.save(err => {
        if(err) return next(err)
		res.redirect('/successfull')
    })
}

// ? Admin Authentication
exports.adminLogin_post = (req, res, next) => {
  console.log(req.body);  
  const {username, password} = req.body

  if(username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
    console.log('if');
    res.redirect('/admin')
} else {
    console.log('else');
    res.render('error', {error: "Invalid Credientials"})
  }
}
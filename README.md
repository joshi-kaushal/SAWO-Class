# SAWO-Class

This project was developed for the hackarthon organized by DeveloperDays in Aug/Sep 2021.

The application, **SAWO-Class** is a project submission platform where *'admin'* can create an assignment and *'student'* can upload it. Later, admin has the functionality to see uploaded assignments.

### Tech Stack
- Node JS (Runtime)
- Express JS (Backend Framework)
- Handlebars (Viewing Engine)
- Mongoose (Database connectivity)
- SAWO (PasswordLess Authentication)

### Postman API Testing
This app is tested using Postman. Since SAWO-Class is developed using Express templating engine 'Handlebars', the response is given back in the form of HTML pages rather than traditional JSON format.

#### GET /status
![GET /status]('Postman/GET_status.pmg')

#### GET /admin/assignment
![GET /admin/assignment]('public/images/Postman/GET_admin-assignment')
#### POST /admin/assignment
![POST /admin/assignment]('public/images/Postman/POST_admin-assignment.png')

#### GET /users/submission
![GET /users/submission]('public/images/Postman/GET_users-submission.png')
#### POST /users/submission
![POST /users/submission]('public/images/Postman/POST_users-submission.png')

#### GET /admin/view-submission
![GET /admin/view-submission]('public/images/Postman/POST_users-submission.png')
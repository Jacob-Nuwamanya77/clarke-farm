const express = require('express');
const bodyParser = require('body-parser');
const app = express();

/* SERVING STATIC FILES WITH MIDDLEWARE FUNCTION express.static */
app.use(express.static('uploads'))

// MANIPULATE DATABASE USING JSON
app.use(express.json())
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// APP ROUTES
const userRouter = require('./controllers/userRoutes');
app.use(userRouter)
const visitorRouter = require('./controllers/visitorRoutes');
app.use(visitorRouter)
const packageRouter = require('./controllers/packageRoutes');
app.use(packageRouter)
const bookingRouter = require('./controllers/bookingRoutes');
app.use(bookingRouter)
const reviewRouter = require('./controllers/reviewRoutes');
app.use(reviewRouter)

// LOGOUT


// NOT EXISTING ROUTES
app.get('*', (req, res) => {
  res.send('Error! Resource Not Found')
})

// SERVER LISTENING TO REQUESTS
const port = 3000
app.listen(port, () => {
})
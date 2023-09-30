//Using Express build out api
const express = require('express')
const app = express()
// var holding file at diff location-database
const connectDB = require('./config/database')
// Controller will know via route and request type GET POST PUT DELETE
const homeRoutes = require('./routes/home')
const todoRoutes = require('./routes/todos')

// MUST have this to run environment files --for secrets
require('dotenv').config({path: './config/.env'})

// call function to connect to database
connectDB()

// set app to read ejs html files--how to handle the views for this app
// React option coming up
app.set('view engine', 'ejs')

// set app utilize express 
// Public folder holds our static routes-css and js frontend 
app.use(express.static('public'))

// replace bodyParser. Can parse something that comes out of body---ie form values, what was clicked on, etc --Pulling data from client browser 
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


// Route calls by URL 
app.use('/', homeRoutes)
app.use('/todos', todoRoutes)
 
// point to .env for PORT -setting us for Deployment-Hosting Co. sets own ports for own servers. Dont hardcode PORT.
app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})    
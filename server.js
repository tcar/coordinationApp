const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const session = require('express-session')
const passport = require('passport')
const bodyParser = require('body-parser')

mongoose.connect('mongodb://localhost/coordinationdb')
const app = express()


app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

app.use(passport.initialize());
app.use(passport.session())
console.log(session.cookie)
app.use(routes)




const port = 5000
app.listen(port,()=>{
console.log('app listening od port' + port)
})
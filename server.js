const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const session = require('express-session')
const passport = require('passport')
const path = require('path')
const cookieParser = require('cookie-parser');

const bodyParser = require('body-parser')

mongoose.connect('mongodb://localhost/coordinationdb')
const app = express()

app.use(express.static(path.join(__dirname, 'client/public')))
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(cookieParser('keyboard cat'));

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
 
}))

app.use(passport.initialize());
app.use(passport.session())
app.use(routes)



app.route('*').get((req,res)=>{
  res.sendFile(path.join(__dirname+'/client/public/index.html'))
})
const port = 5000
app.listen(port,()=>{
console.log('app listening od port' + port)
})
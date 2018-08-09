const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')
const passport = require('passport');

const users = require('./routes/users');
const profileRoutes = require('./routes/profileRoutes')


mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost:27017/medicalmap', 
  {useNewUrlParser: true}, 
  err => console.log(err)
);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => console.log('connected'))

app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

app.use(passport.initialize());
require('./config/passport')(passport);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});


app.use('/', users);
app.use('/profile', profileRoutes);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

app.listen(3000, () => console.log('port 3000'))
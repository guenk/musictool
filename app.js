var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var instrumentRoutes = require('./routes/musictool.routes'); // Assurez-vous que ce chemin est correct

var app = express();
var corsOptions = {
    origin: "http://localhost:8080"
};

app.use(cors(corsOptions));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// database
const db = require("./models");
const Role = db.role;
//drop and create table
db.sequelize.sync();
// will drop the table if it already exists: only for dev mode !!!!
db.sequelize.sync().then(() => {
   console.log('Drop and Resync Database with { force: true }');
   // initial();
});

// routes
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/instruments', instrumentRoutes); // Utiliser les routes pour les instruments

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // respond with json if error occurs
  res.status(err.status || 500);
  res.json({ error: err.message }); // Renvoyer l'erreur en format JSON
});

module.exports = app;

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


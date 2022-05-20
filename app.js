var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var adminRouter = require('./routes/admin');
var responsibleRouter = require('./routes/responsible');
var resumeRouter = require('./routes/resume');
var studentRouter = require('./routes/student');
var subjectRouter = require('./routes/subject');
var teacherRouter = require('./routes/teacher');
var teamRouter = require('./routes/team');

app.use('/admins', adminRouter);
app.use('/responsibles', responsibleRouter);
app.use('/resumes', resumeRouter);
app.use('/students', studentRouter);
app.use('/subjects', subjectRouter);
app.use('/teachers', teacherRouter);
app.use('/teams', teamRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

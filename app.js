var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const _ = require("lodash");
const moment = require("moment");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.locals.currencyFormatDE = function (num) {
  let numOfDecimal = 0;
  let partial = _.toNumber(num).toString().split('.');
  if(partial.length === 2){
    numOfDecimal = partial[1].length;
  }
  return (
      num
          .toFixed(numOfDecimal) // always two decimal digits
          .replace('.', ',') // replace decimal point character with ,
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ' VND'
  ) // use . as a separator
};

app.locals.dateFormat = function(date){
  if(date) return moment(date).format('DD/MM/YYYY');
  return null;
};

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
// app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  // next(createError(404));
  res.render("pages/notFound")
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("pages/errorPage");
});

module.exports = app;

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const session = require('express-session');


// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// sleep(2000);

const indexRouter = require('./routes/index');

const aboutRouter = require('./routes/about');
const answerRouter = require('./routes/answer');
const contactRouter = require('./routes/contact');
const loginRouter = require('./routes/login');
const logoutRouter = require('./routes/logout');
const meetingRouter = require('./routes/meetingSetUp');
const profileRouter = require('./routes/profile');
const signupRouter = require('./routes/signup');
const adminRouter = require('./routes/admin');


const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));



app.use('/', indexRouter);

app.use('/about', aboutRouter);
app.use('/answer', answerRouter);
app.use('/contact', contactRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/meeting', meetingRouter);
app.use('/profile', profileRouter);
app.use('/signup', signupRouter);
app.use('/admin', adminRouter);




app.use(session({
  secret: 'bddffzfe85241fdfezfez',
  resave: false,
  saveUninitialized: false
}));// application stateful et du coup pas strictement REST



// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    let errorStatus;
  if (err.status) {
    errorStatus = err.status;
  }

  if (errorStatus === 404) {
    res.render('404');
  } else {
    // render the error page
      res.status(err.status || 500);
      res.render('error');
  }
});

module.exports = app;

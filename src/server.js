import express from 'express';
import path from 'path';
import morgan from 'morgan';

// Initialization

const app = express();

// Settings

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middlewares

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

// Routes

app.use(require('./routes/entries.routes'));

// 404 Handler

app.use((req, res) => {
    res.status(404).render('404');
});

module.exports = app;
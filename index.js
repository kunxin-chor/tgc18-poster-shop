const express = require('express');
const hbs = require('hbs');
const wax = require('wax-on');

const app = express();

// set hbs up for express
app.set('view engine', 'hbs');

// setup wax on for express
wax.on(hbs.handlebars);
wax.setLayoutPath('./views/layouts')

const landingRoutes = require('./routes/landing');
app.use('/', landingRoutes);

// alternatively:
// app.use('/', require('./routes/landing'));

app.listen(3000, function(){
    console.log("server has started")
})
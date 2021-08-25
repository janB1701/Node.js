const express = require ('express');
const app = express ();
var path = require ('path');

const homeRouter = require ('./routes/home.routes');
const carsRouter = require ('./routes/carList.routes');
const companyRouter = require ('./routes/company.routes');

app.set ('views', path.join (__dirname, 'views'));
app.set ('view engine', 'ejs');

app.use ('/', homeRouter);
app.use ('/cars', carsRouter);
app.use ('/companies', companyRouter);

app.listen (80);
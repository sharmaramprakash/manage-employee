const express = require('express');
const app = express();
const _ = require('lodash');
const dot = require('dotenv').config();
const path = require('path');
const handlebars = require('express-handlebars');
const bodyparser = require('body-parser');
const route = require('../router/m_employeerouter');

app.use(bodyparser.json());
app.use(
  bodyparser.urlencoded({
    extended: true
  })
  );
app.use('/', route);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '../view/'));
app.engine(
  'hbs',
  handlebars({
    extname: 'hbs',
    defaultLayout: 'mainlayout',
    layoutdir: __dirname + '/view/layouts/'
  })
);

const port = process.env.PORT || 7000;
app.listen(port, () => console.log(`Lisening on the port ${port}`));
require('../database/m_dbconnection');


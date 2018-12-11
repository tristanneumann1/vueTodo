require('dotenv').config();

const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const parser = require('body-parser');
const path = require('path');

const app = express();
const router = require('./router.js');

app.use(helmet());
app.use(morgan('[:date[clf]] :method :status :url :res[content-length] - :response-time ms'));
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.use('/', express.static(path.join(__dirname, '../client')));
app.use('/api', router);

const port = process.env.PORT || 3000;

app.listen(port, ()=>console.log(`server open on port: ${port}`));


const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const parser = require('body-parser');
const path = require('path');

const app = express();
app.use(helmet());
app.use(morgan('[:date[clf]] :method :status :url :res[content-length] - :response-time ms'));
app.use(parser.urlencoded({extended: false}));

app.use('/', express.static(path.join(__dirname, '../dist')));
// app.get('*', function (req, res) {
//   res.sendFile(path.join(__dirname, '../dist', 'index.html'));
// });



const port = process.env.port || 3000;

app.listen(port, ()=>console.log(`server open on port: ${port}`));


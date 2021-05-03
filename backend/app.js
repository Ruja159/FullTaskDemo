const express = require('express');
const jwt = require('jsonwebtoken')
const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

const users = require('./routes/user')
const articles = require('./routes/articles')
const customers = require('./routes/customers')
const auth = require('./routes/auth')

app.use(express.json());

app.use('/api/user', users)
app.use('/api/articles', articles)
app.use('/api/customers', customers)
app.use('/', auth)



app.listen(5000, () => {
    console.log("Server started on port 5000...")
})
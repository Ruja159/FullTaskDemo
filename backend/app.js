const express = require('express');
const jwt = require('jsonwebtoken')
const app = express();

const users = require('./routes/user')
const articles = require('./routes/articles')
const customers = require('./routes/customers')
const auth = require('./routes/auth')

app.use(express.json());

app.use('/api/user', users)
app.use('/api/articles', articles)
app.use('/api/customers', customers)
app.use('/', auth)



app.listen(3000, () => {
    console.log("Server started on port 3000...")
})
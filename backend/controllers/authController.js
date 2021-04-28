
const data = require('../data/data')
const jwt = require('jsonwebtoken')
const accessTokenSecret = require('../config')

const auth = (req, res) => {
    const user = data.user.find(u => u.email === req.body.email);
    if (user) {
        const accessToken = jwt.sign({ email: user.email }, accessTokenSecret, { expiresIn: '20m' });
        res.json({
            accessToken
        });
    } else {
        res.json({msg: "Invalid email or password"});
    }
}

module.exports = {auth}
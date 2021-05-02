
const data = require('../data/data')
const jwt = require('jsonwebtoken')
const accessTokenSecret = require('../config')

const auth = (req, res) => {


    const hashedPassword = bcrypt.hashSync(req.body.password, 8)
    const user = data.user.find(u => u.email === req.body.email);
    if (user.password == hashedPassword) {
        const accessToken = jwt.sign({ email: user.email }, accessTokenSecret, { expiresIn: '20m' });
        res.json({
            accessToken
        });
    } else {
        res.json({ msg: "Invalid email or password" });
    }
}

module.exports = { auth }

const data = require('../data/data')
const jwt = require('jsonwebtoken')
const accessTokenSecret = require('../config')

const bcrypt = require('bcryptjs')

const auth = (req, res) => {
    
    const user = data.user.find(u => u.email === req.body.email);
    if (user) {
        const validPassword = bcrypt.compareSync(req.body.password, user.password)
        if(validPassword) {

            const accessToken = jwt.sign({ email: user.email }, accessTokenSecret, { expiresIn: '20m' });
            res.json({
                accessToken
            });
        }else {
            res.json({msg: "Invalid email or password"});
        }
    } else {
        res.json({msg: "User doesng exsist"})
    }
}

module.exports = {auth}
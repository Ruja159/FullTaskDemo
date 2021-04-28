
let data = require('../data/data')
const bcrypt = require('bcryptjs')

const getUsers = (req, res) => {
    res.send(data.user)
}

const getUserByEmail = (req, res) => {
    const oneUser = data.user.find(user => user.email === req.params.email);
    if (oneUser) {
        res.status(200).send(newUser)
    } else {
        res.status(400).json({ msg: "User is not found" })
    }
}

const addNewUser = (req, res) => {
    const hashedPassword = bcrypt.hashSync(req.body.password , 8)

    const email = req.body.email
    const existingUser = data.user.find(u => u.email === email)
    if (existingUser) {
        res.status(200).json({ success: false, msg: "The user with the same email already exsisting!!" })
    } else {

        const newUser = {
            id: data.user.length + 1,
            email: req.body.email,
            password: hashedPassword
        }
        data.user.push(newUser);
        res.json(newUser);
    }
}

const updateUser = (req, res) => {
    const newUser = data.user.find(u => u.id === parseInt(req.params.id));

    if (!newUser) {
        res.status(404).json({ msg: 'The user with given ID was not found' });
    }

    newUser.email = req.body.email;
    newUser.password = req.body.password

    res.json(newUser)
}

const deleteUser = (req, res) => {
    const id = req.params.id
    const deletedUser = data.user.findIndex(u => u.id == id);
    if (deletedUser > -1) {
        data.user.splice(deletedUser, 1);
        res.json(data.user)
    } else {
        res.json({ msg: "the user doesnt exist" })
    }

}

module.exports = {
    getUsers,
    getUserByEmail,
    addNewUser,
    updateUser,
    deleteUser
}
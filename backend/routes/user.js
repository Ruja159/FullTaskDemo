const express = require('express')
const router = express.Router();
const auth = require('../jwtVerify')

const { 
    getUsers,
    getUserByEmail,
    addNewUser,
    updateUser,
    deleteUser} = require('../controllers/userController')

// router.get('/',auth, getUsers)
// router.get('/:email', getUserByEmail)
// router.post('/', addNewUser)
// router.put('/:id', updateUser)
// router.delete('/:id', deleteUser )

router.route('/',).get(auth,getUsers).post(addNewUser)
router.route('/:email').get(auth,getUserByEmail)
router.route('/:id').put(auth,updateUser).delete(auth,deleteUser)

module.exports = router
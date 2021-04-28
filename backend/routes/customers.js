const express = require('express');
const router = express.Router();

const auth = require('../jwtVerify')

const {
    getCustomers,
    getCustomerById,
    addNewCustomer,
    updateCustomer,
    deleteCustomer
} = require('../controllers/customerController')


router.route('/').get(auth,getCustomers).post(auth,addNewCustomer)
router.route('/:id').get(auth,getCustomerById).put(auth,updateCustomer).delete(auth,deleteCustomer)

module.exports = router

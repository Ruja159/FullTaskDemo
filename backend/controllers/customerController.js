
const data = require('../data/data')

const getCustomers =  (req, res) => {
    res.json(data.customer)
}

const getCustomerById = (req, res) => {
    const customer = data.customer.find(c => c.id === parseInt(req.params.id))
    if (customer) {
        res.status(200).json(customer)
    } else {
        res.status(404).json({ msg: 'Customer didnt found!!' })
    }
}

const addNewCustomer = (req, res) => {
    const customerEmail = req.body.email
    const existingCustomer = data.customer.find(c => c.email === customerEmail)
    if (!existingCustomer) {
        const newCustomer = {
            id: data.customer.length + 1,
            name: req.body.name,
            lastName: req.body.lastName,
            email: req.body.email,
            postalCode: req.body.postalCode
        }
        data.customer.push(newCustomer)
        res.json(newCustomer)
    }
    else {
        res.json({ msg: "Customer with same email already exsisting!!" })
    }

}

const updateCustomer =  (req, res) => {
    const existingCustomer = data.customer.find(c => c.id === parseInt(req.params.id))
    if (existingCustomer) {
        existingCustomer.name = req.body.name,
            existingCustomer.lastName = req.body.lastName,
            existingCustomer.email = req.body.email,
            existingCustomer.postalCode = req.body.postalCode

        res.json(existingCustomer)
    } else {
        res.json({ msg: "Customer with given ID was not found" })
    }
}

const deleteCustomer =  (req, res) => {
    const id = req.params.id
    const deletedCustomer = data.customer.findIndex(c => c.id == id)
    if (deletedCustomer > -1) {
        data.customer.splice(deletedCustomer, 1)
        res.json(data.customer)
    }
    else {
        res.json({msg: `Customer with ${id} doesnt exist!!`})
    }
}

module.exports ={
    getCustomers,
    getCustomerById,
    addNewCustomer,
    updateCustomer,
    deleteCustomer
}
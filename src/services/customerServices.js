const customer = require('../models/customer');

const createCustomerService = async (customerData) => {
    try {
        const result = await customer.create({
            name: customerData.name,
            address: customerData.address,
            phone: customerData.phone,
            email: customerData.email,
            description: customerData.description,
            image: customerData.image
        })
        return result;
    } catch (error) {
        console.log('>> check err', error);
    }
}

const createArrayCustomerService = async (arr) => {
    try {
        let result = await customer.insertMany(arr);
        console.log('>> check result:', result);
        return result;
    } catch (error) {
        console.log('>> check error:', error);
        return null;
    }
}

const getCustomers = async (arr) => {
    try {
        let Customers = await customer.find(arr);// truy vấn tất cả table db
        let customerMap = {};
        Customers.forEach((customer) => {
            customerMap[customer._id] = customer;
        })
        return customerMap;
    } catch (error) {
        console.log('>> check error:', error);
        return null;
    }
}

module.exports = {
    createCustomerService, createArrayCustomerService, getCustomers
}
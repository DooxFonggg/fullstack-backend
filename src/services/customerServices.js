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

const getCustomers = async () => {
    try {
        let result = await customer.find({});// truy vấn tất cả table db
        return result;
    } catch (error) {
        console.log('>> check error:', error);
        return null;
    }
}
// sửa customer
const putUpdateCustomerService = async (id, name, email, address) => {
    try {
        const Customer = await customer.updateOne({ _id: id }, { name, email, address });
        return Customer;
    } catch (error) {
        console.log("check error", error);
        return null;
    }
}

module.exports = {
    createCustomerService, createArrayCustomerService, getCustomers,
    putUpdateCustomerService
}
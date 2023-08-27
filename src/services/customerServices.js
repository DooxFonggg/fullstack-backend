const customer = require('../models/customer');
const mongoose = require('mongoose');
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

const deleteACustomerService = async (id) => {
    // thường khi xóa mongoose ODM dùng deleteOne tuy nhiên nó sẽ xóa đi dữ liệu
    // cách làm ẩn dữ liệu đi dùng deleteBy() sau đó tại model add thêm lệnh { overrideMethods: 'all' } nhằm để ghi đè mục đích là bỏ bớt trg delete = true đồng thời giúp ta ẩn những trg bằng true đó thì người dùng xem như đã xóa
    // mục đích sử dụng là nếu muốn khôi phục lại dữ liệu ta chỉ cần xét field delete = false thì dữ liệu sẽ lại hiện
    try {
        let Customer = await customer.deleteById({ _id: id });
        return Customer;
    } catch (error) {
        console.log('>> check error', error);
    }
}

const deleteArrayCustomersService = async (objectId) => {
    try {
        let Customer = await customer.delete({ _id: objectId })
        return Customer;
    } catch (error) {
        console.log('>> check error', error);
        return null;
    }
}

module.exports = {
    createCustomerService, createArrayCustomerService, getCustomers,
    putUpdateCustomerService, deleteACustomerService, deleteArrayCustomersService
}
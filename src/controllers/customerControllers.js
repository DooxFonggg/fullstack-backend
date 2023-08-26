
const { uploadSingleFile } = require("../services/fileServices");
const { createCustomerService, createArrayCustomerService, getCustomers, putUpdateCustomerService } = require('../services/customerServices')

// thêm 
const postCreateCustomer = async (req, res) => {
    // b1: lấy thông tin từ html
    let { name, address, phone, email, description } = req.body;
    let imageURL = "";
    if (!req.files || Object.keys(req.files).length === 0) {
    }
    else {
        console.log('>> check req.files.image', req.files.image);
        let result = await uploadSingleFile(req.files.image);
        imageURL = result.path; // URL bằng đường tên ảnh 
    }
    //bước 2: lưu vào database req.body
    let customerData = {
        name,
        address,
        phone,
        email,
        description,
        image: imageURL
    }
    // đặt image: imageURL cho đồng bộ vs posman
    //bước 3 sử lý lưu trong file services rồi gọi về đây mục đích có thể sử dụng nhiêu lần
    let Customer = await createCustomerService(customerData);

    // bước 4: trả về API
    return res.status(200).json({
        EC: 0,
        data: Customer
    })
}

const postArrayCreateCustomer = async (req, res) => {
    let Customers = await createArrayCustomerService(req.body.customers);// req.body.customers với .customers là key đặt trong posman
    console.log('>> check customer', req.body.customers);
    if (Customers) {
        return res.status(200).json({
            EC: 0,
            data: Customers
        })
    }
    else {
        return res.status(200).json({
            EC: -1,
            data: Customers
        })
    }
}

const getAllCustomer = async (req, res) => {
    let Customers = await getCustomers();
    if (Customers) {
        return res.status(200).json({
            EC: 0,
            data: Customers
        })
    }
    else {
        return res.status(200).json({
            EC: -1,
            data: Customers
        })
    }
}

const putUpdateCustomer = async (req, res) => {
    let { id, name, email, address } = req.body;
    console.log('>> check id', id);
    let result = await putUpdateCustomerService(id, name, email, address);// .customer được chỉ đạt trên posman
    if (result) {
        return res.status(200).json({
            EC: 0,
            data: result
        })
    }
    else {
        return res.status(200).json({
            EC: -1,
            data: result
        })
    }
}
module.exports = {
    postCreateCustomer, postArrayCreateCustomer, getAllCustomer, putUpdateCustomer
}
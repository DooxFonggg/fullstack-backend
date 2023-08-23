const User = require('../models/user');
const { uploadSingleFile } = require('../services/fileServices');

const getUsersAPI = async (req, res) => {
    let results = await User.find({});
    res.status(200).json({
        errorCode: 0,
        data: results
    });
}
const postCreateUserAPI = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    let user = await User.create({
        email: email,
        name: name,
        city: city
    })
    res.status(200).json({
        errorCode: 0,
        data: user
    });
}
const postUpdateUserAPI = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    let id = req.body.id;
    // await updateByID(email, name, city, id);
    let user = await User.findOneAndUpdate({ _id: id }, { email: email, name: name, city: city });
    res.status(200).json({
        errorCode: 0,
        data: user
    });
}
const deleteUserAPI = async (req, res) => {
    const id = req.body.id;

    let user = await User.findByIdAndDelete(id);

    res.status(200).json({
        errorCode: 0,
        data: user
    });
}
const postUpLoadSingleFileAPI = async (req, res) => {
    // nếu faild trả về k tải được
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }
    // req.files.image: dữ liệu ảnh
    let result = await uploadSingleFile(req.files.image);
    console.log('>> check result: ', result);

    return res.send('ok single');
}
module.exports = {
    getUsersAPI, postCreateUserAPI, postUpdateUserAPI, deleteUserAPI, postUpLoadSingleFileAPI
}
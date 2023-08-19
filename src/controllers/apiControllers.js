const User = require('../models/user');


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
module.exports = {
    getUsersAPI, postCreateUserAPI
}
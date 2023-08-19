const User = require('../models/user');


const getUsersAPI = async (req, res) => {
    let results = await User.find({});
    res.status(200).json({
        errorCode: 0,
        data: results
    });
}

module.exports = {
    getUsersAPI
}
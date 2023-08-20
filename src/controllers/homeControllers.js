const connection = require('../config/database');
const { getAllUsers, getUserByID, updateByID, deleteUserByID } = require('../services/CRUDservices');
const User = require('../models/user');


const getHomepage = async (req, res) => {
    let results = await User.find({});
    return res.render('home.ejs', { listUsers: results });

}

const getABC = (req, res) => {
    res.send('check abc')
}

const gethoidanit = (req, res) => {
    res.render('sample.ejs')
}
const getCreate = (req, res) => {
    res.render('create.ejs')
}
const postCreateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    console.log(req.body);
    await User.create({
        email: email,
        name: name,
        city: city
    })
    // console.log(email, name, city);

    res.send('create a new user !!!');

}

const getUpdatePage = async (req, res) => {
    const userID = req.params.id;
    const user = await User.findByIdAndUpdate(userID);
    res.render('update.ejs', { userEdit: user });
}
const postUpdateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    let id = req.body.id;
    // await updateByID(email, name, city, id);
    await User.findOneAndUpdate({ _id: id }, { email: email, name: name, city: city }, { new: true });
    res.redirect('/');
}
const postDeleteUser = async (req, res) => {
    const userID = req.params.id;
    const user = await User.findByIdAndUpdate(userID);;
    res.render('delete.ejs', { userEdit: user });
}

const postHandleRemoveUser = async (req, res) => {
    const userID = req.body.id;

    await User.findByIdAndDelete(userID);
    res.redirect('/');
}

module.exports = {
    getHomepage, getABC, gethoidanit, postCreateUser, getCreate,
    getUpdatePage, postUpdateUser, postDeleteUser, postHandleRemoveUser
}
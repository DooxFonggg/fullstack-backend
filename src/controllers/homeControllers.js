const connection = require('../config/database');
const { getAllUsers } = require('../services/CRUDservices');

const getHomepage = async (req, res) => {
    // let [results, fields] = await connection.query('SELECT *FROM Users u ');
    let results = await getAllUsers();

    return res.render('home.ejs', { listUsers: results });
    // let users = [];
    // connection.query(
    //     'SELECT *FROM Users u ',
    //     function (err, results, fields) {
    //         users = results;
    //         console.log('>> results', results); // results contains rows returned by server    
    //         //console.log(">> user", users);
    //         res.send(JSON.stringify(users));
    //     }
    // );
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
    // console.log(">> req.body", req.body)
    // res.send('create a new user');
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    console.log(req.body);
    // console.log(email, name, city);
    const [results, fields] = await connection.query(
        ` INSERT INTO 
        Users (email, name , city)
        VALUES (?, ?, ? ) `,
        [email, name, city]
    );
    res.send('create a new user !!!');
    console.log(results);
}

const getUpdatePage = (req, res) => {
    res.render('update.ejs');
}

module.exports = {
    getHomepage, getABC, gethoidanit, postCreateUser, getCreate, getUpdatePage
}
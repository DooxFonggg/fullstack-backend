const connection = require('../config/database');


const getHomepage = (req, res) => {

    return res.render('home.ejs');
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

const postCreateUser = (req, res) => {
    console.log(">> req.body", req.body)
    res.send('create a new user');
}


module.exports = {
    getHomepage, getABC, gethoidanit, postCreateUser
}
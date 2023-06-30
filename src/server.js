require('dotenv').config();
const express = require('express'); // commonjs  khai bao thu vien
//const path = require('path'); // commonjs
const configviewEngine = require('./config/viewEngine');
const webRoute = require('./routes/web');
//console.log(">>> check env: ", process.env);
const connection = require('./config/database');
// get the client
const mysql = require('mysql2')



const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

//config
configviewEngine(app);

//khai bao route
app.use('/', webRoute);


// simple query
connection.query(
    'SELECT *FROM Users u ',
    function (err, results, fields) {
        console.log('>> results', results); // results contains rows returned by server

    }
);

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})
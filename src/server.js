require('dotenv').config();
const express = require('express'); // commonjs  khai bao thu vien
//const path = require('path'); // commonjs
const configviewEngine = require('./config/viewEngine');
const webRoute = require('./routes/web');
const routeAPI = require('./routes/api');
//console.log(">>> check env: ", process.env);
const connection = require('./config/database');
// get the client
// const mongoose = require('mongoose');
const User = require('./models/user');



const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

// cofig req.body
app.use(express.json()); //utilizes the body-parser package
app.use(express.urlencoded({ extended: true }));

//config
configviewEngine(app);

//khai bao route
app.use('/', webRoute);
app.use('/v1/api/', routeAPI);



// self running funtion
(async () => {
    try {
        await connection();
        app.listen(port, hostname, () => {
            console.log(`Example app listening on port ${port}`)
        })
    } catch (error) {
        console.log('>> check error', error);
    }
})()


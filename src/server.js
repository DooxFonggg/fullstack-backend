require('dotenv').config();
const express = require('express'); // commonjs  khai bao thu vien
//const path = require('path'); // commonjs
const configviewEngine = require('./config/viewEngine');
const webRoute = require('./routes/web');
const routeAPI = require('./routes/api');
//console.log(">>> check env: ", process.env);
const connection = require('./config/database');
const fileUpload = require('express-fileupload');
// get the client
// const mongoose = require('mongoose');
const User = require('./models/user');
const { MongoClient } = require('mongodb');



const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

// default options
app.use(fileUpload());

// cofig req.body
app.use(express.json()); //utilizes the body-parser package
app.use(express.urlencoded({ extended: true }));

//config
configviewEngine(app);

//khai bao route
app.use('/', webRoute);
app.use('/v1/api/', routeAPI);

const url = process.env.DB_HOST_WITH_DRIVER;
const client = new MongoClient(url);
const dbName = process.env.DB_NAME;

// self running funtion
(async () => {
    try {
        // await connection();
        // Use connect method to connect to the server
        await client.connect();
        console.log('Connected successfully to server');

        const db = client.db(dbName);
        const collection = db.collection('documents');
        app.listen(port, hostname, () => {
            console.log(`Example app listening on port ${port}`)
        })
    } catch (error) {
        console.log('>> check error', error);
    }
})()


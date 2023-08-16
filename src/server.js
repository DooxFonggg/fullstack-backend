require('dotenv').config();
const express = require('express'); // commonjs  khai bao thu vien
//const path = require('path'); // commonjs
const configviewEngine = require('./config/viewEngine');
const webRoute = require('./routes/web');
//console.log(">>> check env: ", process.env);
const connection = require('./config/database');
// get the client
// const mongoose = require('mongoose');
const Kitten = require('./models/kitten');



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

// tạo database bằng moongoose

const cat = new Kitten({ name: 'Do Hoang Phong' });
cat.save();

// connetion data mongoose

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


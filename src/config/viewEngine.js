const path = require('path');
const express = require('express');
const configviewEngine = (app) => {
    // khai bao timeplate
    //__dirname: tu vi tri dung => folder config 
    app.set('views', path.join('./src', 'views'))
    app.set('view engine', 'ejs')
    //app.use(express.static('public'))
    //config static file
    app.use(express.static(path.join('./src', 'public')));
}

//lenh de su dung vao file server de exports

module.exports = configviewEngine;

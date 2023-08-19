const express = require('express');
const routerAPI = express.Router();
const { getUsersAPI, postCreateUserAPI } = require('../controllers/apiControllers');

// khai bao roude 
routerAPI.get('/users', getUsersAPI);
routerAPI.post('/users', postCreateUserAPI);
//export qua server
module.exports = routerAPI;
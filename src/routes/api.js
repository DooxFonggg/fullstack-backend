const express = require('express');
const routerAPI = express.Router();
const { getUsersAPI, postCreateUserAPI, postUpdateUserAPI } = require('../controllers/apiControllers');

// khai bao roude 
routerAPI.get('/users', getUsersAPI);
routerAPI.post('/users', postCreateUserAPI);
routerAPI.put('/users', postUpdateUserAPI);
//export qua server
module.exports = routerAPI;
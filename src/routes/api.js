const express = require('express');
const routerAPI = express.Router();
const { getUsersAPI, postCreateUserAPI, postUpdateUserAPI, deleteUserAPI, postUpLoadSingleFileAPI } = require('../controllers/apiControllers');

// khai bao roude 
routerAPI.get('/users', getUsersAPI);

routerAPI.post('/users', postCreateUserAPI);

routerAPI.put('/users', postUpdateUserAPI);

routerAPI.delete('/users', deleteUserAPI);

routerAPI.post('/file', postUpLoadSingleFileAPI);
//export qua server
module.exports = routerAPI;
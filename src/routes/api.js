const express = require('express');
const routerAPI = express.Router();
const { getUsersAPI, postCreateUserAPI, postUpdateUserAPI, deleteUserAPI, postUpLoadSingleFileAPI, postUpLoadMutipleFileAPI } = require('../controllers/apiControllers');
const { postCreateCustomer, postArrayCreateCustomer,
    getAllCustomer, putUpdateCustomer, deleteACustomer } = require('../controllers/customerControllers');
// khai bao roude 
routerAPI.get('/users', getUsersAPI);
routerAPI.post('/users', postCreateUserAPI);
routerAPI.put('/users', postUpdateUserAPI);
routerAPI.delete('/users', deleteUserAPI);

routerAPI.post('/file', postUpLoadSingleFileAPI);
routerAPI.post('/files', postUpLoadMutipleFileAPI);

routerAPI.post('/customer', postCreateCustomer);

routerAPI.post('/customers', postArrayCreateCustomer);
routerAPI.get('/customers', getAllCustomer);
routerAPI.put('/customers', putUpdateCustomer);
routerAPI.delete('/customers', deleteACustomer);

//export qua server
module.exports = routerAPI;
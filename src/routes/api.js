const express = require('express');
const routerAPI = express.Router();
const { getUsersAPI } = require('../controllers/apiControllers');

// khai bao roude 
routerAPI.get('/users', getUsersAPI);

//export qua server
module.exports = routerAPI;
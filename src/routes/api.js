const express = require('express');
const routerAPI = express.Router();
//user
const { getUsersAPI, postCreateUserAPI, postUpdateUserAPI, deleteUserAPI, postUpLoadSingleFileAPI, postUpLoadMutipleFileAPI } = require('../controllers/apiControllers');
//customer
const { postCreateCustomer, postArrayCreateCustomer,
    getAllCustomer, putUpdateCustomer,
    deleteACustomer, deleteArrayCustomers } = require('../controllers/customerControllers');
//projects
const { postCreateProjectsAPI, getAllProject,
    putUpdateProject, deleteAProject } = require('../controllers/projectControllers');

// tasks
const { postCreateTaskAPI } = require('../controllers/taskControllers');

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
routerAPI.delete('/customers-many', deleteArrayCustomers);

// routerAPI.get('/info', (req, res) => {
//     console.log('>> check query', req.query);
//     return res.status(200).json({
//         EC: 0,
//         data: req.query
//     })
// });

// route Project
routerAPI.post('/projects', postCreateProjectsAPI);
routerAPI.get('/projects', getAllProject);
routerAPI.put('/projects', putUpdateProject);
routerAPI.delete('/projects', deleteAProject);

// route task
routerAPI.post('/tasks', postCreateTaskAPI);
//export qua server
module.exports = routerAPI;
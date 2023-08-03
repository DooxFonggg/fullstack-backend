const express = require('express');
const router = express.Router();
const { getHomepage, getABC, gethoidanit, getCreate, postCreateUser, getUpdatePage } = require('../controllers/homeControllers');

// khai bao roude 
router.get('/', getHomepage);

router.get('/abc', getABC);

router.get('/hoidanit', gethoidanit);
// res.send('<h1>hoi dan it voi eric</h1>')
router.get('/create', getCreate);
router.post('/create-user', postCreateUser)
router.get('/update/:id', getUpdatePage);

//export qua server
module.exports = router;
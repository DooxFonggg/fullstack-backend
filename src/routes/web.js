const express = require('express');
const router = express.Router();
const { getHomepage, getABC, gethoidanit, postCreateUser } = require('../controllers/homeControllers');

// khai bao roude 
router.get('/', getHomepage);

router.get('/abc', getABC);

router.get('/hoidanit', gethoidanit);
// res.send('<h1>hoi dan it voi eric</h1>')

router.post('/create-user', postCreateUser)


//export qua server
module.exports = router;
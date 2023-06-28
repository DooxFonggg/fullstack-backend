const express = require('express');
const router = express.Router();

// khai bao roude 
router.get('/', (req, res) => {
    res.send('Hello World! toi ten la fonggg & nodemon')
})
router.get('/abc', (req, res) => {
    res.send('check abc')
})
router.get('/hoidanit', (req, res) => {
    // res.send('<h1>hoi dan it voi eric</h1>')
    res.render('sample.ejs')
})

//export qua server
module.exports = router;
const express = require('express'); // commonjs  khai bao thu vien
const path = require('path'); // commonjs

require('dotenv').config();
console.log(">>> check env: ", process.env);



const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;
// khai bao timeplate
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
// config static file
//app.use(express.static('public'))
app.use(express.static(path.join(__dirname, 'public')));

// khai bao roude 
app.get('/', (req, res) => {
    res.send('Hello World! toi ten la fonggg & nodemon')
})
app.get('/abc', (req, res) => {
    res.send('check abc')
})
app.get('/hoidanit', (req, res) => {
    // res.send('<h1>hoi dan it voi eric</h1>')
    res.render('sample.ejs')
})
app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})
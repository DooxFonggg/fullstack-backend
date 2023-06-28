const getHomepage = (req, res) => {
    res.send('Hello World! toi ten la fonggg & nodemon')
}

const getABC = (req, res) => {
    res.send('check abc')
}

const gethoidanit = (req, res) => {
    res.render('sample.ejs')
}
module.exports = {
    getHomepage, getABC, gethoidanit
}
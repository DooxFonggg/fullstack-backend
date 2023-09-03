
const { createProjectService } = require('../services/projectServices');


const postCreateProjectsAPI = async (req, res) => {
    console.log('>> check req.body', req.body.project);
    let result = await createProjectService(req.body.project);
    return res.status(200).json({
        EC: 0,
        data: result
    })

}

module.exports = { postCreateProjectsAPI };
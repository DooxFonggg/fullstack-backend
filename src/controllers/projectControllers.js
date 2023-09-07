
const { createProjectService, getProjects } = require('../services/projectServices');


const postCreateProjectsAPI = async (req, res) => {
    console.log('>> check req.body', req.body.project);
    let result = await createProjectService(req.body.project);
    return res.status(200).json({
        EC: 0,
        data: result
    })

}


const getAllProject = async (req, res) => {
    console.log('>> check query', req.query);
    let Myproject = null;
    let { limit, page } = req.query;
    if (limit && page) {
        Myproject = await getProjects(limit, page, req.query);
    }
    else {
        Myproject = await getProjects();
    }
    if (Myproject) {
        return res.status(200).json({
            EC: 0,
            data: Myproject
        })
    }
    else {
        return res.status(200).json({
            EC: -1,
            data: Myproject
        })
    }
}

module.exports = { postCreateProjectsAPI, getAllProject };
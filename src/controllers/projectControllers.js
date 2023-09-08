
const { createProjectService, getProjects, updateAProject, deleteProject } = require('../services/projectServices');


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

const putUpdateProject = async (req, res) => {
    console.log('>> check body', req.body);
    let { id, name, endDate, description } = req.body;
    console.log('>> check name', name);
    let result = await updateAProject(id, name, endDate, description);
    if (result) {
        return res.status(200).json({
            EC: 0,
            data: result
        })
    }
    else {
        return res.status(200).json({
            EC: -1,
            data: result
        })
    }
}

const deleteAProject = async (req, res) => {
    let id = req.body.id;
    let result = await deleteProject(id)
    if (result) {
        return res.status(200).json({
            EC: 0,
            data: result
        })
    }
    else {
        return res.status(200).json({
            EC: -1,
            data: result
        })
    }
}


module.exports = { postCreateProjectsAPI, getAllProject, putUpdateProject, deleteAProject };
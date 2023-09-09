
const { postCreateTask, getAllTasks, UpdateTaskAPI, deleteATaskService } = require('../services/taskServices');


const postCreateTaskAPI = async (req, res) => {
    console.log('>> check body', req.body.task);
    let result = await postCreateTask(req.body.task);

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

const getAllTaskAPI = async (req, res) => {
    console.log('>> check query', req.query);
    let Task = null;
    let { limit, page } = req.query;
    if (limit && page) {
        Task = await getAllTasks(limit, page, req.query);
    }
    else {
        Task = await getAllTasks();
    }
    if (Task) {
        return res.status(200).json({
            EC: 0,
            data: Task
        })
    }
    else {
        return res.status(200).json({
            EC: -1,
            data: Task
        })
    }

}

const putUpdateTaskAPI = async (req, res) => {
    let { id, name, description, endDate } = req.body;
    let result = await UpdateTaskAPI(id, name, description, endDate)
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

const deleteATaskAPI = async (req, res) => {
    let id = req.body.id;
    console.log('>> check id', id);
    let result = await deleteATaskService(id);
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

module.exports = { postCreateTaskAPI, getAllTaskAPI, putUpdateTaskAPI, deleteATaskAPI }
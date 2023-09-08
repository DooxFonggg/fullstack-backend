
const { postCreateTask } = require('../services/taskServices');

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

module.exports = { postCreateTaskAPI }
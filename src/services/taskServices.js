
const task = require('../models/task');

const postCreateTask = async (data) => {
    try {
        if (data.type === "CREATE-TASK")
            console.log('>> check data', data);
        let myTask = await task.insertMany(data);
        return myTask;
    } catch (error) {
        console.log('>> check err', error);
    }

}

module.exports = { postCreateTask }

const task = require('../models/task');
const aqp = require('api-query-params');

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

const getAllTasks = async (limit, page, queryString) => {
    try {
        console.log('>> check', limit)
        let result = null;
        if (limit && page) {
            let offset = (page - 1) * limit;
            console.log('check querystring', queryString)
            const { filter, skip } = aqp(queryString);
            delete filter.page;
            console.log('>> check filter', filter);
            result = await task.find(filter).skip(offset).limit(limit).exec();// exec giúp cho hàm chạy đúng thứ tự
        }
        else {
            result = await task.find({});
        }
        // truy vấn tất cả table db
        return result;
    } catch (error) {
        console.log('>> check error:', error);
        return null;
    }
}

const UpdateTaskAPI = async (id, name, description, endDate) => {
    console.log('>> check id', id);
    try {
        let result = await task.updateOne({ _id: id }, { name, description, endDate });
        return result;
    } catch (error) {
        console.log('>> check error', error);
        return null;
    }
}

const deleteATaskService = async (id) => {
    try {
        let result = await task.findByIdAndDelete({ _id: id });
        return result;
    } catch (error) {
        console.log('>> check error', error);
        return null;
    }
}

module.exports = { postCreateTask, getAllTasks, UpdateTaskAPI, deleteATaskService }
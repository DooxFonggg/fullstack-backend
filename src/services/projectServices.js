const project = require('../models/project');
const aqp = require('api-query-params');

const createProjectService = async (arr) => {
    try {
        if (arr.type === "EMPTY-PROJECT") {
            let result = await project.insertMany(arr);
            console.log('>> check result:', result);
            return result;
        }
        // them user vao du an
        if (arr.type === "ADD-USER") {

            // lay project
            let myProject = await project.findById(arr.projectId).exec();// tim project bang id


            // duyet qua arr cua phan nhap posman
            // Kiểm tra trùng lặp trong mảng usersInfor
            for (let i = 0; i < arr.userId.length; i++) {
                const userIdToAdd = arr.userId[i];
                // Kiểm tra xem userIdToAdd đã tồn tại trong mảng usersInfor chưa
                if (!myProject.usersInfor.includes(userIdToAdd)) {
                    myProject.usersInfor.push(userIdToAdd);
                }
            }
            let newResult = await myProject.save();
            return newResult;
        }
        if (arr.type === "REMOVE-USERS") {
            let myProject1 = await project.findById(arr.projectId).exec();// tim project bang id
            // duyet qua arr cua phan nhap posman
            // Kiểm tra trùng lặp trong mảng usersInfor
            for (let i = 0; i < arr.userId.length; i++) {
                const userIdToDelete = arr.userId[i];
                // Kiểm tra xem userIdToAdd đã tồn tại trong mảng usersInfor chưa
                // Nếu userIdToDelete tồn tại trong mảng, xóa người dùng ra khỏi mảng
                myProject1.usersInfor.splice(userIdToDelete);
            }
            let newResult1 = await myProject1.save();
            return newResult1;
        }
        if (arr.type === "ADD-TASKS") {
            // lay project
            let myProject2 = await project.findById(arr.projectId).exec();// tim project bang id


            // duyet qua arr cua phan nhap posman
            // Kiểm tra trùng lặp trong mảng usersInfor
            for (let i = 0; i < arr.taskId.length; i++) {
                const taskIdToAdd = arr.taskId[i];
                // Kiểm tra xem userIdToAdd đã tồn tại trong mảng usersInfor chưa
                if (!myProject2.tasks.includes(taskIdToAdd)) {
                    myProject2.tasks.push(taskIdToAdd);
                }
            }
            let newResult2 = await myProject2.save();
            return newResult2;
        }
    } catch (error) {
        console.log('>> check err', error);
    }
}

const getProjects = async (limit, page, queryString) => {
    try {
        let result = null;
        if (limit && page) {
            let offset = (page - 1) * limit;
            console.log('check querystring', queryString)
            const { filter, skip } = aqp(queryString);
            delete filter.page;
            console.log('>> check filter', filter);
            result = await project.find(filter).populate('usersInfor').populate('tasks')
                .skip(offset).limit(limit).exec();// exec giúp cho hàm chạy đúng thứ tự
        }
        else {
            result = await project.find({});
        }
        // truy vấn tất cả table db
        return result;
    } catch (error) {
        console.log('>> check error:', error);
        return null;
    }
}

const updateAProject = async (id, name, endDate, description) => {
    console.log('>> check id', id);
    try {
        let myProject = await project.updateOne({ _id: id }, { name, endDate, description });
        return myProject;
    } catch (error) {
        console.log('>> check error', error);
        return null;
    }
}

const deleteProject = async (id) => {
    try {
        let result = await project.findByIdAndDelete({ _id: id });
        return result;
    } catch (error) {
        console.log('>> check error', error);
        return null;
    }
}
module.exports = { createProjectService, getProjects, updateAProject, deleteProject };
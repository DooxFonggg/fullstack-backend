const project = require('../models/project');

const createProjectService = async (arr) => {
    try {
        if (arr.type === "EMPTY-PROJECT") {
            let result = await project.insertMany(arr);
            console.log('>> check result:', result);
        }
        // them user vao du an
        if (arr.type === "ADD-USER") {
            console.log('>> check data  ', arr);
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

        return result;
    } catch (error) {
        console.log('>> check err', error);
    }
}

module.exports = { createProjectService };
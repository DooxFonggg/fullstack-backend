const project = require('../models/project');

const createProjectService = async (arr) => {
    try {
        let result = await project.insertMany(arr);
        console.log('>> check result:', result);
        return result;
    } catch (error) {
        console.log('>> check err', error);
    }
}

module.exports = { createProjectService };
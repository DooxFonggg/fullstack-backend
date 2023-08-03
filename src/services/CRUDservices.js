const connection = require('../config/database');

const getAllUsers = async () => {
    let [results, fields] = await connection.query('SELECT *FROM Users u ');
    return results;
}
const getUserByID = async (userID) => {
    const [results, fields] = await connection.query('SELECT *FROM Users u where id = ?', [userID]);
    // console.log('>> check res', results)
    let user = results && results.length > 0 ? results[0] : {}
    return user;
}
module.exports = {
    getAllUsers, getUserByID
}
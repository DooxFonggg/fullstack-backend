const connection = require('../config/database');

const getAllUsers = async () => {
    let [results, fields] = await connection.query('SELECT *FROM Users u ');
    return results;
}
const getUserByID = async (userID) => {
    const [results, fields] = await connection.query('SELECT *FROM Users u where id = ?', [userID]);
    // console.log('>> check res', results)
    let user = results && results.length > 0 ? results[0] : {};
    return user;
}
const updateByID = async (email, name, city, id) => {
    const [results, fields] = await connection.query(
        ` UPDATE Users
        SET email = ?, name = ?, city= ?
        WHERE id = ? `,
        [email, name, city, id]
    );
}
const deleteUserByID = async (userID) => {
    const [results, fields] = await connection.query(
        ` DELETE FROM Users WHERE id = ? `,
        [userID]
    );
}
module.exports = {
    getAllUsers, getUserByID, updateByID, deleteUserByID
}
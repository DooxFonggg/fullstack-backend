const path = require('path');

const uploadSingleFile = async (fileObject) => {
    //fileObject = req.files.image (với image được đặt tên model)
    //uploadPath = tên 
    const originalFileName = path.parse(fileObject.name).name;// hoidanit.ing => hoidanit 
    // Get the file extension
    const fileExtension = path.extname(fileObject.name); // láy ra '.ing'
    const timestamp = Date.now();
    const newFileName = `${timestamp}${fileExtension}`;
    const uploadPath = path.join(__dirname, '..', 'public', 'images', 'upload', `${originalFileName}`) + newFileName;
    console.log('>> dirname', __dirname);//>> dirname D:\fullstack\backend0\src\services
    console.log('>>  fileObject.name', fileObject.name);//fileObject.name hoidanit.png
    console.log('>>  uploadPath', uploadPath);//>>  uploadPath D:\fullstack\backend0\src\serviceshoidanit.png
    // Use the mv() method to place the file somewhere on your server

    try {
        await fileObject.mv(uploadPath);// di chuyển hình ảnh vào file upload (dùng await để xử lý bất đồng bộ)
        return {
            status: 'success', // trạng thái
            path: 'link-image',// đường liên kết ảnh
            error: null
        }
    } catch (err) {//  nếu sai in ra lỗi sai
        console.log('>> check err', err);
        return {
            status: 'failed',
            path: null,
            error: JSON.stringify(err) //converse sang string cho phù hợp với giao diện
        }
    }
};

const uploadMultipleFiles = (req, res) => {

};

module.exports = { uploadSingleFile, uploadMultipleFiles }
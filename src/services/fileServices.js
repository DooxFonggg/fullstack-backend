
const path = require('path');

const uploadSingleFile = async (fileObject) => {
    //fileObject = req.files.image (với image được đặt tên model)
    //uploadPath = tên 
    const originalFileName = path.parse(fileObject.name).name;// hoidanit.ing => hoidanit 

    // Get the file extension
    const fileExtension = path.extname(fileObject.name); // láy ra '.ing'
    const timestamp = Date.now();
    const newFileName = `${timestamp}${fileExtension}`;
    const uploadPath = path.join(__dirname, '..', 'public', 'images', 'upload', `${originalFileName}`) + '-' + newFileName;
    console.log('>> dirname', __dirname);//>> dirname D:\fullstack\backend0\src\services
    console.log('>>  fileObject.name', fileObject.name);//fileObject.name hoidanit.png
    console.log('>>  uploadPath', uploadPath);//>>  uploadPath D:\fullstack\backend0\src\serviceshoidanit.png
    // Use the mv() method to place the file somewhere on your server
    const fileName = `${originalFileName}-${timestamp}${fileExtension}`
    try {
        await fileObject.mv(uploadPath);// di chuyển hình ảnh vào file upload (dùng await để xử lý bất đồng bộ)
        return {
            status: 'success', // trạng thái
            path: fileName,// đường liên kết ảnh được lưu vào DB
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

const uploadMultipleFiles = async (filesArr) => {
    try {
        let uploadPath = path.resolve(__dirname, "../public/images/upload");// duong dan vao file upload
        console.log('>> check uploadPath so 2', uploadPath);
        let resultArr = [];// tao arr de luu ket qua
        let countSuccess = 0;// bien dem
        for (let i = 0; i < filesArr.length; i++) {// filesArr.length đóng vai trò là số lượng file ảnh mk upload
            console.log("check i = ", i) // in số lần lặp
            //get image extension
            let extName = path.extname(filesArr[i].name);// lay duoi .img

            //get image's name (without extension)
            let baseName = path.basename(filesArr[i].name, extName);// lay ten vd: phong.img => ten la phong

            //create final path: eg: /upload/your-image.png
            let finalName = `${baseName}-${Date.now()}${extName}`// ghep ten
            let finalPath = `${uploadPath}/${finalName}`;// đường dẫn để move file ảnh vào như trên là /images/upload/tên file ảnh có timestams

            try {
                await filesArr[i].mv(finalPath);
                resultArr.push({
                    status: 'success',
                    path: finalName, // tên ảnh + timestams
                    fileName: filesArr[i].name, // ten anh goc
                    error: null
                }) // mảng  resultArr lưu obj của từng file ảnh fileArr
                countSuccess++;// dem ++
                // sai cũng push vào
            } catch (err) {
                resultArr.push({
                    status: 'failed',
                    path: null,
                    fileName: filesArr[i].name,
                    error: JSON.stringify(err) // comverse lỗi sang string
                })
            }
        }
        // trả về biến đếm + mảng kết quả => cho ta biết những file nào bị lỗi
        return {
            countSuccess: countSuccess,
            detail: resultArr
        }

    } catch (error) {
        console.log(error)
    }

}


module.exports = { uploadSingleFile, uploadMultipleFiles }
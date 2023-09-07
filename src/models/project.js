const mongoose = require('mongoose');
const mongoose_delete = require('mongoose-delete');

//shape data
//tạo schema customer(đóng vai trò khách hàng)
const customerSchema = new mongoose.Schema(
    {
        name: String,
        phone: String,
        email: String,
    }
);

// tạo schema user(đóng vai trò nhân viên)
const userSchema = new mongoose.Schema({
    name: String,
    email: String
});

const projectSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        startDate: String,
        endDate: String,
        description: String,
        customerInfor: customerSchema,
        usersInfor: [{ type: mongoose.Schema.Types.ObjectId, ref: 'user' }], // phan ref nhớ viết thường
        leader: userSchema,
        tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'task' }]
    },
    {
        timestamps: true, // createdAt, updatedAt
    }
);

// Override all methods
projectSchema.plugin(mongoose_delete, { overrideMethods: 'all' });

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;


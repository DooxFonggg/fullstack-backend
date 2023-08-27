const mongoose = require('mongoose');
//Soft Delete giúp tạo thêm 1 (hoặc 1 vài) fields để đánh dấu dữ liệu là xóa hay chưa.
const mongoose_delete = require('mongoose-delete');

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: String,
    phone: String,
    email: String,
    image: String,
    description: String,
},
    { timestamps: true }
);

customerSchema.plugin(mongoose_delete, { overrideMethods: 'all' });
//  { overrideMethods: 'all' } nói cho mongo biết là check điều kiện trước khi làm gì đó

// mongodb: { deleted: false, name: 'Fluffy' }

const Customer = mongoose.model('customer', customerSchema);

module.exports = Customer;
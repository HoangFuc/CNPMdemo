const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Webtruong', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const Schema = mongoose.Schema;

const account = new Schema ({
   mssv: String,
   password: String
},{
    collection: 'Account'
});

const AccountModel = mongoose.model('account', account);

const user = new Schema ({  
    mssv: String,
    hovaten: String,
    chuyennganh: String,
    Malop: String,
    dantoc: String
}, {
    collection: 'Users'
});

const UserModel = mongoose.model('user',user);


const point = new Schema ({
    mssv: String,
    maMH: Number,
    tenMH: String,
    diemquatrinh: Number,
    diemthi: Number,
    diemtong: Number,
    diemheso4: Number,
    diemchu: String
}, {
    collection: 'Point'
});

const pointModel = mongoose.model('point',point);

const lichhoc = new Schema ({
    mssv: String,
    tenMH: String,
    lop: String,
    cahoc: Number,
    phong: String,
    GV: String
}, {
    collection: 'Lichhoc'
});

const lichhocModel = mongoose.model('lichhoc',lichhoc)

module.exports = {AccountModel,UserModel,pointModel,lichhocModel}


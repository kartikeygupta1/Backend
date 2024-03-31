const {Schema, model } = require('../connection');

const mySchema = new Schema({

    username :{type : String, required : true},
    email : String,
    Name :String,
    password : String,
    cpassword : String
});
 module.exports = model('user', mySchema);

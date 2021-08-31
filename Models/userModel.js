const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    username:{
        type:String,
        required: true,
    },
    password:{
        type:String,
        required:true,
    },
    access_token:{
        type:String,
    }
});
module.exports=mongoose.model('users', userSchema);
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const studentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type :String,
        required :true,
        unique: true
    },
    age:{
        type:Number
    }
})

module.exports = mongoose.model('student' , studentSchema)
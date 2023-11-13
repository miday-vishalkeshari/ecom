const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true

        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true    
        },
        phone: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        role: {
            type: Boolean, // Change the type to Boolean
            default: false, //
          },
    },{timestamps: true}
)

module.exports = mongoose.model('users', userSchema);
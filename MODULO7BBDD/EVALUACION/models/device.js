const mongoose = require('mongoose');
const deviceSchema= new mongoose.Schema(
    {
        _id : {
                type : String,
                required: true,
                unique: true
            },
        name: {
            type : String, 
            required: true
        }        
    },
    {
        versionKey: false,
        collection: 'devices'
    }
);

module.exports = mongoose.model('Device', deviceSchema);
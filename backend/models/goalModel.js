// Creating model
const mongoose = require('mongoose');

const goalSchema = mongoose.Schema(
    {
        // assosciating single user to many goals(populating)
        user:{
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User', //which model to refer
        },
        text: {
            type: 'string',
            required: [true, 'Please add a text value']
        }
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Goal',goalSchema)
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subjectSchema = new Schema({
    name: {
        type: String,
        required: true
    }
}, {
    _id: false // Prevents creation of a separate _id for each subject
});

module.exports = subjectSchema;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const subjectSchema = require('./subject');

const semesterSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    subjects: [subjectSchema] // Embedding subjects within semester
}, {
    timestamps: true
});

const Semester = mongoose.model('Semester', semesterSchema);

module.exports = Semester;
    
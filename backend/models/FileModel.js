const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fileSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    fileType: {
        type: String,
        enum: ['note', 'question', 'syllabus'],
        required: true
    },
    filePath: {
        type: String,
        required: true
    },
    semester: {
        type: Schema.Types.ObjectId,
        ref: 'Semester',
        required: true
    },
    subjectName: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const File = mongoose.model('File', fileSchema);

module.exports = File;

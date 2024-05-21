const asyncHandler = require("express-async-handler");
const fs = require('fs');
const path = require('path');
const staticFolder = '../frontend/public/uploads';
const File = require('../models/FileModel');

const uploadFile = asyncHandler(async (req, res) => {
    try{
        const { semester, fileType, subjectName} = req.body;
        if (!semester || !fileType || !subjectName) {
            return res.status(400).json({ error: 'All fields are required' });
        }
        const newFile = new File({
            fileType,
            semester,
            subjectName
        });
        await newFile.save();
        res.status(201).json({ success: true, message: 'File added successfully' });
    }catch(error){
        console.log('Error adding file');
        console.log(error);
        res.status(500).send('An error occurred');
    }
});

const deleteFile = (req,res) => {
    const fileNameToDelete = req.params.fileName;
    if(!fileNameToDelete){
        res.status(500).send('File doesnt exist.');
    }
    const filePathToDelete = path.join(staticFolder, fileNameToDelete);

    // Check if the file exists before attempting to delete it
    fs.access(filePathToDelete, fs.constants.F_OK, (err) => {
        if (err) {
        res.status(404).send('File not found');
        return;
        }

        // File exists, proceed with deletion
        fs.unlink(filePathToDelete, (err) => {
        if (err) {
            res.status(500).send('Error deleting the file');
            return;
        }
        res.send('File deleted successfully');
        });
    });
}

module.exports = {uploadFile,deleteFile};
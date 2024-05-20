// const express = require('express');
// const router = express.Router();
// const File = require('../models/FileModel');

// function generateFileName() {
//     const date = new Date();
//     const fileName = `${date.getTime()}_${Math.floor(Math.random() * 100000)}${req.body.fileType}`;
//     return fileName;
// }

// router.route('/')
//     .get(async (req, res) => {
//         try {
//             const files = await File.find().populate({ path: 'semester' });
//             res.status(200).json(files);
//         } catch (error) {
//             res.status(500).json({ error: error.message });
//         }
//     })

//     .post(async (req, res) => {
//         try {
//             const file = new File({
//                 title: req.body.title,
//                 fileType: req.body.fileType,
//                 subjectName: req.body.subjectName,
//                 semester: req.body.semester,
//                 filePath: generateFileName()
//             });
//             await file.save();
//             res.status(201).json({ success: true, message: 'File created successfully' });
//         } catch (error) {
//             res.status(500).json({ error: error.message });
//         }
//     })
//     .get(async (req, res) => {
//         try {
//             const file = await File.findById(req.params.id).populate({ path: 'semester' });
//             if (!file) {
//                 return res.status(404).json({ error: 'File not found' });
//             }
//             res.status(200).json(file);
//         } catch (error) {
//             res.status(500).json({ error: error.message });
//         }
//     })

//     .put(async (req, res) => {
//         try {
//             const file = await File.findByIdAndUpdate(req.params.id, req.body, { new: true });
//             if (!file) {
//                 return res.status(404).json({ error: 'File not found' });
//             }
//             res.status(200).json(file);
//         } catch (error) {
//             res.status(500).json({ error: error.message });
//         }
//     })

//     .delete(async (req, res) => {
//         try {
//             const file = await File.findByIdAndRemove(req.params.id);
//             if (!file) {
//                 return res.status(404).json({ error: 'File not found' });
//             }
//             res.status(200).json({ success: true, message: 'File deleted successfully' });
//         } catch (error) {
//             res.status(500).json({ error: error.message });
//         }
//     });

// module.exports = router;
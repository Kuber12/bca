const express = require("express");
const upload = require("../middlewares/fileUpload");
const router = express.Router();
const {
    fileDetails,
    uploadFile
} = require("../controllers/fileController");

router.post
router.post("/upload", upload.single('fileInput'), uploadFile);
// router.delete("/:fileName/delete", deleteFile);

module.exports = router;
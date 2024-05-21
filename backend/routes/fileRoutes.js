const express = require("express");
const upload = require("../middlewares/fileUpload");
const router = express.Router();
const {
    uploadFile
} = require("../controllers/fileController");

// Fix the error: Route.post() requires a callback function but got a [object Undefined]
// router.post("/upload", upload.single("fileInput"), uploadFile);
router.post("/upload", uploadFile);
// router.delete("/:fileName/delete", deleteFile);

module.exports = router;

import express from "express"
import {
  createVedio,
  getAll,
  getVideoId,
} from "../controller/vedioPostController.js"
import multer from "multer"
import path from "path"
import fs from "fs"
const router = express.Router()

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/videos")
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname)
  },
})
const upload = multer({
  storage: storage,
  /* fileFilter: function (req, file, cb) {
    var ext = path.extname(file.originalname)

    if (ext !== ".mkv" && ext !== ".mp4") {
      return cb(new Error("Only videos are allowed!"))
    }

    cb(null, true)
  }, */
})

router.post(
  "/create",
  upload.fields([
    {
      name: "videos",
      maxCount: 5,
    },
  ]),
  createVedio
)
router.get("/all", getAll)
router.get("/single/:id", getVideoId)
export default router

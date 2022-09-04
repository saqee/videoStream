import Media from "../model/media.js"

export const getAll = async (req, res) => {
  try {
    const media = await Media.find()
    res.json(media)
  } catch (error) {
    console.log(error)
    res.status(400).json(error)
  }
}

export const getVideoId = async (req, res) => {
  try {
    const media = await Media.findById(req.params.id)
    res.status(200).json(media)
  } catch (error) {
    console.log(error)
    res.status(404).json(error)
  }
}

export const createVedio = async (req, res) => {
  const { name } = req.body
  let videosPaths = []

  if (Array.isArray(req.files.videos) && req.files.videos.length > 0) {
    for (let video of req.files.videos) {
      videosPaths.push("/" + video.path)
      console.log(videosPaths)
    }
  }

  try {
    const createdMedia = await Media.create({
      name,
      videos: videosPaths,
    })

    res.json({ message: "Media created successfully", createdMedia })
  } catch (error) {
    console.log(error)
    res.status(400).json(error)
  }
}

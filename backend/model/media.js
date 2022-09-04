import mongoose from "mongoose"

const MediaSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    videos: [{ type: String }],
  },
  {
    timestamps: true,
  }
)

const media = mongoose.model("media", MediaSchema)
export default media

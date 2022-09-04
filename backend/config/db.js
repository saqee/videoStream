import mongoose from "mongoose"
function db(url) {
  mongoose.connect(
    url,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("db connet")
    }
  )
}
export { db }

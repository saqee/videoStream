import React, { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
const UploadForm = ({ getAllMedias, userLogin }) => {
  const [name, setName] = useState("")
  const [videos, setVideos] = useState([])
  let navigate = useNavigate()
  useEffect(() => {
    if (!userLogin.password) {
      navigate("/uploadform")
    } else {
      navigate("/")
      getAllMedias()
    }
  }, [])
  const hadleSubmit = (e) => {
    e.preventDefault()

    let formdata = new FormData()
    for (let key in videos) {
      formdata.append("videos", videos[key])
    }

    formdata.append("name", name)

    axios
      .post(`api/v1/media/create`, formdata)
      .then((success) => {
        getAllMedias()
        alert("Submitted successfully")
      })
      .catch((error) => {
        console.log(error)
        alert("Error happened!")
      })
  }

  return (
    <>
      <form onSubmit={hadleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="videos">Upload Videos</label>
          <input
            type="file"
            name="videos"
            id="videos"
            className="form-control"
            onChange={(e) => {
              setVideos(e.target.files)
            }}
          />
        </div>

        <button type="submit" className="btn btn-primary mt-2">
          Submit
        </button>
      </form>
    </>
  )
}

export default UploadForm

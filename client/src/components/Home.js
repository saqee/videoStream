import React, { useState, useEffect } from "react"
import axios from "axios"
import UploadForm from "./UploadForm"
import UploadsList from "./UploadList"
import { useNavigate } from "react-router-dom"
const Home = ({ userLogin }) => {
  const [medias, setMedias] = useState([])
  let navigate = useNavigate()

  useEffect(() => {
    if (!userLogin.password) {
      navigate("/uploadform")
    } else {
      navigate("/")
      getAllMedias()
    }
  }, [])

  const getAllMedias = () => {
    axios
      .get(`api/v1/media/all`)
      .then((result) => {
        setMedias(result.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>All Vedios</h2>
      <div className="uploadList" style={{ display: "flex" }}>
        <UploadsList medias={medias} />
      </div>
    </div>
  )
}

export default Home

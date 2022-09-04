import axios from "axios"
import React, { useEffect, useState, memo } from "react"
import { useParams, Link } from "react-router-dom"
import Comment from "./Comment"
const SingleVedio = () => {
  let { id } = useParams()
  const [singleData, setSingleData] = useState({})
  const [comment, setComment] = useState("")
  const [isToggle, setIsToggle] = useState(true)
  const [medias, setMedias] = useState([])
  console.log(comment)
  useEffect(() => {
    axios
      .get(`api/v1/media/single/${id}`)
      .then((result) => {
        setSingleData(result.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [id])
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
  useEffect(() => {
    getAllMedias()
  }, [])
  const handleData = (item) => {
    setComment(item)
  }
  const handleChange = (event) => {
    if (event.target.checked) {
      console.log(" is checked")
    } else {
      console.log(" is NOT checked")
    }
    setIsToggle((current) => !current)
  }
  return (
    <div className="main_div m-2" style={{ display: "flex", gap: "20px" }}>
      <div
        class="card text-dark"
        style={{
          marginTop: "40px",
        }}
      >
        <div class="card-header">{singleData.name}</div>
        <div class="card-body">
          <>
            {singleData.videos?.map((video) => {
              return (
                <video preload="auto" width="1020" height="540" controls>
                  <source src={`${video}`} />
                  ;Your browser does not support the video tag.
                </video>
              )
            })}
          </>
          <Comment handleData={handleData} />
          <div class="container">
            <div class="row  d-flex justify-content-center">
              <div class="col-md-8">
                <div class="headings d-flex justify-content-between align-items-center mb-3">
                  <h5>Comments(6)</h5>

                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      onChange={handleChange}
                      id="flexCheckChecked"
                      checked={isToggle ? "checked" : ""}
                    />
                    <label class="form-check-label" for="flexCheckChecked">
                      ON/OFF
                    </label>
                  </div>
                </div>

                {isToggle ? (
                  <>
                    {" "}
                    <div class="card p-3">
                      <div class="d-flex justify-content-between align-items-center">
                        <div class="user d-flex flex-row align-items-center">
                          <img
                            src="https://i.imgur.com/hczKIze.jpg"
                            width="30"
                            class="user-img rounded-circle mr-2"
                          />
                          <span>
                            <small class="font-weight-bold text-primary">
                              {comment.name}
                            </small>{" "}
                            <br />
                            <small class="font-weight-bold ml-5">
                              {comment.message}
                            </small>
                          </span>
                        </div>

                        <small>2 days ago</small>
                      </div>
                    </div>
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="col-md-3"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "30px",
          marginTop: "100px",
        }}
      >
        <h3>Related Videos</h3>
        {medias &&
          medias.map((media) => {
            return (
              <div class="card text-dark mb-3" style={{ maxWidth: "20rem" }}>
                <div class="card-body">
                  <div class="card-header">{media.name}</div>
                  <>
                    {media.videos.map((video) => {
                      return (
                        <video preload="auto" width="220" height="240" controls>
                          <source src={`${video}`} />
                          ;Your browser does not support the video tag.
                        </video>
                      )
                    })}
                  </>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default memo(SingleVedio)

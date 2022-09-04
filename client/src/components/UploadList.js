import React, { useState } from "react"
import axios from "axios"
import { memo } from "react"
import { Link } from "react-router-dom"
const UploadsList = ({ medias }) => {
  return (
    <>
      <div
        className="col-md-12"
        style={{ display: "flex", flexWrap: "wrap", gap: "30px" }}
      >
        {medias &&
          medias.map((media) => {
            return (
              <div class="card text-dark mb-3" style={{ maxWidth: "20rem" }}>
                <div class="card-header">{media.name}</div>
                <div class="card-body">
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
                  <Link to={`/${media._id}`}>
                    <button>show more</button>
                  </Link>
                </div>
              </div>
            )
          })}
      </div>
    </>
  )
}

export default memo(UploadsList)

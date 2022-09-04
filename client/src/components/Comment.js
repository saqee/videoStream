import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate, useParams } from "react-router-dom"
const Comment = ({ handleData }) => {
  let { id } = useParams()
  const [data, setData] = useState("")

  const changeHandler = (e) => {
    setData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      }
    })
  }
  const dataSubmit = (e) => {
    e.preventDefault()
    handleData(data)
  }
  return (
    <div>
      Comment
      <form onSubmit={dataSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            onChange={changeHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="videos">Message</label>
          <textarea
            type="text"
            name="message"
            id="message"
            className="form-control"
            onChange={changeHandler}
          />
        </div>

        <button type="submit" className="btn btn-primary mt-2">
          Send
        </button>
      </form>
    </div>
  )
}

export default Comment

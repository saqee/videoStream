import React, { useState, useEffect } from "react"
import axios from "axios"
import Home from "./components/Home"
import UploadForm from "./components/UploadForm"
import SingleVedio from "./components/SingleVedio"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
const App = () => {
  const [userLogin, setUserLogin] = useState({
    userName: "john",
    password: "john123",
  })
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home userLogin={userLogin} />} />
          <Route path="/:id" element={<SingleVedio userLogin={userLogin} />} />
          <Route
            path="/uploadform"
            element={<UploadForm userLogin={userLogin} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

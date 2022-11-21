import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom"
import Axios from "axios"
import "../style/verify.css"


import { Container} from 'react-bootstrap'
import verifyImage from "../asset/search.png"


const url = "http://localhost:2000/users/verification"

function VerificationPage() {
  const defaultCode = "1334589"
  const params = useParams()
  const [verifycode, setVerifyCode] = useState()
  const [msg, setMsg] = useState("")
  const navigate = useNavigate()

  
const verifyToken = async (data) => {
  data.preventDefault()
  if (defaultCode !== verifycode){
    setMsg("Wrong Code")
  } else {
      await Axios.get(url, {
      headers: {
        Authorization: `Bearer ${params.token}`
      }
    })
    navigate("/")
  }
}


  return (
    <div className='keseluruhan'>
    <section className='verify' id='connect'>
      <Container className='container-verify'>
        <h1>Verification</h1>
      <form onSubmit={verifyToken}>
        <p>{msg}</p>
        <input type="text" maxLength="7" value={verifycode} onChange={(e) => setVerifyCode(e.target.value)} />
        <button className='btn-btn is-centered'>Submit</button>
      </form>
      <img src={verifyImage} alt="" />
      </Container>
    </section>
    </div>
  )
}

export default VerificationPage



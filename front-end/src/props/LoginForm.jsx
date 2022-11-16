import React, {useState, useEffect} from 'react'
import { Col, Container, Row } from "react-bootstrap"
import axios from "axios"
import {useNavigate} from "react-router-dom"

import "../style/LoginForm.css"

function LoginForm() {
    const [NIM, setNIM] = useState ("")
    const [password, setPassword] = useState("")
    const [msg, setMsg] = useState("")
    const navigate = useNavigate()

    const login = async (data) => {
        data.preventDefault()
        try{
            await axios.post("http://localhost:2000/users/login", {
                NIM,
                password
            })
            navigate("/")
        }catch(err){
            if(err.response) {
                setMsg(err.response.data)
            }
        }
    }
  return (
    <section className='login' id='connect'>
            <h1>Log In</h1>
            
        <Container className='container'>
            <form onSubmit={login}>
            <Row>
                <Col sm={6} className="px-1">
                <input type="text" className='input' placeholder='NIM' value={NIM} 
                 onChange = {(e) => setNIM(e.target.value)} />
                 </Col>
                
            </Row>
            <Row>
                <Col sm={6} className="px-1">
                <input type="password" className='input' placeholder='Password' value={password} 
                 onChange = {(e) => setPassword(e.target.value)} />
                </Col>
            </Row>
            <Row>
                <Col>
                <button type='submit'><span>Log In</span></button>
                </Col>
                <Col>  
                <h2>{msg}</h2>
                </Col>
            </Row>
            
            </form>
        </Container>
        </section>
  )
}

export default LoginForm

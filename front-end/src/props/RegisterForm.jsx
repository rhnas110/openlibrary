import React, { useState } from 'react'
import { Col, Container, Row, Button } from "react-bootstrap"

//img
import contactImg from "../asset/reading-book.png"

import axios from "axios"

import "../style/RegisterForm.css"


function RegisterForm() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [NIM, setNIM] = useState("")
    const [password, setPassword] = useState("")
    const [msg, setMsg] = useState("")
    

    const Auth = async (data) => {
        data.preventDefault()
        try {
            await axios.post("http://localhost:2000/users/register", {
                username,
                email,
                NIM,
                password,
            });
            
        } catch (err) {
            if(err.response) {
                setMsg(err.response.data)
            }
        }
    };

    return (
        <section className='contact' id='connect'>
            <h1>Register</h1>
            
        <Container className='container'>
            <form onSubmit={Auth}>
            <Row>
                <Col sm={6} className="px-1">
                <input type="text" className='input' placeholder='Username' value={username} 
                 onChange = {(e) => setUsername(e.target.value)} />
                    </Col>
                <Col sm={6} className="px-1">
                <input type="email" className='input' placeholder='Email' value={email} 
                 onChange = {(e) => setEmail(e.target.value)} />
                </Col>
            </Row>
            <Row>
                <Col sm={6} className="px-1">
                <input type="text" className='input' placeholder='NIM' value={NIM} 
                 onChange = {(e) => setNIM(e.target.value)} />
                </Col>
                <Col sm={6} className="px-1">
                <input type="password" className='input' placeholder='Password' value={password} 
                 onChange = {(e) => setPassword(e.target.value)} />
                </Col>
            </Row>
            <Row>
                <Col>
                <button type='submit'><span>Send</span></button>
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

export default RegisterForm


import React, { useState } from 'react'
import { Col, Container, Row, Button, Alert } from "react-bootstrap"
import {useDispatch} from "react-redux"
import { login } from '../redux/usersSlice'

//img
import contactImg from "../asset/reading-book.png"

import axios from "axios"
import "../style/RegisterForm.css"

import {Link} from "react-router-dom"


function RegisterForm() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [NIM, setNIM] = useState("")
    const [password, setPassword] = useState("")
    const [msg, setMsg] = useState("")
    const [show, setShow] = useState(false)
    const dispatch = useDispatch()

    const Auth = async (data) => {
        data.preventDefault()
        try {
            const response = await axios.post("http://localhost:2000/users/register", {
                username,
                email,
                NIM,
                password,
            });
            dispatch(login(response.data))
            localStorage.setItem("username", response.data.username)
            setShow(true)
        } catch (err) {
            if (err.response) {
                setMsg(err.response.data)
            }
        }
    };

    

    return (
        <section className='contact' id='connect'>
            <h1>Register</h1>

            <Container className='container'>
                <Alert show={show} variant="success">
                    Please Login And Check Your Gmail For Veryfication
                </Alert>
                <form onSubmit={Auth}>
                    <Row>
                        <Col sm={6} className="px-1">
                            <input type="text" className='input' placeholder='Username' value={username}
                                onChange={(e) => setUsername(e.target.value)} />
                        </Col>
                        <Col sm={6} className="px-1">
                            <input type="email" className='input' placeholder='Email' value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={6} className="px-1">
                            <input type="text" className='input' placeholder='NIM' value={NIM}
                                onChange={(e) => setNIM(e.target.value)} />
                        </Col>
                        <Col sm={6} className="px-1">
                            <input type="password" className='input' placeholder='Password' value={password}
                                onChange={(e) => setPassword(e.target.value)} />
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
                <div className='text-center mt-3'>
                <span>Sudah Punya Akun? <Link to="/login">Login</Link></span>
                </div>
            </Container>
        </section>

    )
}

export default RegisterForm


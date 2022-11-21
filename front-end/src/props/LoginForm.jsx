import React, {useState, useEffect} from 'react'
import { Col, Container, Row } from "react-bootstrap"
import axios from "axios"
import {useNavigate, Link} from "react-router-dom"
import { useDispatch } from "react-redux"
import { login } from '../redux/usersSlice'



import "../style/LoginForm.css"

function LoginForm() {
    const [NIM, setNIM] = useState ("")
    const [password, setPassword] = useState("")
    const [msg, setMsg] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const onLogin = async (data) => {
        data.preventDefault()
        try{
             const response = await axios.post("http://localhost:2000/users/login", {
                NIM,
                password
            })
            console.log(response.data)
            dispatch(login(response.data))
            localStorage.setItem("username", response.data.username)
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
            <form onSubmit={onLogin}>
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
            <div className='text-center mt-3'>
            <span>Belum Punya Akun? </span><Link to="/register">Register</Link>
            </div>
        </Container>
        </section>
  )
}

export default LoginForm

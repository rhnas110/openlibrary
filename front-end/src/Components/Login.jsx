import React, { useState, useEffect } from 'react'
import axios from "axios"
import { Prev } from 'react-bootstrap/esm/PageItem'
import LoginForm from '../props/LoginForm'

//framework
import { Container, Row, Col } from "react-bootstrap"
import "../style/registerlogin.css"

//img
import bookstack from "../asset/book-stack.png"

function Login() {
    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = [ "Enjoy", "Insightful"]
    const [text, setText] = useState("")
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 2000

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta)
        return () => { clearInterval(ticker) }
    })

    const tick = () => {
        let i = loopNum % toRotate.length
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)
        setText(updatedText)

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true)
            setDelta(period)
        } else if (isDeleting && updatedText === "") {
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(500)
        }
    }

    return (
        <div className='banner' id='home'>
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={5}>
                    <LoginForm/> 
                    </Col>
                    <Col xs={12} md={6} xl={7}>
                    <span className='tagline'>Welcome To Library App</span>
                        <h1>{"Thanks For Coming! I Hope U "}<span className='wrap'> {text}</span></h1>
                        <p>Share books about life and experiences with others. It is a lifetime record for all generations</p>
                        <img src={bookstack} alt="Headder Img" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Login

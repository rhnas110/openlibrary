import React from 'react'
import { useState, useEffect } from "react"
import axios from "axios"

//framework
import { Container, Row, Col } from "react-bootstrap"

//css
import "../style/registerlogin.css"

//img 
import readingBook from "../asset/reading-book.png"

import RegisterForm from '../props/RegisterForm'

function Register() {

    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = ["Login", "Verify"]
    const [text, setText] = useState("")
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 2000

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta)
        return () => { clearInterval(ticker) }
    }, [text])

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
                    <Col xs={12} md={6} xl={7}>
                        <span className='tagline'>Welcome To Library App</span>
                        <h1>{"If The Registration Is Complete, Don't Forget To"}<span className='wrap'> {text}</span></h1>
                        <img src={readingBook} alt="Headder Img" />
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                       <RegisterForm/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Register

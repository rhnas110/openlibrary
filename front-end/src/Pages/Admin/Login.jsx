import React, { useState, useEffect } from "react";
import Axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import {useDispatch} from "react-redux"
import { login } from "../../redux/usersSlice";

//framework
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"

import "../../style/loginAdmin.css"

export const LoginAdmin = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [msg, setMsg] = useState("")

  const navigate = useNavigate()

  const onLoginAdmin = async (data) => {
    data.preventDefault()
    try {
      await Axios.post("http://localhost:2000/users/loginadmin", {
        username,
        password
      })
      navigate("/dashboard")
    } catch (err) {
      if (err.response) {
        setMsg(err.response.data)
      }
    }
  }


  return (
    <div className="semua-loginpage">
    <div className="login-admin">
      <Container className="container-admin">
        <form onSubmit={onLoginAdmin}>
          <Row>
            <Col>
              <h2>Just For Admin</h2>
              <p>{msg}</p>
              <input type="text" className="input" placeholder="Username" value={username}
                onChange={(e) => setUsername(e.target.value)} />
            </Col>
          </Row>
          <Row>
            <Col>
              <input type="password" className="input" placeholder="Password" value={password}
                onChange={(e) => setPassword(e.target.value)} />
            </Col>
          </Row>
          <Row>
            <Col>
              <button type="submit" className="btn-admin">Login <ArrowRightCircle size={25} /></button>
            </Col>
          </Row>
          <Row>
            <Col>
              <span>Wrong Track?<Link to="/"> Back!</Link></span>
            </Col>
          </Row>
        </form>
      </Container>
    </div>
    </div>
  )
};

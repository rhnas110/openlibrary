import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Button,
  Badge,
  Modal,
  Stack,
} from "react-bootstrap";
import { MdLogin, MdRememberMe } from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";
import { Link } from "react-router-dom";
import { TfiShoppingCartFull } from "react-icons/tfi";

// redux
import { useSelector, useDispatch } from "react-redux";
import { whoLogin } from "../redux/checkSlice";

export const ThisNavbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [hoverOne, setHoverOne] = useState(false);
  const [hoverTwo, setHoverTwo] = useState(false);
  const dispatch = useDispatch();
  const checkUser = useSelector((state) => state.usersSlice.id);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  const handleOneEnter = () => {
    setHoverOne(true);
  };
  const handleOneLeave = () => {
    setHoverOne(false);
  };
  const handleTwoEnter = () => {
    setHoverTwo(true);
  };
  const handleTwoLeave = () => {
    setHoverTwo(false);
  };

  const checkLogin = (who) => {
    dispatch(whoLogin(who));
  };
  return (
    <div>
      <Navbar
        variant="dark"
        expand="lg"
        fixed="top"
        style={{ backgroundColor: "rgba(22, 47, 75,.69)" }}
      >
        <Container>
          <Navbar.Brand href="/" className="ms-4" id="zero-one">
            <span>OpenLibrary</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto justify-content-end flex-grow-1 mx-sm-3">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/books">Books</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Button variant="outline-light" hidden={checkUser ? false : true}>
                <TfiShoppingCartFull /> <Badge bg="light">0</Badge>
              </Button>
            </Nav>
            {/* button hilang kalo user login */}
            <Button
              variant="outline-light"
              onClick={handleShowModal}
              hidden={checkUser ? true : false}
            >
              Login
              <MdLogin />
            </Button>
            <Modal
              show={showModal}
              onHide={handleCloseModal}
              backdrop="static"
              keyboard={true}
              size="md"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title>Login</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Stack gap={3}>
                  <Button
                    className="p-3"
                    variant="none"
                    as={Link}
                    to={"/login"}
                    style={{
                      fontStyle: hoverOne ? "italic" : "",
                      transform: hoverOne ? "translateY(-.5rem)" : "",
                      color: hoverOne ? "rgba(1,1,1,.69)" : "",
                    }}
                    onMouseEnter={handleOneEnter}
                    onMouseLeave={handleOneLeave}
                    onClick={() => checkLogin(false)}
                  >
                    <Container className="rounded shadow">
                      <Row>
                        <Col
                          sm={3}
                          className="text-center p-2"
                          style={{ width: "6rem" }}
                        >
                          <MdRememberMe size="1x" style={{ height: "4rem" }} />
                        </Col>
                        <Col sm={9} className="p-4 fw-semibold text-left">
                          <span className="fw-normal">as</span> Member
                        </Col>
                      </Row>
                    </Container>
                  </Button>
                  <Button
                    className="p-3"
                    variant="none"
                    as={Link}
                    to={"/login"}
                    style={{
                      fontStyle: hoverTwo ? "italic" : "",
                      transform: hoverTwo ? "translateY(-.5rem)" : "",
                      color: hoverTwo ? "rgba(1,1,1,.69)" : "",
                    }}
                    onMouseEnter={handleTwoEnter}
                    onMouseLeave={handleTwoLeave}
                    onClick={() => checkLogin(true)}
                  >
                    <Container className="rounded shadow">
                      <Row>
                        <Col
                          sm={3}
                          className="text-center p-2"
                          style={{ width: "6rem" }}
                        >
                          <GrUserAdmin
                            size="1x"
                            style={{ height: "4rem" }}
                            className="p-1"
                          />
                        </Col>
                        <Col sm={9} className="p-4 fw-semibold text-left">
                          <span className="fw-normal">as</span> Admin
                        </Col>
                      </Row>
                    </Container>
                  </Button>
                </Stack>
              </Modal.Body>
            </Modal>

            {/* button hilang kalo user login */}
            {/* ada profile kalo user login */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

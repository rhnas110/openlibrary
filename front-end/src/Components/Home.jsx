import React, { useEffect } from "react";
import { Button, Form, Container, Card, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { allBooks } from "../redux/booksSlice";

import axios from "axios";

const backBooks = "http://localhost:2000/books/all";

export const Home = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.booksSlice.value);
  const getBooks = async () => {
    const result = await (await axios.get(backBooks)).data;
    dispatch(allBooks(result));
    // console.log(result);
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div>
      <div style={{ backgroundColor: "#162F4B" }} className="p-3">
        <Container style={{ width: "60%" }}>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Container>
      </div>
      <div className="p-4 text-black">
        <Container>
          <Row>
            {books.map((item, index) => {
              return (
                <Col md={3}>
                  <Card style={{ width: "18rem" }} key={index}>
                    <Card.Img
                      variant="top"
                      src={item.image}
                      style={{ height: "20rem" }}
                    />
                    <Card.Body>
                      <Card.Title className="fw-semibold">
                        {item.title}
                      </Card.Title>
                      <Card.Text>
                        <p style={{ opacity: ".5", fontStyle: "italic" }}>
                          {item.category}
                        </p>
                        <p>{item.author}</p>
                      </Card.Text>
                      <Button variant="primary">Pinjam</Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
};

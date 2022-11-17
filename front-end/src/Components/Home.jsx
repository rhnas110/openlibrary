import React, { useEffect } from "react";
import { Button, Form, Container, Card, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { allBook, alphaBook, readyBook } from "../redux/booksSlice";
import { BookSlider } from "./Books/BookSlider";
import { BookOrder } from "./Books/BookOrder";
import { BookStockReady } from "./Books/BookStockReady";

import axios from "axios";

const allBooks = "http://localhost:2000/books/all";
const readyBooks = "http://localhost:2000/books/ready";
// need params
const alphaBooks = "http://localhost:2000/books/";
// need params

export const Home = () => {
  const dispatch = useDispatch();
  const type = useSelector((state) => state.checkSlice.thisAlpha);

  const getBooks = async () => {
    const all = await (await axios.get(allBooks)).data;
    dispatch(allBook(all));
  };

  const alpBooks = async () => {
    const alpha = await (await axios.get(alphaBooks + type)).data;
    dispatch(alphaBook(alpha));
  };
  const getReadyBooks = async () => {
    const ready = await (await axios.get(readyBooks)).data;
    dispatch(readyBook(ready));
  };

  useEffect(() => {
    getBooks();
    alpBooks();
    getReadyBooks();
  }, [type]);

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
      <div>
        <BookSlider />
      </div>
      {/* <div>
        buku paling banyak dibaca
        <BookSlider />
      </div>
      <div>
        buku yang trending
        <BookSlider />
      </div>
      <div>
        buku kategori bisnis
        <BookSlider />
      </div>
      <div>
        buku kategori kids
        <BookSlider />
      </div>
    */}
      <div>
        get book by alphabet sort
        <BookOrder />
      </div>
      <div>
        buku yang stock nya ada
        <BookStockReady />
      </div>
    </div>
  );
};

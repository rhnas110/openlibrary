import React, { useEffect } from "react";
import { Button, Form, Container } from "react-bootstrap";
import axios from "axios";

// redux
import { useDispatch, useSelector } from "react-redux";
import {
  allBook,
  alphaBook,
  readyBook,
  businessBook,
  kidsBook,
} from "../redux/booksSlice";

// for books
import { BookSlider } from "./Books/BookSlider";
import { BookOrder } from "./Books/BookOrder";
import { BookStockReady } from "./Books/BookStockReady";
import { BookBusiness } from "./Books/BookBusiness";
import { BookKids } from "./Books/BookKids";

const allBooks = "http://localhost:2000/books/all";
const readyBooks = "http://localhost:2000/books/ready";

const books = "http://localhost:2000/books/";

export const Home = () => {
  const dispatch = useDispatch();
  const type = useSelector((state) => state.checkSlice.thisAlpha);

  const getBooks = async () => {
    const all = await (await axios.get(allBooks)).data;
    dispatch(allBook(all));
  };

  const alpBooks = async () => {
    const alpha = await (await axios.get(books + type)).data;
    dispatch(alphaBook(alpha));
  };
  const getReadyBooks = async () => {
    const ready = await (await axios.get(readyBooks)).data;
    dispatch(readyBook(ready));
  };
  const forBusiness = async () => {
    const business = await (
      await axios.get(books + "filter?category=business")
    ).data;
    dispatch(businessBook(business));
  };
  const forKids = async () => {
    const kids = await (await axios.get(books + "filter?category=kids")).data;
    dispatch(kidsBook(kids));
  };

  useEffect(() => {
    getBooks();
    alpBooks();
    getReadyBooks();
    forBusiness();
    forKids();
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
    */}
      <div>
        <BookBusiness />
      </div>
      <div>
        <BookKids />
      </div>
      <div>
        <BookOrder />
      </div>
      <div>
        <BookStockReady />
      </div>
    </div>
  );
};

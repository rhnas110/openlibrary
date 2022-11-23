import React, { useState } from "react";
import { Container, Stack, Form, Button, FloatingLabel } from "react-bootstrap";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./addbooks.css";

const url_book = "http://localhost:2000/admin";

export const AddBooks = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [publishDate, setPublishDate] = useState("");
  const [image, setImage] = useState("");
  const [author, setAuthor] = useState("");
  const [publisher, setPublisher] = useState("");
  const [abstract, setAbstract] = useState("");
  const [stocks, setStocks] = useState("");
  console.log(category);

  const newBook = async (e) => {
    e.preventDefault();
    try {
      // change alert with style
      if (!title && !category && !image && !author && !publisher && !abstract) {
        return alert("* can't be empty");
      }
      if (!title) {
        return alert("title can't be empty");
      }
      if (!category) {
        return alert("category can't be empty");
      }
      if (!image) {
        return alert("image can't be empty");
      }
      if (!author) {
        return alert("author can't be empty");
      }
      if (!publisher) {
        return alert("publisher can't be empty");
      }
      if (!abstract) {
        return alert("abstract can't be empty");
      }

      const thisBook = await axios.post(url_book, {
        title,
        category,
        publishDate,
        image,
        author,
        publisher,
        abstract,
        stocks,
      });
      navigate("/dashboard/paginationPage");
      return alert(`success add book ${thisBook.data.new_books.title}`);
    } catch (error) {
      alert(
        `${error.response.data.errors[0].message} The title = ${error.response.data.fields.title}`
      );
      console.log(error);
    }
  };
  return (
    <>
      <Container className="position-relative vh-100">
        <Stack
          style={{ width: "50%", position: "relative", top: "2.5%" }}
          className="border rounded m-auto p-3 mb-5"
        >
          <div className="mb-3 d-flex justify-content-between">
            <h3>Add Book</h3>
            <Button
              variant="outline-dark"
              as={Link}
              to={"/dashboard"}
              className="text-decoration-none"
            >
              Dashboard
            </Button>
          </div>
          <Form.Text className="text-muted">
            <span className="fw-bold" style={{ color: "red" }}>
              *
            </span>{" "}
            Required
          </Form.Text>
          <Form onSubmit={newBook}>
            <Form.Group className="mb-3">
              <Form.Label>
                Title <span className="required">*</span>
              </Form.Label>
              <Form.Control
                placeholder="ex: Meet Me After Sunset"
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>
                Category <span className="required">*</span>
              </Form.Label>
              {/* <FloatingLabel
                controlId="floatingSelect"
                label="Works with selects"
              > */}
              <Form.Select aria-label="Floating label select example">
                <option>Select Category</option>
                <option
                  value="Art"
                  onClick={(e) => setCategory(e.target.value)}
                >
                  Art
                </option>
                <option
                  value="Business"
                  onClick={(e) => setCategory(e.target.value)}
                >
                  Business
                </option>
                <option
                  value="Education"
                  onClick={(e) => setCategory(e.target.value)}
                >
                  Education
                </option>
                <option
                  value="Kids"
                  onClick={(e) => setCategory(e.target.value)}
                >
                  Kids
                </option>
                <option
                  value="Comedy"
                  onClick={(e) => setCategory(e.target.value)}
                >
                  Comedy
                </option>
                <option
                  value="Sastra"
                  onClick={(e) => setCategory(e.target.value)}
                >
                  Sastra
                </option>
                <option
                  value="Life Style"
                  onClick={(e) => setCategory(e.target.value)}
                >
                  Life Style
                </option>
                <option
                  value="Romance"
                  onClick={(e) => setCategory(e.target.value)}
                >
                  Romance
                </option>
                <option
                  value="Puisi"
                  onClick={(e) => setCategory(e.target.value)}
                >
                  Puisi
                </option>
                <option
                  value="Fiction"
                  onClick={(e) => setCategory(e.target.value)}
                >
                  Fiction
                </option>
                <option
                  value="Motivation"
                  onClick={(e) => setCategory(e.target.value)}
                >
                  Motivation
                </option>
                <option
                  value="Religion"
                  onClick={(e) => setCategory(e.target.value)}
                >
                  Religion
                </option>
                <option
                  value="Travel"
                  onClick={(e) => setCategory(e.target.value)}
                >
                  Travel
                </option>
                <option
                  value="Self Healing"
                  onClick={(e) => setCategory(e.target.value)}
                >
                  Self Healing
                </option>
              </Form.Select>
              {/* </FloatingLabel> */}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Publish Date</Form.Label>
              <Form.Control
                placeholder={`year: now (${new Date().getFullYear()})`}
                onChange={(e) => setPublishDate(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              {/* can input image from file and save image in public */}
              <Form.Label>
                Image <span className="required">*</span>
              </Form.Label>
              <Form.Control
                placeholder="ex: https://IMG-book.png"
                onChange={(e) => setImage(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>
                Author <span className="required">*</span>
              </Form.Label>
              <Form.Control
                placeholder="Author"
                onChange={(e) => setAuthor(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>
                Publisher <span className="required">*</span>
              </Form.Label>
              <Form.Control
                placeholder="Publisher"
                onChange={(e) => setPublisher(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>
                Abstract <span className="required">*</span>
              </Form.Label>
              {/* <FloatingLabel controlId="floatingTextarea2" label="Abstract"> */}
              <Form.Control
                as="textarea"
                placeholder="book of mastering magic..."
                style={{ height: "100px" }}
                onChange={(e) => setAbstract(e.target.value)}
              />
              {/* </FloatingLabel> */}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Stock</Form.Label>
              <Form.Control
                placeholder="default: 0"
                onChange={(e) => setStocks(e.target.value)}
              />
            </Form.Group>

            <div className="text-right">
              <Button variant="success" type="submit" style={{ width: "20%" }}>
                Save
              </Button>
            </div>
          </Form>
        </Stack>
      </Container>
    </>
  );
};

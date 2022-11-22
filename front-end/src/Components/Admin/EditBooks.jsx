import React, { useState, useEffect } from "react";
import { Container, Stack, Form, Button } from "react-bootstrap";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";

const url_book = "http://localhost:2000/admin";

export const EditBooks = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [publishDate, setPublishDate] = useState("");
  const [image, setImage] = useState("");
  const [author, setAuthor] = useState("");
  const [publisher, setPublisher] = useState("");
  const [abstract, setAbstract] = useState("");
  const [stocks, setStocks] = useState("");

  const editBook = async (e) => {
    e.preventDefault();
    try {
      const thisBook = await axios.patch(`${url_book}/edit-book/${id}`, {
        title,
        category,
        publishDate,
        image,
        author,
        publisher,
        abstract,
        stocks,
      });
      // console.log(thisBook);
      navigate("/dashboard/paginationPage");
      return alert(`success editing book`);
    } catch (error) {
      console.log(error);
    }
  };

  const getBookById = async () => {
    try {
      const response = await (await axios.get(`${url_book}/book/${id}`)).data;
      setTitle(response.title);
      setCategory(response.category);
      setPublishDate(response.publishDate);
      setImage(response.image);
      setAuthor(response.author);
      setPublisher(response.publisher);
      setAbstract(response.abstract);
      setStocks(response.stocks);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBookById();
  }, []);
  return (
    <>
      <Container className="position-relative vh-100">
        <Stack
          style={{ width: "50%", position: "relative", top: "2.5%" }}
          className="border rounded m-auto p-3 mb-5"
        >
          <div className="mb-3 d-flex justify-content-between">
            <h3>Edit Book</h3>
            <Button
              variant="outline-dark"
              as={Link}
              to={"/dashboard/paginationPage"}
              className="text-decoration-none"
            >
              Back
            </Button>
          </div>
          <Form.Text className="text-muted">
            <span className="fw-bold" style={{ color: "red" }}>
              *
            </span>{" "}
            Required
          </Form.Text>
          <Form onSubmit={editBook}>
            <Form.Group className="mb-3">
              <Form.Label>
                Title <span className="required">*</span>
              </Form.Label>
              <Form.Control
                placeholder="ex: Meet Me After Sunset"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>
                Category <span className="required">*</span>
              </Form.Label>

              <Form.Select aria-label="Floating label select example">
                <option value={category}>
                  {category ? category : "Select Category"}
                </option>
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
                value={publishDate}
                onChange={(e) => setPublishDate(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>
                Image <span className="required">*</span>
              </Form.Label>
              <Form.Control
                placeholder="ex: https://IMG-book.png"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>
                Author <span className="required">*</span>
              </Form.Label>
              <Form.Control
                placeholder="Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>
                Publisher <span className="required">*</span>
              </Form.Label>
              <Form.Control
                placeholder="Publisher"
                value={publisher}
                onChange={(e) => setPublisher(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>
                Abstract <span className="required">*</span>
              </Form.Label>
              <Form.Control
                as="textarea"
                placeholder="book of mastering magic..."
                value={abstract}
                style={{ height: "100px" }}
                onChange={(e) => setAbstract(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Stock</Form.Label>
              <Form.Control
                placeholder="default: 0"
                value={stocks}
                onChange={(e) => setStocks(e.target.value)}
              />
            </Form.Group>

            <div className="text-right">
              <Button
                variant="success"
                type="outline-submit"
                style={{ width: "20%" }}
              >
                Edit
              </Button>
            </div>
          </Form>
        </Stack>
      </Container>
    </>
  );
};

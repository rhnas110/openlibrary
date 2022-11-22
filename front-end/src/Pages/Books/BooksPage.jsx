import React, { useEffect, useRef, useState } from "react";
import { ThisNavbar } from "../../Components/Navbar";
import quote from "../../asset/quote.png";
import {
  Form,
  Button,
  DropdownButton,
  Dropdown,
  InputGroup,
  Card,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import axios from "axios";
import { allBook } from "../../redux/booksSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  changeDef,
  changeSearch,
  changeTwo,
  checkAlpha,
} from "../../redux/checkSlice";
import { Pagination } from "./Pagination";
import swal from "sweetalert";

const books = "http://localhost:2000/books/";

export const BooksPage = () => {
  const search = useRef("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(12);

  const dispatch = useDispatch();
  const { all } = useSelector((state) => state.booksSlice);
  const def = useSelector((state) => state.checkSlice.default);
  const { searchOne } = useSelector((state) => state.checkSlice);
  const { searchTwo } = useSelector((state) => state.checkSlice);
  const { thisAlpha } = useSelector((state) => state.checkSlice);
  const { username } = useSelector((state) => state.usersSlice.value);

  const getBooks = async () => {
    try {
      const resultAll = await (await axios.get(books + `${def}`)).data;
      if (resultAll.message) return dispatch(allBook(resultAll.message));
      dispatch(allBook(resultAll));
    } catch (error) {
      let err = error;
      console.log(error);
    }
  };

  const temp = async () => {
    try {
      dispatch(
        changeDef(`search?${searchTwo.toLowerCase()}=${search.current.value}`)
      );
    } catch (error) {
      console.log(error);
    }
  };

  const borrowBooks = (value) => {
    try {
      if (!username) {
        // return alert("Login Ya, Biar Nama Lu Di Panggil");
        return swal({
          title: "Login first",
          // text: "You clicked the button!",
          icon: "error",
          button: "Oke",
        });
      } else if (username) {
        return alert(`Halo ${username} Salam Literasi!`);
      }
      // console.log(value.title);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBooks();
  }, [def]);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = all.slice(firstPostIndex, lastPostIndex);

  const crossTitle = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    }
    return str;
  };
  return (
    <div>
      <div style={{ position: "relative" }}>
        <ThisNavbar />
      </div>
      <div
        style={{ position: "relative", top: "3rem" }}
        className="d-flex align-items-center justify-content-center"
      >
        <img
          src={quote}
          alt="quote"
          style={{
            borderRadius: "7rem",
            width: "70%",
            filter: "saturate(0.4)",
          }}
        />
      </div>
      <div
        className="container position-relative rounded"
        style={{ top: "6rem", border: "3px double rgba(1,2,3,.69)" }}
      >
        <div style={{ width: "80%", margin: "auto" }} className="mt-3">
          <Form className="d-flex justify-content-center">
            <div
              className="d-flex align-items-center p-2 border rounded"
              style={{ gap: "6px" }}
            >
              <div style={{ width: "33%", fontSize: "1.169rem" }}>
                Search the
              </div>
              <div>
                <DropdownButton
                  id={`order`}
                  drop={"down"}
                  variant="outline-dark"
                  title={searchOne}
                >
                  <Dropdown.Item
                    eventKey="1"
                    onClick={() => dispatch(changeSearch("Catalog"))}
                    active={searchOne === "Catalog" ? true : false}
                  >
                    Catalog
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="2"
                    onClick={() => dispatch(changeSearch("Sort"))}
                    active={searchOne === "Sort" ? true : false}
                  >
                    Sort
                  </Dropdown.Item>
                </DropdownButton>
              </div>
              <div style={{ fontSize: "1.169rem" }}>by</div>
              <div>
                {searchOne === "Catalog" ? (
                  <DropdownButton
                    id={`cat`}
                    drop={"down"}
                    variant="outline-dark"
                    title={searchTwo}
                  >
                    <Dropdown.Item
                      eventKey="1"
                      onClick={() => dispatch(changeTwo("Title"))}
                      active={searchTwo === "Title" ? true : false}
                    >
                      Title
                    </Dropdown.Item>
                    <Dropdown.Item
                      eventKey="2"
                      onClick={() => dispatch(changeTwo("Category"))}
                      active={searchTwo === "Category" ? true : false}
                    >
                      Category
                    </Dropdown.Item>
                    <Dropdown.Item
                      eventKey="3"
                      onClick={() => dispatch(changeTwo("Author"))}
                      active={searchTwo === "Author" ? true : false}
                    >
                      Author
                    </Dropdown.Item>
                    <Dropdown.Item
                      eventKey="4"
                      onClick={() => dispatch(changeTwo("Publisher"))}
                      active={searchTwo === "Publisher" ? true : false}
                    >
                      Publisher
                    </Dropdown.Item>
                  </DropdownButton>
                ) : (
                  <DropdownButton
                    id={`cat`}
                    drop={"down"}
                    variant="outline-dark"
                    title={thisAlpha === "asc" ? "A-Z" : "Z-A"}
                  >
                    <Dropdown.Item
                      eventKey="1"
                      onClick={() =>
                        dispatch(checkAlpha("asc"), dispatch(changeDef("asc")))
                      }
                      active={thisAlpha === "asc" ? true : false}
                    >
                      A-Z
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item
                      eventKey="2"
                      onClick={() =>
                        dispatch(
                          checkAlpha("desc"),
                          dispatch(changeDef("desc"))
                        )
                      }
                      active={thisAlpha === "desc" ? true : false}
                    >
                      Z-A
                    </Dropdown.Item>
                  </DropdownButton>
                )}
              </div>
              <InputGroup>
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  style={{ width: "70%" }}
                  ref={search}
                  disabled={searchOne === "Sort" ? true : false}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      temp();
                      e.preventDefault();
                    }
                  }}
                />
                <Button
                  variant="outline-dark"
                  onClick={temp}
                  disabled={searchOne === "Sort" ? true : false}
                >
                  <BiSearchAlt />
                </Button>
              </InputGroup>
            </div>
          </Form>
        </div>
        <div
          className="m-auto mt-3 mb-3 rounded p-3"
          style={{ width: "90%", border: "1px solid rgba(1,1,1,.69)" }}
        >
          <Container>
            <Row>
              {all === "buku tidak ada" ? (
                <div className="text-center fst-italic">{all}</div>
              ) : (
                currentPosts?.map((item, index) => (
                  <Col md={3} key={index}>
                    <Card
                      style={{ textDecoration: "none" }}
                      bg="dark"
                      as={Link}
                      to={`/getdetail/${item.id}`}
                    >
                      <Card.Img
                        variant="top"
                        src={item.image}
                        style={{ height: "16rem" }}
                      />
                      <Card.Body>
                        <Card.Title>{crossTitle(item?.title, 15)}</Card.Title>
                        <Card.Text style={{ opacity: ".5" }}>
                          {item.category}
                        </Card.Text>
                        <Card.Text>{item.author}</Card.Text>
                      </Card.Body>
                      <Button style={{ opacity: "0" }}>{"n"}</Button>
                    </Card>
                    <div
                      style={{
                        zIndex: "10",
                        position: "relative",
                        top: "-3.3rem",
                      }}
                    >
                      <Button
                        className="w-100 rounded-0 border-top"
                        variant="dark"
                        disabled={item.stocks === 0 ? true : false}
                        onClick={() => borrowBooks(item)}
                      >
                        {item.stocks === 0 ? "Unavailable" : "Borrow"}
                      </Button>
                    </div>
                  </Col>
                ))
              )}
            </Row>
          </Container>
          <div>
            {
              <Pagination
                totalPosts={all.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
              />
            }
          </div>
        </div>
      </div>
    </div>
  );
};

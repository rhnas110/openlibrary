import React, { useState, useEffect } from "react";
import Axios from "axios";
import ReactPaginate from "react-paginate";
import { Table, Button } from "react-bootstrap";
import FilterBook from "./FilterBook";
import { Link } from "react-router-dom";

import "../../style/PaginationAdmin.css";

const url_bookAdm = "http://localhost:2000/admin";

function PaginationAdmin() {
  const [bookList, setBookList] = useState([]);
  const [bookListAsc, setBookListAsc] = useState([]);
  const [bookListSort, setBookListSort] = useState([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(3);
  const [pages, setPages] = useState(0);
  const [rows, setRows] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");

  const getBookList = async () => {
    setLoading(true);
    const response = await Axios.get(
      `http://localhost:2000/admin/pagination?search_query=${keyword}&page=${page}&limit=${limit}`
    );
    setBookList(response.data.result);
    setBookListAsc(response.data.result);
    setBookListSort(response.data.resultDesc);
    setPage(response.data.page);
    setPages(response.data.totalPage);
    setRows(response.data.totalRows);
    setLoading(false);
  };

  const deleteBook = async (item) => {
    try {
      await Axios.delete(`${url_bookAdm}/book/${item.id}`);
      getBookList();
      return alert(`success delete book ${item.title}`);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getBookList();
  }, [page, keyword]);

  const changePage = ({ selected }) => {
    setPage(selected);
  };

  if (loading && bookList.length === 0) {
    return <h2>Loading ...</h2>;
  }

  const searchData = (e) => {
    e.preventDefault();
    setPage(0);
    setKeyword(query);
  };

  const BookListSort = () => {
    setBookList(bookListSort);
  };
  const bookListBiasa = () => {
    setBookList(bookListAsc);
  };

  return (
    <div className="full">
      <div className="form-pagination">
        <form onSubmit={searchData}>
          <div className="search-pagination">
            <input
              type="text"
              className="input"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="You Can Search By Title And Category Only"
            />
          </div>
          <div>
            <button className="button-pagination" type="submit">
              Search
            </button>
          </div>
          <button onClick={BookListSort} className="btn-Descending">
            Descending
          </button>
          <button className="btn-ascending" onClick={bookListBiasa}>
            Ascending
          </button>
        </form>
      </div>
      <div className="table-bookList">
        <Table striped bordered hover variant="light">
          <thead>
            <tr>
              <th>No</th>
              <th>Title</th>
              <th>Category</th>
              <th>PublishDate</th>
              <th>Author</th>
              <th>Publisher</th>
              <th>Abstract</th>
              <th>Control</th>
            </tr>
          </thead>
          <tbody>
            {bookList.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.title}</td>
                <td>{item.category}</td>
                <td>{item.publishDate}</td>
                <td>{item.author}</td>
                <td>{item.publisher}</td>
                <td>{item.abstract}</td>
                <td>
                  <Button
                    variant="info"
                    as={Link}
                    to={`../dashboard/edit-book/${item.id}`}
                  >
                    Setting
                  </Button>
                  <Button
                    variant="danger"
                    className="button-td"
                    onClick={() => deleteBook(item)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <p>
        Total Buku : {rows}, Page : {rows ? page + 1 : 0} of {pages}
      </p>
      <div className="paginate">
        <nav className="paginatee" role="navigation">
          <ReactPaginate
            className="paginateee"
            previousLabel={"< Prev"}
            nextLabel={"> Next"}
            pageCount={pages}
            onPageChange={changePage}
          />
        </nav>
        <h1>Filter By Category?</h1>
      </div>
      <div className="row justify-content-center">
        <FilterBook />
      </div>
    </div>
  );
}

export default PaginationAdmin;

import React from "react";
import { useSelector } from "react-redux";
import "./Pagination.css";

export const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  const { all } = useSelector((state) => state.booksSlice);
  console.log(all);
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="pagination p-2">
      {all === "buku tidak ada"
        ? ""
        : pages.map((page, index) => {
            return (
              <button
                key={index}
                onClick={() => setCurrentPage(page)}
                className={page == currentPage ? "active" : ""}
              >
                {page}
              </button>
            );
          })}
    </div>
  );
};

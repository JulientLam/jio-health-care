import React from "react";
import propTypes from "prop-types";
import "./style.css";
ProductPaging.propTypes = {
  total: propTypes.number.isRequired,
  limited: propTypes.number.isRequired,
  offset: propTypes.number.isRequired,
  changeOffset: propTypes.func.isRequired,
};

function ProductPaging(props) {
  const { total, limited, offset, changeOffset } = props;

  const totalPage = Math.ceil(total / limited);
  const startAt =
    totalPage <= 5 ? 0 : totalPage - offset <= 4 ? totalPage - 4 : offset;
  const items = [...Array(totalPage).keys()].slice(startAt, startAt + 4);

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination jio-paging">
        <li className={`page-item ${offset <= 0 ? " disabled" : ""}`}>
          <button
            className="page-link"
            href="#"
            aria-label="Previous"
            onClick={() => changeOffset(offset - 1)}
          >
            <span aria-hidden="true">&laquo;</span>
            <span className="sr-only">Previous</span>
          </button>
        </li>
        {items.map((page, index) => {
          return (
            <li
              className={`page-item ${offset === page ? "active" : ""}`}
              key={index}
            >
              <button
                className="page-link"
                href="#"
                onClick={() => changeOffset(page)}
              >
                {page + 1}
              </button>
            </li>
          );
        })}

        <li
          className={`page-item ${totalPage - 4 <= offset ? "disabled" : ""}`}
        >
          <button
            className="page-link"
            href="#"
            aria-label="Next"
            onClick={() => props.changeOffset(offset + 1)}
          >
            <span aria-hidden="true">&raquo;</span>
            <span className="sr-only">Next</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default ProductPaging;

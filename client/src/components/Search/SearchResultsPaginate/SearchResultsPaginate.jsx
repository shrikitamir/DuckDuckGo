import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import SearchResults from '../SearchResults/SearchResults';
import './SearchResultsPaginate.css';

const PaginatedItems = ({ itemsPerPage, results }) => {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(results.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(results.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, results]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % results.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <SearchResults currentItems={currentItems} />
      <ReactPaginate
        className="pagination"
        previousClassName="pagination-previous"
        nextClassName="pagination-next"
        pageClassName="pagination-page"
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

export default PaginatedItems;


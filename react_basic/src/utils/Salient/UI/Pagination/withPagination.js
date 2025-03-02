import React, { useState } from 'react';

const withPagination = (config = {}) => (WrappedComponent) => {
  return ({ items = [], itemsPerPage = config.itemsPerPage || 5, pageRange = config.pageRange || 4, children, ...props }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(items.length > 0 ? items.length : React.Children.count(children) / itemsPerPage);

    const [pageLimit, setPageLimit] = useState({
      min: 1,
      max: Math.min(totalPages, currentPage + pageRange),
    });

    const paginatedItems = items.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );

    const togglePage = (action) => {
      setCurrentPage((prevPage) => {
        const newPage = action === 'prev' ? prevPage - 1 : prevPage + 1;
        if (newPage < 1 || newPage > totalPages) return prevPage;
        limitPaging(newPage);
        return newPage;
      });
    };

    const limitPaging = (page) => {
      const offset = Math.floor(pageRange / 2);
      setPageLimit({
        min: Math.max(1, page - offset),
        max: Math.min(totalPages, page + offset),
      });
    };

    const renderChildren = () => {
      if (typeof children === "function") {
        // Render prop pattern: children is a function
        return children(paginatedItems);
      }

      // Fallback: directly use children (for cases like SampleDynamicTable) and Static Table

      /* For static table only */
      const rows = React.Children.toArray(children)

      const paginatedRows = rows.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
      );
      /* End of static table paginatedRows */

      // return the children of dynamic table (children) or static table paginatedRow
      return paginatedRows.length > 0 ? paginatedRows : children;

    };

    return (
      <div>
        <WrappedComponent {...props} items={paginatedItems} data={items}>
          {renderChildren()}
        </WrappedComponent>
        <div className="pagination-container">
          <nav>
            <ul className="pagination">
              <li
                onClick={() => togglePage('prev')}
                className={currentPage === 1 ? 'disabled' : ''}
              >
                <span><i className="icon icon-left" /> <span className="sr-only">(previous)</span></span>
              </li>
              {Array.from({ length: totalPages }, (_, index) => (
                <li
                  key={index + 1}
                  className={currentPage === index + 1 ? 'active' : ''}
                  onClick={() => {
                    setCurrentPage(index + 1);
                    limitPaging(index + 1);
                  }}
                  style={{
                    display: index + 1 > pageLimit.max || index + 1 < pageLimit.min ? 'none' : '',
                  }}
                >
                  <span>{index + 1}</span>
                </li>
              ))}
              <li
                onClick={() => togglePage('next')}
                className={currentPage === totalPages ? 'disabled' : ''}
              >
                <span><i className="icon icon-right" /> <span className="sr-only">(next)</span></span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  };
};

export default withPagination;
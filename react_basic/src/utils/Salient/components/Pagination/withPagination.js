import React, { useState } from 'react';

const withPagination = (WrappedComponent) => {
  return ({ items, itemsPerPage = 5, ...props }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(items.length / itemsPerPage);
    const [pageLimit, setPageLimit] = useState({min: 1, max: Math.min(totalPages, currentPage + 4)})

    const paginatedItems = items.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );

    const togglePage = (action) => {
        let newPage;
        if(action == 'prev'){
            if (currentPage === 1) return;
            setCurrentPage((prevState) => {
                newPage = prevState - 1;
                return newPage;
            });
        } else {
            if (currentPage === totalPages) return;
            setCurrentPage((prevState) => {
                newPage = prevState + 1;
                return newPage;
            });
        }

        limitPagging(newPage);
       
    }

    const limitPagging = (page) => {
        let start = Math.max(1, page - 2);
        let end = Math.min(totalPages, page + 2);
        setPageLimit((prevState) => ({...prevState, min: start, max: end}));
    }

    return (
        <div>
            <WrappedComponent items={paginatedItems} {...props} />
            <div className="pagination-container">
                <nav>
                    <ul className="pagination">
                        <li data-page="prev" onClick={() => togglePage('prev')}>
                            <span><i className="icon icon-left"/> <span className="sr-only">(previous)</span></span>
                        </li>
                        {Array.from({ length: totalPages }, (_, index) => (
                            <li 
                                key={index + 1} 
                                className={currentPage === index + 1 ? 'active' : ''} 
                                onClick={() => {setCurrentPage(index + 1); limitPagging(index + 1)}} 
                                style={{display: (index + 1 > pageLimit.max || index + 1 < pageLimit.min) ? 'none' : ''}}>
                                <span>
                                    {index + 1}
                                </span>
                            </li>
                        ))}
                        <li data-page="next" onClick={() => togglePage('next')}>
                            <span><i className="icon icon-right"/> <span className="sr-only">(next)</span></span>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
  };
};

export default withPagination;
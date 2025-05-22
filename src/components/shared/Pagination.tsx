/*
import React from "react";
import _ from "lodash";
import {withRouter} from "react-router-dom";


class Pagination extends React.Component {

    renderLastPaginationButton() {
        // Render only if we are 2 pages before
        if (this.props.pageMeta.current_page_number < this.props.pageMeta.number_of_pages - 2) {

            return (
                <li className="page-item" data-toggle="tooltip" data-placement="top" title="Go to last page">
                    <a className="page-link"
                       onClick={e => this.props.loadMore(this.props.location.pathname, this.props.pageMeta.number_of_pages, this.props.pageMeta.requested_page_size)}>
                        <span aria-hidden="true">&raquo;</span>
                        <span className="sr-only"> {this.props.pageMeta.total_page_count}</span>
                    </a>
                </li>
            );
        }
    }

    renderFirstPaginationButton() {
        // Render only if we are 2 pages above the first
        if (this.props.pageMeta.current_page_number >= 3) {
            return (
                (<li className="page-item" data-toggle="tooltip" data-placement="top" title="Go to first page">
                    <a className="page-link"
                       onClick={e => this.props.loadMore(this.props.location.pathname, 1, this.props.pageMeta.requested_page_size)}>
                        1
                    </a>
                </li>));
        }

    }

    
    // <ul className="pagination justify-content-center mb-4">
    //                     <li className="page-item">
    //                         <a className="page-link" href="#">&larr; Older</a>
    //                     </li>
    //                     <li className="page-item disabled">
    //                         <a className="page-link" href="#">Newer &rarr;</a>
    //                     </li>
    //                 </ul>
                    
    renderPagination() {
        if (!_.isEmpty(this.props.pageMeta)) {
            const lastRecord = this.props.pageMeta.current_items_count + this.props.pageMeta.offset;
            const firstRecord = this.props.pageMeta.offset + 1;
            const totalItemsCount = this.props.pageMeta.total_items_count;

            return (
                <div className="row">
                    <b> {firstRecord}-{lastRecord}/{totalItemsCount}</b> <br/>
                    <nav aria-label="Page navigation example">

                        <ul className="pagination">
                            {this.renderFirstPaginationButton()}
                            {this.props.pageMeta.has_prev_page &&
                            (<li className="page-item" data-toggle="tooltip" data-placement="top"
                                 title="Previous page">
                                <span className="page-link"
                                      onClick={e => this.props.loadMore(this.props.location.pathname, this.props.pageMeta.prev_page_number, this.props.pageMeta.page_size)}>
                                    {this.props.pageMeta.prev_page_number}
                                </span>
                            </li>)}

                            <li className="page-item active">
                                <a className="page-link page-ite">
                                    {this.props.pageMeta.current_page_number}
                                </a>
                            </li>
                            {this.props.pageMeta.has_next_page &&
                            <li className="page-item">
                                <a className="page-link"
                                   onClick={e => this.props.loadMore(this.props.location.pathname, this.props.pageMeta.next_page_number, this.props.pageMeta.request_page_size)}>
                                    {this.props.pageMeta.next_page_number}
                                </a>
                            </li>}
                            {this.renderLastPaginationButton()}
                        </ul>
                    </nav>
                </div>
            )
        }
    }

    render() {
        return <>
            {this.renderPagination()}
        </>
    }
}

export default withRouter(Pagination);
*/

// VERSION 02
// import _ from "lodash";
// import { useLocation, useNavigate } from "react-router-dom";

// const Pagination = (props) => {
//     const location = useLocation();
//     const navigate = useNavigate();

//     const renderLastPaginationButton = () => {
//         if (props.pageMeta.current_page_number < props.pageMeta.number_of_pages - 2) {
//             return (
//                 <li className="page-item" data-toggle="tooltip" data-placement="top" title="Go to last page">
//                     <a className="page-link"
//                        onClick={() => props.loadMore(location.pathname, props.pageMeta.number_of_pages, props.pageMeta.requested_page_size)}>
//                         <span aria-hidden="true">&raquo;</span>
//                         <span className="sr-only"> {props.pageMeta.total_page_count}</span>
//                     </a>
//                 </li>
//             );
//         }
//     };

//     const renderFirstPaginationButton = () => {
//         if (props.pageMeta.current_page_number >= 3) {
//             return (
//                 <li className="page-item" data-toggle="tooltip" data-placement="top" title="Go to first page">
//                     <a className="page-link"
//                        onClick={() => props.loadMore(location.pathname, 1, props.pageMeta.requested_page_size)}>
//                         1
//                     </a>
//                 </li>
//             );
//         }
//     };

//     const renderPagination = () => {
//         if (!_.isEmpty(props.pageMeta)) {
//             const lastRecord = props.pageMeta.current_items_count + props.pageMeta.offset;
//             const firstRecord = props.pageMeta.offset + 1;
//             const totalItemsCount = props.pageMeta.total_items_count;

//             return (
//                 <div className="row">
//                     <b> {firstRecord}-{lastRecord}/{totalItemsCount}</b> <br/>
//                     <nav aria-label="Page navigation example">
//                         <ul className="pagination">
//                             {renderFirstPaginationButton()}
//                             {props.pageMeta.has_prev_page &&
//                             (<li className="page-item" data-toggle="tooltip" data-placement="top"
//                                  title="Previous page">
//                                 <span className="page-link"
//                                       onClick={() => props.loadMore(location.pathname, props.pageMeta.prev_page_number, props.pageMeta.page_size)}>
//                                     {props.pageMeta.prev_page_number}
//                                 </span>
//                             </li>)}

//                             <li className="page-item active">
//                                 <a className="page-link page-ite">
//                                     {props.pageMeta.current_page_number}
//                                 </a>
//                             </li>
//                             {props.pageMeta.has_next_page &&
//                             <li className="page-item">
//                                 <a className="page-link"
//                                    onClick={() => props.loadMore(location.pathname, props.pageMeta.next_page_number, props.pageMeta.request_page_size)}>
//                                     {props.pageMeta.next_page_number}
//                                 </a>
//                             </li>}
//                             {renderLastPaginationButton()}
//                         </ul>
//                     </nav>
//                 </div>
//             );
//         }
//     };

//     return (
//         <>
//             {renderPagination()}
//         </>
//     );
// };

// export default Pagination;

// VERSION 03

// const Pagination = ({ currentPage, totalPages, onPageChange }) => {
//     // Generate an array of page numbers to display
//     const getPageNumbers = () => {
//         const pages = [];
        
//         // Logic to show current page, and a few pages before/after
//         const maxPagesToShow = 4;
//         let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
//         let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
        
//         // Adjust if we're near the end
//         if (endPage - startPage + 1 < maxPagesToShow) {
//             startPage = Math.max(1, endPage - maxPagesToShow + 1);
//         }
        
//         for (let i = startPage; i <= endPage; i++) {
//             pages.push(i);
//         }
        
//         return pages;
//     };
    
//     // Handle clicking on a page number
//     const handlePageClick = (page) => {
//         if (page === currentPage) return;
//         onPageChange(page);
//     };
    
//     // Previous page button handler
//     const handlePrevious = () => {
//         if (currentPage > 1) {
//             onPageChange(currentPage - 1);
//         }
//     };
    
//     // Next page button handler
//     const handleNext = () => {
//         if (currentPage < totalPages) {
//             onPageChange(currentPage + 1);
//         }
//     };
    
//     // Generate the array of page numbers
//     const pageNumbers = getPageNumbers();
    
//     // Don't render pagination if there's only one page
//     if (totalPages <= 1) return null;
    
//     return (
//         <nav className="pagination" aria-label="Pagination">
//             <ul className="pagination-list">
//                 {/* First page button */}
//                 <li>
//                     <button 
//                         onClick={() => handlePageClick(1)} 
//                         disabled={currentPage === 1}
//                         aria-label="Go to first page">
//                         &laquo;
//                     </button>
//                 </li>
                
//                 {/* Previous button */}
//                 <li>
//                     <button 
//                         onClick={handlePrevious} 
//                         disabled={currentPage === 1}
//                         aria-label="Go to previous page">
//                         &lsaquo;
//                     </button>
//                 </li>
                
//                 {/* Show ellipsis if start page is not 1 */}
//                 {pageNumbers[0] > 1 && (
//                     <li>
//                         <span className="pagination-ellipsis">&hellip;</span>
//                     </li>
//                 )}
                
//                 {/* Page numbers */}
//                 {pageNumbers.map(page => (
//                     <li key={page}>
//                         <button 
//                             onClick={() => handlePageClick(page)}
//                             className={currentPage === page ? 'is-active' : ''}
//                             aria-label={`Go to page ${page}`}
//                             aria-current={currentPage === page ? 'page' : undefined}>
//                             {page}
//                         </button>
//                     </li>
//                 ))}
                
//                 {/* Show ellipsis if end page is not last page */}
//                 {pageNumbers[pageNumbers.length - 1] < totalPages && (
//                     <li>
//                         <span className="pagination-ellipsis">&hellip;</span>
//                     </li>
//                 )}
                
//                 {/* Next button */}
//                 <li>
//                     <button 
//                         onClick={handleNext} 
//                         disabled={currentPage === totalPages}
//                         aria-label="Go to next page">
//                         &rsaquo;
//                     </button>
//                 </li>
                
//                 {/* Last page button */}
//                 <li>
//                     <button 
//                         onClick={() => handlePageClick(totalPages)} 
//                         disabled={currentPage === totalPages}
//                         aria-label="Go to last page">
//                         &raquo;
//                     </button>
//                 </li>
//             </ul>
//         </nav>
//     );
// };

// export default Pagination;

// VERSION 04
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    // Generate an array of page numbers to display
    const getPageNumbers = () => {
        const pages = [];
        
        // Logic to show current page, and a few pages before/after
        const maxPagesToShow = 4;
        let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
        let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
        
        // Adjust if we're near the end
        if (endPage - startPage + 1 < maxPagesToShow) {
            startPage = Math.max(1, endPage - maxPagesToShow + 1);
        }
        
        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }
        
        return pages;
    };
    
    // Handle clicking on a page number
    const handlePageClick = (page) => {
        if (page === currentPage) return;
        onPageChange(page);
    };
    
    // Previous page button handler
    const handlePrevious = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };
    
    // Next page button handler
    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };
    
    // Generate the array of page numbers
    const pageNumbers = getPageNumbers();
    
    // Don't render pagination if there's only one page
    if (totalPages <= 1) return null;
    
    return (
        <div>
            <nav aria-label="Page navigation">
                <ul className="pagination">
                    {/* Previous button */}
                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                        <a 
                            className="page-link d-flex align-items-center h-100 fs-lg px-2" 
                            href="#" 
                            onClick={(e) => {
                                e.preventDefault();
                                handlePrevious();
                            }}
                            aria-label="Previous page"
                        >
                            <i className="ci-chevron-left" />
                        </a>
                    </li>
                    
                    {/* Show ellipsis if start page is not 1 */}
                    {pageNumbers[0] > 1 && (
                        <>
                            <li className="page-item">
                                <a 
                                    className="page-link" 
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handlePageClick(1);
                                    }}
                                >
                                    1
                                </a>
                            </li>
                            {pageNumbers[0] > 2 && (
                                <li className="page-item d-sm-none">
                                    <span className="page-link px-2 pe-none">...</span>
                                </li>
                            )}
                        </>
                    )}
                    
                    {/* Page numbers */}
                    {pageNumbers.map((page, index) => (
                        <li 
                            key={page}
                            className={`page-item ${currentPage === page ? 'active' : ''} ${
                                index > 0 && index < pageNumbers.length - 1 ? 'd-none d-sm-block' : ''
                            }`}
                            aria-current={currentPage === page ? 'page' : undefined}
                        >
                            {currentPage === page ? (
                                <span className="page-link">
                                    {page}
                                    <span className="visually-hidden">(current)</span>
                                </span>
                            ) : (
                                <a 
                                    className="page-link" 
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handlePageClick(page);
                                    }}
                                >
                                    {page}
                                </a>
                            )}
                        </li>
                    ))}
                    
                    {/* Show ellipsis if end page is not last page */}
                    {pageNumbers[pageNumbers.length - 1] < totalPages && (
                        <>
                            {pageNumbers[pageNumbers.length - 1] < totalPages - 1 && (
                                <li className="page-item d-sm-none">
                                    <span className="page-link px-2 pe-none">...</span>
                                </li>
                            )}
                            <li className="page-item">
                                <a 
                                    className="page-link" 
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handlePageClick(totalPages);
                                    }}
                                >
                                    {totalPages}
                                </a>
                            </li>
                        </>
                    )}
                    
                    {/* Next button */}
                    <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                        <a 
                            className="page-link d-flex align-items-center h-100 fs-lg px-2" 
                            href="#" 
                            onClick={(e) => {
                                e.preventDefault();
                                handleNext();
                            }}
                            aria-label="Next page"
                        >
                            <i className="ci-chevron-right" />
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;
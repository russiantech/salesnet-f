
import { Link } from "react-router-dom";

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
                        <Link 
                            className="page-link d-flex align-items-center h-100 fs-lg px-2" 
                            to="#" 
                            onClick={(e) => {
                                e.preventDefault();
                                handlePrevious();
                            }}
                            aria-label="Previous page"
                        >
                            <i className="ci-chevron-left" />
                        </Link>
                    </li>
                    
                    {/* Show ellipsis if start page is not 1 */}
                    {pageNumbers[0] > 1 && (
                        <>
                            <li className="page-item">
                                <Link 
                                    className="page-link rounded-pill" 
                                    to="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handlePageClick(1);
                                    }}
                                >
                                    1
                                </Link>
                            </li>
                            {pageNumbers[0] > 2 && (
                                <li className="page-item d-sm-none">
                                    <span className="page-link px-2 pe-none rounded-pill">...</span>
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
                                <span className="page-link rounded-pill">
                                    {page}
                                    <span className="visually-hidden">(current)</span>
                                </span>
                            ) : (
                                <Link 
                                    className="page-link rounded-pill" 
                                    to="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handlePageClick(page);
                                    }}
                                >
                                    {page}
                                </Link>
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
                                <Link 
                                    className="page-link rounded-pill" 
                                    to="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handlePageClick(totalPages);
                                    }}
                                >
                                    {totalPages}
                                </Link>
                            </li>
                        </>
                    )}
                    
                    {/* Next button */}
                    <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                        <Link 
                            className="page-link d-flex align-items-center h-100 fs-lg px-2" 
                            to="#" 
                            onClick={(e) => {
                                e.preventDefault();
                                handleNext();
                            }}
                            aria-label="Next page"
                        >
                            <i className="ci-chevron-right" />
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;
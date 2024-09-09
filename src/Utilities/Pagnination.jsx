import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import ScrollTop from './ScorllTop';

const Pagination = ({onPress,PageCount}) => {
    const [showBackButton, setShowBackButton] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const maxPageCount = PageCount; 
    const navigate = useNavigate();

    const handlePageClick = ({ selected }) => {
        const newPage = selected + 1;
        setCurrentPage(selected);
        setShowBackButton(selected > 0); 

        const queryParams = new URLSearchParams(location.search);
        queryParams.set('page', newPage);
        navigate(`${location.pathname}?${queryParams.toString()}`);
        onPress(newPage);
    };

    const handleMoreClick = () => {
        setShowBackButton(true); 
    };

    return (
        <>
        <ScrollTop/>
        <ReactPaginate
            breakLabel="..."
            nextLabel={ <div onClick={handleMoreClick} className="pagination-label">
                {currentPage === maxPageCount - 1 ? "Back" : "More"} <FaArrowRightLong className='ms-5 '/>
            </div>}
            previousLabel={<div className="pagination-label">
                {showBackButton ? <FaArrowLeftLong style={{marginTop:"3px"}} className='me-4 ' /> : null}
                </div>}
            onPageChange={handlePageClick}
            marginPagesDisplayed={0}
            pageRangeDisplayed={0}
            pageCount={maxPageCount}
            containerClassName={'pagination justify-content-center mt-1 p-1'} 
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            nextClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextLinkClassName={"page-link"}
            breakLinkClassName={"page-link"}
            breakClassName={"page-item"}
            activeClassName={"active"}
        />
        </>
    );
};

export default Pagination;

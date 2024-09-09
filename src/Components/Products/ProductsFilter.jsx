import React from 'react';
import { Button, Offcanvas, Accordion } from 'react-bootstrap';
import { HiOutlineAdjustmentsVertical } from 'react-icons/hi2';
import ProductsFilterHook from '../../CustomHooks/Products/ProductsFilter-Hook';

const ProductsFilter = () => {
    const {
        CategoryResponse,
        SubCategoryResponse,
        show,
        activeAccordionKeys,
        checkedSubCategories,
        freeShipping,
        handleClose,
        handleShow,
        handleAccordionToggle,
        handleSubCategoryChange,
        priceFrom,
        priceTo,
        error,
        toggleFreeShipping,
        from,
        to,
        clearFilters, 

    } = ProductsFilterHook();


    const renderSubCategories = (categoryId) => (
        <div>
            {SubCategoryResponse?.data?.filter(subCategory => subCategory.category === categoryId).map(subCategory => (
                <div key={subCategory.id} className="d-flex align-items-center mt-1 subcategory-item">
                    <input
                        type="checkbox"
                        checked={checkedSubCategories[categoryId]?.includes(subCategory.name)}
                        onChange={() => handleSubCategoryChange(categoryId, subCategory.name)}
                    />
                    <div className="filter-sub ms-2">{subCategory.name}</div>
                </div>
            ))}
        </div>
    );

    return (
        <div className="position-relative">
            <Button
                variant="primary"
                onClick={handleShow}
                className="d-flex align-items-center filter-title"
                style={{ gap: '0.5rem' }}
            >
                <h5 className='me-lg-4 mb-0'>Filters</h5>
                <HiOutlineAdjustmentsVertical />
            </Button>

            <Offcanvas show={show} onHide={handleClose} placement="start">
                <Offcanvas.Header closeButton className='pb-0'>
                    <Offcanvas.Title className="mb-0 ms-4 fs-5 " style={{ textTransform: "uppercase", fontWeight: "bold", marginTop: "30px" }}>Filters</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="side-filter">
                        <hr />
                        <div className="products-filter">
                            <Accordion activeKey={activeAccordionKeys} onSelect={handleAccordionToggle}>
                                <Accordion.Item eventKey="categories">
                                    <Accordion.Header>
                                        <h6 style={{ fontWeight: "normal" }} className='main-title'>Categories</h6>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <Accordion>
                                            {CategoryResponse?.data?.map(category => (
                                                <Accordion.Item eventKey={category.id} key={category.id}>
                                                    <Accordion.Header>
                                                        {/* <input
                                                            type="checkbox"
                                                            checked={checkedCategories.includes(category.id)}
                                                            onChange={() => handleCategoryChange(category.id)}
                                                            className="me-2"
                                                        /> */}
                                                        {category.name}
                                                    </Accordion.Header>
                                                    <Accordion.Body className='p-2'>
                                                        {renderSubCategories(category.id)}
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            ))}
                                        </Accordion>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>

                        <hr />
                        <Accordion activeKey={activeAccordionKeys} onSelect={handleAccordionToggle}>
                            <Accordion.Item eventKey="price">
                                <Accordion.Header>
                                    <h6 style={{ fontWeight: "normal" }} className='main-title'>Price Range</h6>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <div className="price-range-filter mt-3">
                                        <div className="d-flex justify-content-between mt-3">
                                            <div className="filter-sub d-flex flex-wrap ms-2 price-range" style={{ display: 'flex', alignItems: 'center' }}>
                                                <input type="text" placeholder="From" className='price-input' value={from} onChange={priceFrom} />
                                                <span style={{ margin: '0 5px' }}> - </span>
                                                <input type="text" placeholder="To" className='price-input' value={to} onChange={priceTo} />
                                            </div>
                                        </div>
                                        {error && <div className='error-message'>{error}</div>}
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <hr />
                        <Accordion activeKey={activeAccordionKeys} onSelect={handleAccordionToggle}>
                            <Accordion.Item eventKey="shipping">
                                <Accordion.Header>
                                    <h6 style={{ fontWeight: "normal" }} className='main-title'>Free Shipping</h6>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <div className="d-flex align-items-center mt-1">
                                        <input
                                            type="checkbox"
                                            checked={freeShipping}
                                            onChange={toggleFreeShipping}
                                        />
                                        <div className="filter-sub ms-2">Free Shipping</div>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <hr />
                        {/* Clear Filters Button */}
                        <Button
                            onClick={clearFilters}
                            className="mt-4 w-50 btn-save text-center 
                            d-flex justify-content-center align-items-center mx-auto">
                            Reset Filters
                        </Button>

                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
};

export default ProductsFilter;

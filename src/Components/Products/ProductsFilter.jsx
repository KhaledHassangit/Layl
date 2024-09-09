    // import React from 'react';
    // import { Button, Offcanvas, Accordion } from 'react-bootstrap';
    // import { HiOutlineAdjustmentsVertical } from 'react-icons/hi2';
    // import ProductsFilterHook from '../../CustomHooks/Products/ProductsFilter-Hook';

    // const ProductsFilter = () => {
    //     const {
    //         CategoryResponse,
    //         SubCategoryResponse,
    //         show,
    //         activeAccordionKeys,
    //         checkedSubCategories,
    //         freeShipping,
    //         handleClose,
    //         handleShow,
    //         handleAccordionToggle,
    //         handleSubCategoryChange,
    //         priceFrom,
    //         priceTo,
    //         error,
    //         toggleFreeShipping,
    //         from,
    //         to,
    //         clearFilters, 

    //     } = ProductsFilterHook();


    //     const renderSubCategories = (categoryId) => (
    //         <div>
    //             {SubCategoryResponse?.data?.filter(subCategory => subCategory.category === categoryId).map(subCategory => (
    //                 <div key={subCategory.id} className="d-flex align-items-center mt-1 subcategory-item">
    //                     <input
    //                         type="checkbox"
    //                         checked={checkedSubCategories[categoryId]?.includes(subCategory.name)}
    //                         onChange={() => handleSubCategoryChange(categoryId, subCategory.name)}
    //                     />
    //                     <div className="filter-sub ms-2">{subCategory.name}</div>
    //                 </div>
    //             ))}
    //         </div>
    //     );

    //     return (
    //         <div className="position-relative">
    //             <Button
    //                 variant="primary"
    //                 onClick={handleShow}
    //                 className="d-flex align-items-center filter-title"
    //                 style={{ gap: '0.5rem' }}
    //             >
    //                 <h5 className='me-lg-4 mb-0'>Filters</h5>
    //                 <HiOutlineAdjustmentsVertical />
    //             </Button>

    //             <Offcanvas show={show} onHide={handleClose} placement="start">
    //                 <Offcanvas.Header closeButton className='pb-0'>
    //                     <Offcanvas.Title className="mb-0 ms-4 fs-5 " style={{ textTransform: "uppercase", fontWeight: "bold", marginTop: "30px" }}>Filters</Offcanvas.Title>
    //                 </Offcanvas.Header>
    //                 <Offcanvas.Body>
    //                     <div className="side-filter">
    //                         <hr />
    //                         <div className="products-filter">
    //                             <Accordion activeKey={activeAccordionKeys} onSelect={handleAccordionToggle}>
    //                                 <Accordion.Item eventKey="categories">
    //                                     <Accordion.Header>
    //                                         <h6 style={{ fontWeight: "normal" }} className='main-title'>Categories</h6>
    //                                     </Accordion.Header>
    //                                     <Accordion.Body>
    //                                         <Accordion>
    //                                             {CategoryResponse?.data?.map(category => (
    //                                                 <Accordion.Item eventKey={category.id} key={category.id}>
    //                                                     <Accordion.Header>
    //                                                         {/* <input
    //                                                             type="checkbox"
    //                                                             checked={checkedCategories.includes(category.id)}
    //                                                             onChange={() => handleCategoryChange(category.id)}
    //                                                             className="me-2"
    //                                                         /> */}
    //                                                         {category.name}
    //                                                     </Accordion.Header>
    //                                                     <Accordion.Body className='p-2'>
    //                                                         {renderSubCategories(category.id)}
    //                                                     </Accordion.Body>
    //                                                 </Accordion.Item>
    //                                             ))}
    //                                         </Accordion>
    //                                     </Accordion.Body>
    //                                 </Accordion.Item>
    //                             </Accordion>
    //                         </div>

    //                         <hr />
    //                         <Accordion activeKey={activeAccordionKeys} onSelect={handleAccordionToggle}>
    //                             <Accordion.Item eventKey="price">
    //                                 <Accordion.Header>
    //                                     <h6 style={{ fontWeight: "normal" }} className='main-title'>Price Range</h6>
    //                                 </Accordion.Header>
    //                                 <Accordion.Body>
    //                                     <div className="price-range-filter mt-3">
    //                                         <div className="d-flex justify-content-between mt-3">
    //                                             <div className="filter-sub d-flex flex-wrap ms-2 price-range" style={{ display: 'flex', alignItems: 'center' }}>
    //                                                 <input type="text" placeholder="From" className='price-input' value={from} onChange={priceFrom} />
    //                                                 <span style={{ margin: '0 5px' }}> - </span>
    //                                                 <input type="text" placeholder="To" className='price-input' value={to} onChange={priceTo} />
    //                                             </div>
    //                                         </div>
    //                                         {error && <div className='error-message'>{error}</div>}
    //                                     </div>
    //                                 </Accordion.Body>
    //                             </Accordion.Item>
    //                         </Accordion>

    //                         <hr />
    //                         <Accordion activeKey={activeAccordionKeys} onSelect={handleAccordionToggle}>
    //                             <Accordion.Item eventKey="shipping">
    //                                 <Accordion.Header>
    //                                     <h6 style={{ fontWeight: "normal" }} className='main-title'>Free Shipping</h6>
    //                                 </Accordion.Header>
    //                                 <Accordion.Body>
    //                                     <div className="d-flex align-items-center mt-1">
    //                                         <input
    //                                             type="checkbox"
    //                                             checked={freeShipping}
    //                                             onChange={toggleFreeShipping}
    //                                         />
    //                                         <div className="filter-sub ms-2">Free Shipping</div>
    //                                     </div>
    //                                 </Accordion.Body>
    //                             </Accordion.Item>
    //                         </Accordion>
    //                         <hr />
    //                         {/* Clear Filters Button */}
    //                         <Button
    //                             onClick={clearFilters}
    //                             className="mt-4 w-50 btn-save text-center 
    //                             d-flex justify-content-center align-items-center mx-auto">
    //                             Reset Filters
    //                         </Button>

    //                     </div>
    //                 </Offcanvas.Body>
    //             </Offcanvas>
    //         </div>
    //     );
    // };

    // export default ProductsFilter;
    import React, { useState } from 'react';
    import { Button, Offcanvas, Accordion } from 'react-bootstrap';
    import { HiOutlineAdjustmentsVertical } from 'react-icons/hi2';

    // Simulated Data for Categories and Subcategories
    const fakeCategoryData = {
    data: [
        {
        id: 1,
        name: "Backpacks",
        subcategories: [
            { id: 1, name: "School Backpacks", category: 1 },
            { id: 2, name: "Hiking Backpacks", category: 1 }
        ]
        },
        {
        id: 2,
        name: "Travel Bags",
        subcategories: [
            { id: 3, name: "Carry-on Luggage", category: 2 },
            { id: 4, name: "Duffel Bags", category: 2 }
        ]
        },
        {
        id: 3,
        name: "Women Bags",
        subcategories: [
            { id: 5, name: "Handbags", category: 3 },
            { id: 6, name: "Clutches", category: 3 }
        ]
        }
    ]
    };

    // Custom Hook to Handle Filtering Logic
    const ProductsFilterHook = () => {
    const [show, setShow] = useState(false);
    const [activeAccordionKeys, setActiveAccordionKeys] = useState([]);
    const [checkedSubCategories, setCheckedSubCategories] = useState({});
    const [freeShipping, setFreeShipping] = useState(false);
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [error, setError] = useState('');

    // Simulating the API response
    const CategoryResponse = fakeCategoryData;
    const SubCategoryResponse = fakeCategoryData;

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const handleAccordionToggle = (eventKey) => {
        setActiveAccordionKeys((prevKeys) =>
        prevKeys.includes(eventKey)
            ? prevKeys.filter((key) => key !== eventKey)
            : [...prevKeys, eventKey]
        );
    };

    const handleSubCategoryChange = (categoryId, subCategoryName) => {
        setCheckedSubCategories((prevState) => {
        const updatedCategory = prevState[categoryId] || [];
        const isAlreadyChecked = updatedCategory.includes(subCategoryName);
        return {
            ...prevState,
            [categoryId]: isAlreadyChecked
            ? updatedCategory.filter((name) => name !== subCategoryName)
            : [...updatedCategory, subCategoryName]
        };
        });
    };

    const toggleFreeShipping = () => setFreeShipping(!freeShipping);

    const priceFrom = (e) => setFrom(e.target.value);
    const priceTo = (e) => setTo(e.target.value);

    const clearFilters = () => {
        setCheckedSubCategories({});
        setFreeShipping(false);
        setFrom('');
        setTo('');
        setError('');
    };

    return {
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
        clearFilters
    };
    };

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
        clearFilters
    } = ProductsFilterHook();

    const renderSubCategories = (categoryId) => (
        <div>
        {SubCategoryResponse?.data
            ?.find((category) => category.id === categoryId)
            ?.subcategories.map((subCategory) => (
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
                            <Accordion.Header>{category.name}</Accordion.Header>
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

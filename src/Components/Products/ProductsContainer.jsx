    import React, { useState } from 'react';
    import ProductCard from './ProductCard';
    import { Container,Row ,Col, Button, Offcanvas } from 'react-bootstrap';
    import { HiOutlineAdjustmentsVertical } from 'react-icons/hi2';
    import Accordion from 'react-bootstrap/Accordion';

    const ProductsContainer = () => {
            const products = [
            { id: 1 },
            { id: 2},
            { id: 3 },
            { id: 4},
            { id: 5},
            { id: 6},
            { id: 7},
            { id: 8},
        ];
        const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
    
        const [showFilters, setShowFilters] = useState(false);
        const toggleFilters = () => {
            console.log("Toggle filters clicked");
            setShowFilters(!showFilters);
        };
        

        return (
            <section style={{ minHeight: "700px", height: "100%" }}>
        <Container>
            <Col md="12">
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
                <Offcanvas.Header closeButton>
                <Offcanvas.Title className="mb-0 mt-4 ms-2 fs-5 " style={{textTransform:"uppercase",fontWeight:"bold"}}>Filters</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="side-filter">
                    <hr />
                    <div className="products-filter">
                        <div className="d-flex mt-3">
                        <Accordion defaultActiveKey={null}>
                            <div className='main-title ms-4 mb-3'>
                            <h6 style={{ fontWeight: "normal" }}>Categories</h6>
                            </div>
                            <Accordion.Item>
                            <Accordion.Header>BackBags</Accordion.Header>
                            <Accordion.Body className='p-4'>
                                {[1, 2, 3, 4].map((item) => (
                                <div key={item} className="d-flex mt-3 title">
                                    <input type="checkbox" value="0" />
                                    <div className="filter-sub ms-2 ">#{item}</div>
                                </div>
                                ))}
                            </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        </div>
                    </div>

                    <div className="products-filter">
                        <div className="d-flex mt-3">
                        <Accordion defaultActiveKey={null}>
                            <Accordion.Item>
                            <Accordion.Header>Laptop’s Bags</Accordion.Header>
                            <Accordion.Body className='p-4'>
                                {[1, 2, 3, 4].map((item) => (
                                <div key={item} className="d-flex mt-3 title">
                                    <input type="checkbox" value="0" />
                                    <div className="filter-sub ms-2 ">#{item}</div>
                                </div>
                                ))}
                            </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        </div>
                    </div>

                    <div className="products-filter">
                        <div className="d-flex mt-3">
                        <Accordion defaultActiveKey={null}>
                            <Accordion.Item>
                            <Accordion.Header>School Bags</Accordion.Header>
                            <Accordion.Body className='p-4'>
                                {[1, 2, 3, 4].map((item) => (
                                <div key={item} className="d-flex mt-3 title">
                                    <input type="checkbox" value="0" />
                                    <div className="filter-sub ms-2 ">#{item}</div>
                                </div>
                                ))}
                            </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        </div>
                    </div>

                    <hr />

                    <div className="price-range-filter mt-3">
                        <div className='main-title mb-3'>
                        <h6 style={{ fontWeight: "normal", marginLeft: "3px" }}>Price Range</h6>
                        </div>
                        <div className="d-flex justify-content-between mt-3">
                        <div className="filter-sub d-flex flex-wrap ms-2 price-range" style={{ display: 'flex', alignItems: 'center' }}>
                            <input type="text" placeholder="From" className='price-input' />
                            <span style={{ margin: '0 5px' }}>-</span>
                            <input type="text" placeholder="To" className='price-input' />
                        </div>
                        </div>
                    </div>

                    </div>
                </Offcanvas.Body>
                </Offcanvas>
            </div>

            <div className='cards-Products cards'>
                {products.map(product => (
                <ProductCard key={product.id} {...product} />
                ))}
            </div>
            </Col>
        </Container>
        </section>

        );
    };

    export default ProductsContainer;

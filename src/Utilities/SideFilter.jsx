import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { HiOutlineAdjustmentsVertical } from "react-icons/hi2";
import Accordion from 'react-bootstrap/Accordion';

const SideFilter = () => {

    
    return (
        <section className='d-flex flex-column mt-1  filter '>
            <Row >
                <div className="side-filter">
                <div className="filter-title ">
                    <h3>Filters</h3>
                    <HiOutlineAdjustmentsVertical />
                </div>
                <hr/>
                <div className="products-filter   ">
                    <div className="d-flex mt-3 ">
                        <Accordion  defaultActiveKey={null} >
                        <div className='main-title ms-4 mb-3'>
                        <h6 style={{fontWeight:"normal"}}>Categories</h6>
                        </div>
                        <Accordion.Item  >
                            <Accordion.Header>BackBags</Accordion.Header>
                            <Accordion.Body className='p-4'>
                            <div className="d-flex mt-3 title">
                            <input  type="checkbox" value="0" />
                            <div className="filter-sub ms-2 ">#1</div>
                            </div>
                            <div className="d-flex mt-3 title">
                            <input  type="checkbox" value="0" />
                            <div className="filter-sub ms-2 ">#2</div>
                            </div>
                            <div className="d-flex mt-3 title">
                            <input  type="checkbox" value="0" />
                            <div className="filter-sub ms-2 ">#3</div>
                            </div>
                            <div className="d-flex mt-3 title">
                            <input  type="checkbox" value="0" />
                            <div className="filter-sub ms-2 ">#4</div>
                            </div>
                            </Accordion.Body> 
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>

                <div className="products-filter  ">
                    <div className="d-flex mt-3">
                        <Accordion  defaultActiveKey={null} >
                        <Accordion.Item >
                            <Accordion.Header>Laptop’s Bags</Accordion.Header>
                            <Accordion.Body className='p-4'>
                            <div className="d-flex mt-3 title">
                            <input  type="checkbox" value="0" />
                            <div className="filter-sub ms-2 ">#1</div>
                            </div>
                            <div className="d-flex mt-3 title">
                            <input  type="checkbox" value="0" />
                            <div className="filter-sub ms-2 ">#2</div>
                            </div>
                            <div className="d-flex mt-3 title">
                            <input  type="checkbox" value="0" />
                            <div className="filter-sub ms-2 ">#3</div>
                            </div>
                            <div className="d-flex mt-3 title">
                            <input  type="checkbox" value="0" />
                            <div className="filter-sub ms-2 ">#4</div>
                            </div>
                            </Accordion.Body> 
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
                
                <div className="products-filter  ">
                    <div className="d-flex mt-3">
                        <Accordion  defaultActiveKey={null}>
                        <Accordion.Item >
                            <Accordion.Header>School Bags</Accordion.Header>
                            <Accordion.Body className='p-4'>
                            <div className="d-flex mt-3 title">
                            <input  type="checkbox" value="0" />
                            <div className="filter-sub ms-2 ">#1</div>
                            </div>
                            <div className="d-flex mt-3 title">
                            <input  type="checkbox" value="0" />
                            <div className="filter-sub ms-2 ">#2</div>
                            </div>
                            <div className="d-flex mt-3 title">
                            <input  type="checkbox" value="0" />
                            <div className="filter-sub ms-2 ">#3</div>
                            </div>
                            <div className="d-flex mt-3 title">
                            <input  type="checkbox" value="0" />
                            <div className="filter-sub ms-2 ">#4</div>
                            </div>
                            </Accordion.Body> 
                            </Accordion.Item>
                        </Accordion>
                    </div>

                </div>

                <hr/>
                </div>

                <div className="price-range-filter mt-3">
                <div className='main-title mb-3'>
                    <h6 style={{ fontWeight: "normal", marginLeft: "3px" }}>Price Range</h6>
                </div>
                <div className="d-flex justify-content-between  mt-3">
                    <input type="checkbox" className='mt-1' />
                    <div className="filter-sub d-flex flex-wrap ms-2 price-range" style={{ display: 'flex', alignItems: 'center' }}>
                        <input type="text" placeholder="From" className='price-input' /> 
                        <span style={{ margin: '0 5px' }}>-</span> 
                        <input type="text" placeholder="To" className='price-input' />
                    </div>
                </div>
            </div>


                <div className='submit-button '>
                    <button>Apply</button>
                </div>
            </Row>
        </section>

    );
};

export default SideFilter;

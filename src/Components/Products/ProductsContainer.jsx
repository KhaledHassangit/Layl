import React from 'react';
import ProductCard from './ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import ProductsFilter from './ProductsFilter';
import Spinner from '../../Utilities/Spinner';
import { Fade } from "react-awesome-reveal";

const ProductsContainer = ({allProducts,loading}) => {
    return (
        <section style={{ minHeight: "700px", height: "100%" }}>
            <Container>
                <Col md="12">
                    <Row>
                        <ProductsFilter />
                    </Row>
                    <Row>
                        <div className='cards-Products cards'>
                            {loading ? (
                                <Spinner />
                            ) : allProducts && allProducts.count > 0 ? (
                                allProducts.results.map((item, index) => (
                                    <Fade className='p-3' triggerOnce={true} cascade={false} delay={index * 100}>
                                        <ProductCard key={index} item={item} />
                                    </Fade>
                                ))
                            ) : (
                                <div className="text-center" style={{ color: '#FFFFFF' }}>
                                    No Products Found
                                </div>
                            )}
                        </div>


                    </Row>
                </Col>
            </Container>
        </section>
    );
};

export default ProductsContainer;

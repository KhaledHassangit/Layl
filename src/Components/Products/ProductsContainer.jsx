// import React from 'react';
// import ProductCard from './ProductCard';
// import { Container, Row, Col } from 'react-bootstrap';
// import ProductsFilter from './ProductsFilter';
// import Spinner from '../../Utilities/Spinner';
// import { Fade } from "react-awesome-reveal";

// const ProductsContainer = ({allProducts,loading}) => {
//     return (
//         <section style={{ minHeight: "700px", height: "100%" }}>
//             <Container>
//                 <Col md="12">
//                     <Row>
//                         <ProductsFilter />
//                     </Row>
//                     <Row>
//                         <div className='cards-Products cards'>
//                             {loading ? (
//                                 <Spinner />
//                             ) : allProducts && allProducts.count > 0 ? (
//                                 allProducts.results.map((item, index) => (
//                                     <Fade className='p-3' triggerOnce={true} cascade={false} delay={index * 100}>
//                                         <ProductCard key={index} item={item} />
//                                     </Fade>
//                                 ))
//                             ) : (
//                                 <div className="text-center" style={{ color: '#FFFFFF' }}>
//                                     No Products Found
//                                 </div>
//                             )}
//                         </div>


//                     </Row>
//                 </Col>
//             </Container>
//         </section>
//     );
// };

// export default ProductsContainer;
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { Container,Row ,Col, Button, Offcanvas } from 'react-bootstrap';
import { HiOutlineAdjustmentsVertical } from 'react-icons/hi2';
import Accordion from 'react-bootstrap/Accordion';
import ProductsFilter from './ProductsFilter';

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
        <ProductsFilter/>

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

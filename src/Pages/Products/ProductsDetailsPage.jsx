import React from 'react'
import { Container, Row ,Col } from 'react-bootstrap'
import ProductDescription from '../../Components/Products/ProductDescription'
import ProductDetails from '../../Components/Products/ProductDetails'
import ProductGallery from '../../Components/Products/ProductGalley'

const ProductsDetailsPage = () => {
    return (
        <div className='product-deatils font'  style={{minHeight:"670px"}}>
            <Container>
                <Row className='d-flex justify-content-between '>
                    <Col md="6">
                        <ProductGallery/>
                    </Col>
                    <Col md="6">
                        <ProductDetails/> 
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                        <ProductDescription/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ProductsDetailsPage

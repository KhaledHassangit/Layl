import React from 'react'
import { Container, Row ,Col } from 'react-bootstrap'
import ProductDescription from '../../Components/Products/ProductDescription'
import ProductDetails from '../../Components/Products/ProductDetails'
import ProductGallery from '../../Components/Products/ProductGalley'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router'
import SmiliarProducts from '../../Components/Products/SmiliarProducts'

const ProductsDetailsPage = () => {
    const {id} = useParams()
    return (
        <div className='product-deatils font'  style={{minHeight:"670px"}}>
            <Helmet>
            <title> Layl | Products </title>
            <meta name="description" content="Single Product Page" />
            <link rel="icon" href="/Logo.webp" />
        </Helmet>
            <Container>
                <Row className='d-flex justify-content-between '>
                    <Col md="6">
                        <ProductGallery id={id}/>
                    </Col>
                    <Col md="6">
                        <ProductDetails id={id}/> 
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                        <ProductDescription/>
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                        <SmiliarProducts />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ProductsDetailsPage

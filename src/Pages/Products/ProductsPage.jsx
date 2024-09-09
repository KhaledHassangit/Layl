// import React from 'react'
// import { Col, Container, Row } from 'react-bootstrap'
// import ProductsContainer from '../../Components/Products/ProductsContainer'
// import { Helmet } from 'react-helmet-async'
// import Pagnination from '../../Utilities/Pagnination'
// import GetAllProductsHook from '../../CustomHooks/Products/GetAllProducts-Hook'

// const ProductsPage = () => {
//     const  [getProducts,allProducts,PageCount,loading,getPage] = GetAllProductsHook();

//     return (
//         <div className='products-page' >
//             <Helmet>
//             <title> Layl | Products </title>
//             <meta name="description" content="Products Page" />
//         </Helmet>

//             <Container  >
//             <Row>
//                 <Row>
//                     <Col md="12">
//                     <div className="main-heading">
//                         <h2>Products</h2>
//                     </div>
//                     </Col>
//                 </Row>
//                 <Row className='py-3'>
//                     <Col md="12"  >
//                         <ProductsContainer allProducts={allProducts} loading={loading}/>
//                     </Col>
//                 </Row>

//                 <Row className='py-3'>
//                     <Col md="12"  >
//                     {PageCount > 1 ? <Pagnination onPress={getPage} PageCount={PageCount} /> : null}
//                     </Col>
//                 </Row>
//             </Row>
//             </Container>
//         </div>
//     )
// }

// export default ProductsPage
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ProductsContainer from '../../Components/Products/ProductsContainer'
import { Helmet } from 'react-helmet-async'

const ProductsPage = () => {
    return (
        <div className='products-page' >
            <Helmet>
            <title> Layl Products </title>
            <meta name="description" content="Products Page" />
        </Helmet>

            <Container  >
            <Row>
                <Row>
                    <Col md="12">
                    <div className="main-heading">
                        <h2>Products</h2>
                    </div>
                    </Col>
                </Row>
                <Row className='py-3'>
                    <Col md="12"  >
                        <ProductsContainer />
                    </Col>
                    
                </Row>
            </Row>
            </Container>
        </div>
    )
}

export default ProductsPage

import React from 'react'
import { Col, Container , Row} from 'react-bootstrap'

const Landing = () => {
    return (
        <section className='landing-page'style={{minHeight:"600px"}}>
            <Container className='text-center'> 
                <Row>
                    <Col md="12">
                    <div className='content'>
                        <h1>
                        From outside the plant we bring bags, with primer quality  
                        </h1>
                        <p>
                        From  outside the plant we bring bags From  outside the plant
                        </p>
                        <button className='shop-button'>Shop Now</button>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Landing

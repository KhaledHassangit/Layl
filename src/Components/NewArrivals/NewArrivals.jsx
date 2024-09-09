import React from 'react'
import { Col, Container , Row} from 'react-bootstrap'
import handbagweb from "../../Images/handbagimg2.webp"
import { Link } from 'react-router-dom'
import { Fade } from "react-awesome-reveal";

const NewArrivals = () => {
    return (
        <section className='new-collection pb-4 font pt-3 '>
            <Container>
                <Fade direction='up' cascade damping={0.5}  triggerOnce={true}>
            <Row>
                <Col  lg="8" md="7" sm="12">
                <div >  
                    <picture className='img-box'>
                    <source srcSet={handbagweb} type="image/webp" />
                    <img src={handbagweb} alt="Handbag" loading='lazy' />
                    </picture>

                </div>

                </Col>
                <Col  lg="4" md="5" sm="12">
                <div className='info-text'>
                    <span>
                    The New Collections
                    </span>
                    <h2>
                    “Travel beyond <br/> with us now!"
                    </h2>
                    <p>
                        "Explore ultimate comfort with our new interstellar bags! Limited time offer
                        free shipping to Alexandria on your first order. 
                    </p>
                    <Link to="/products" style={{textDecoration:"none"}}>
                    <button>
                        SEE NEW COLLECTION
                    </button>
                    </Link>
                </div>


                </Col>
            </Row>
                </Fade>
            </Container>
        </section>
    )
}

export default NewArrivals

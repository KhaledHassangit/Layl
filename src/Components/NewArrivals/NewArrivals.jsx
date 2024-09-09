import React from 'react'
import { Col, Container , Row} from 'react-bootstrap'
import handbagjpg from "../../Images/handbagimg2.jpg"
import handbagweb from "../../Images/handbagimg2.webp"

const NewArrivals = () => {
    return (
        <section className='new-collection pb-5 font '>
            <Container>
            <Row>
                <Col  lg="8" md="7" sm="12">

                <div >
                    <picture className='img-box'>
                    <source srcSet={handbagweb} type="image/webp" />
                    <source srcSet={handbagjpg} type="image/jpeg" />
                    <img src={handbagjpg} alt="Handbag" />
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
                    <button>
                        SEE NEW COLLECTION
                    </button>
                </div>


                </Col>
            </Row>
            </Container>
        </section>
    )
}

export default NewArrivals

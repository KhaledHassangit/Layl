// import React from "react";
// import { Button, Col, Container, Form, Row } from "react-bootstrap";
// import Orange from "../../Images/orange.png"
// import Vodafone from "../../Images/vodafone.png"
// import Etisalat from "../../Images/eisalat.png"
    
//     const PaymentMethods = () => {
//     return (
//         <section className="payment" style={{ minHeight: "800px" }}>
//         <Container>
//             <Row>
//             <div className="title text-center ">
//                 <h2 className="fw-bold">Payment Methods</h2>
//             </div>
//             <div className="methods d-flex align-items-center justify-content-center">
//                 <Row>
//                 <Col
//                     md="12"
//                     className="d-flex justify-content-center align-center mt-4">
//                     <Form>
//                     <div className="input-with-checkbox">
//                         <input
//                         type="email"
//                         className="form-control with-checkbox"
//                         placeholder="011 000 00 0 00"
//                         />
//                         <input
//                         type="checkbox"
//                         className="check-input"
//                         defaultChecked
//                         />
//                         <img
//                         src={Etisalat}
//                         alt=""
//                         className="input-img"
//                         />
//                     </div>

//                     <div className="input-with-checkbox">
//                         <input
//                         type="password"
//                         className="form-control with-checkbox"
//                         placeholder="012 000 00 0 00"
//                         />
//                         <input
//                         type="checkbox"
//                         className="check-input"
//                         defaultChecked
//                         />
//                         <img
//                         src={Orange}
//                         alt=""
//                         className="input-img"
//                         />
//                     </div>

//                     <div className="input-with-checkbox">
//                         <input
//                         type="password"
//                         className="form-control with-checkbox"
//                         placeholder="010 000 00 0 00"
//                         />
//                         <input
//                         type="checkbox"
//                         className="check-input"
//                         defaultChecked
//                         />
//                         <img
//                         src={Vodafone}
//                         alt=""
//                         className="input-img"
//                         />
//                     </div>

//                     <div className="text-center mt-3 mb-3 d-flex flex-column">
//                         <span className="mt-3 or">- OR -</span>
//                     </div>

//                     <div className="input-with-checkbox">
//                         <input
//                         type="text"
//                         className="form-control with-checkbox cash"
//                         placeholder="Payment When Recieving"
//                         readOnly 
//                         />
//                         <input
//                         type="checkbox"
//                         className="check-input"
//                         defaultChecked
//                         />
//                     </div>

//                     <div className='checkout-button'>
//                         <Button className="pay">Check out</Button>
//                     </div>
//                     </Form>
//                 </Col>
//                 </Row>
//             </div>
//             </Row>
//         </Container>
//         </section>
//     );
//     };

//     export default PaymentMethods;
import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Orange from "../../Images/orange.png"
import Vodafone from "../../Images/vodafone.png"
import Etisalat from "../../Images/eisalat.png"
    
    const PaymentMethods = () => {
    return (
        <section className="payment" style={{ minHeight: "800px" }}>
        <Container>
            <Row>
            <div className="title text-center ">
                <h2 className="fw-bold">Payment Methods</h2>
            </div>
            <div className="methods d-flex align-items-center justify-content-center">
                <Row>
                <Col
                    md="12"
                    className="d-flex justify-content-center align-center mt-4">
                    <Form>
                    <div className="input-with-checkbox">
                        <input
                        type="email"
                        className="form-control with-checkbox"
                        placeholder="011 000 00 0 00"
                        />
                        <input
                        type="checkbox"
                        className="check-input"
                        defaultChecked
                        />
                        <img
                        src={Etisalat}
                        alt=""
                        className="input-img"
                        />
                    </div>

                    <div className="input-with-checkbox">
                        <input
                        type="password"
                        className="form-control with-checkbox"
                        placeholder="012 000 00 0 00"
                        />
                        <input
                        type="checkbox"
                        className="check-input"
                        defaultChecked
                        />
                        <img
                        src={Orange}
                        alt=""
                        className="input-img"
                        />
                    </div>

                    <div className="input-with-checkbox">
                        <input
                        type="password"
                        className="form-control with-checkbox"
                        placeholder="010 000 00 0 00"
                        />
                        <input
                        type="checkbox"
                        className="check-input"
                        defaultChecked
                        />
                        <img
                        src={Vodafone}
                        alt=""
                        className="input-img"
                        />
                    </div>

                    <div className="text-center mt-3 mb-3 d-flex flex-column">
                        <span className="mt-3 or">- OR -</span>
                    </div>

                    <div className="input-with-checkbox">
                        <input
                        type="text"
                        className="form-control with-checkbox cash"
                        placeholder="Payment When Recieving"
                        readOnly 
                        />
                        <input
                        type="checkbox"
                        className="check-input"
                        defaultChecked
                        />
                    </div>

                    <div className='checkout-button'>
                        <Button className="pay">Check out</Button>
                    </div>
                    </Form>
                </Col>
                </Row>
            </div>
            </Row>
        </Container>
        </section>
    );
    };

    export default PaymentMethods;

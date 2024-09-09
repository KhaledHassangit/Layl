import React from 'react'
import Logo from "../../Images/Logo.webp"
import { Col, Container, Row } from 'react-bootstrap'
import { Fade } from "react-awesome-reveal";

const AboutLayl = () => {


    return (
        <section className='about-layl mt-5' id="About-us">


            <Container className='text-center' >
                <Row>

                    <Col lg="3" sm="12" md="12">
                        <Fade direction='left' duration={1000} triggerOnce={true}>
                            <div className='logodiv'>
                                <img src={Logo} alt="Layl " loading='lazy'/>
                            </div>
                        </Fade>
                    </Col>
                    <Col lg="9" sm="12" md="12">
                        <Fade direction='right' duration={1250} triggerOnce={true}>

                            <div className='para'>
                                <p className='ar'>
                                    ،L Y E L أعزائنا العملاء الكرام في
                                    <br />
                                    نرحب بكم في موقعنا على الإنترنت! نحن نفتخر بتقديم مجموعة متنوعة من الحقائب الظهر، ونسعى دائمًا للتميز في كل منتج نقدمه. منذ البداية، كان اهتمامنا الأساسي هو الحفاظ على جودة موادنا، والتي تتطور باستمرار حيث نستخدم أفضل المواد المتوفرة في السوق لضمان المتانة والأداء والأناقة. مجموعتنا تلبي  <br />  .احتياجات الجميع
                                    <br />
                                    .نحن ندرك أن عملائنا يستحقون فقط الأفضل، ولهذا السبب نسعى جاهدين لتقديم منتجات استثنائية وخدمات  ومواد تصنيع
                                    <br />
                                    .نشكركم على اختيارنا كوجهة للحقائب عالية الجودة. نأمل أن نلبي دائمًا توقعاتكم
                                    <br />
                                    .نتطلع إلى خدمتكم ومساعدتكم في العثور على الحقيبة المثالية لكل مناسبة
                                </p>
                            </div>
                        </Fade>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default AboutLayl

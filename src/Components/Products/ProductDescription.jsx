import React from 'react'
import {Col, Row} from "react-bootstrap"
const ProductDescription = () => {
    return (
        <section className='mt-5'>
          <div className='describtion-text'>
            <Row>
              <div className='policy d-flex justify-content-between'>
                <Col md="8">
                  <div>
                  <h2>Receipt Policy:</h2>
                  <ul className='text-ul text-left align-items-start  en '>
                        <li>There is an inspection before receipt to ensure the quality and condition of the product.</li>
                        <li>Please ensure the product's safety before receipt.</li>
                        <li>If any damage is discovered after receipt, the shipping company is not responsible.</li>
                    </ul>
                    </div>
                  </Col>
                  <Col md="4">
                    <div className='align-items-end d-flex flex-column '>
                    <h2 style={{fontFamily:"Cairo",direction:"rtl"}}> سياسة الاستلام:</h2>
                  <ul className='text-ul ar  '>
                        <li>هناك فحص قبل الاستلام لضمان جودة وحالة المنتج .</li>
                        <li> يرجي التأكد من سلامة المنتج قبل الاستلام .</li>
                        <li>إذا تم اكتشاف أي ضرر بعد الاستلام، فإن شركة الشحن غير مسؤولة. </li>
                    </ul>
                    </div>
                  </Col>
                </div>
              </Row>
              <hr style={{color:"rgba(255, 255, 255, 0.16)"}}/>
            <Row>
              <div className='policy two  d-flex justify-content-between'>
                <Col md="7">
                  <div>
                  <h2>Receipt Policy:</h2>
                  <ul className='text-ul text-left align-items-start  en '>
                        <li>Shipments are not eligible for return or exchange except in the case of a manufacturing defect or error.</li>
                        <li>In the case of exchange, the product must be in the same condition as received.</li>
                        <li>All products have real-life photos, whether professional or taken with a mobile phone.</li>
                        <li>Shipping within 4 to 5 days maximum.</li>
                    </ul>
                    </div>
                  </Col>
                  <Col md="5">
                    <div className='align-items-end d-flex flex-column '>
                    <h2 style={{fontFamily:"Cairo",direction:"rtl"}} className='ar'>سياسة الاستبدال والإرجاع:</h2>
                  <ul className='text-ul ar  '>
                    <li>الشحنات غير قابلة للإرجاع أو الاستبدال إلا في حالة عيوب التصنيع أو الخطأ.</li>
                    <li>في حالة الاستبدال، يجب أن يكون المنتج في نفس حالة الاستلام.</li>
                    <li>جميع المنتجات تحتوي على صور حقيقية، سواء كانت احترافية أو تم التقاطها بواسطة الهاتف المحمول.</li>
                    <li>الشحن خلال 4 إلى 5 أيام كحد أقصى.</li>
                    </ul>
                    </div>
                  </Col>
                </div>
              </Row>
          </div>
        </section>
  )
}

export default React.memo(ProductDescription)

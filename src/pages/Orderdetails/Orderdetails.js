import React from 'react'
import './Orderdetails.css'
import {GiReturnArrow} from 'react-icons/gi'
import {FiClock} from 'react-icons/fi'
import {AiOutlineCalendar} from 'react-icons/ai'
import {BsCircleFill} from 'react-icons/bs'
import { Col, Container, Row} from 'react-bootstrap'
import Footer from '../../components/Footer/Footer'
import StarRating from '../../components/StarRating/StarRating'
import StepProgressbar from '../../components/StepProgressbar/StepProgressbar'

function Orderdetails() {
  return (
    <div>
<Container>

    <Row> 

        <Col md={1}> </Col>
        <Col md={4} id='orderdetails_returnmaindiv'> <div id='orderdetails_returnicon'><GiReturnArrow /></div>
         <div id='orderdetails_return'>Return</div>  </Col>
    </Row>

    <Row>

        <Col md={1}></Col>
        <Col md={5}>

           <Row > <div id='orderdetails_labname'> Newgen Patholab</div> </Row> 
           <Row id='orderdetails_timedate'> 
<Col md={4}> <FiClock/> 6.30pm</Col>
<Col md={4}> <AiOutlineCalendar/> 10-August 2022</Col>

           </Row>
           <Row id='orderdetails_type'>
            <Col md={3}> <BsCircleFill style={{color:'#394E76'}}/> Thyroid Test </Col>
            <Col md={3}> <BsCircleFill style={{color:'#394E76'}} /> Blood Test </Col>
            <Col md={3}> <BsCircleFill style={{color:'#394E76'}}/> Urine Test </Col>
           </Row>
           <Row> <StepProgressbar/> </Row>
           <Row> <button id='orderdetail_downloadbtn'> Download Reports</button> </Row>
          
        </Col>
        <Col md={5}>
<Row  id ='orderdetail_paymentdetail'> Payment Details</Row>
<Row id='orderdetail_testandprice'> 
<Col> Urine Test</Col>
<Col>₹500.00 </Col>
</Row>
<Row  id='orderdetail_testandprice'> 
<Col> Blood Test</Col>
<Col>₹500.00 </Col>
</Row>
<Row  id='orderdetail_testandprice'> 
<Col> Thyroid Test</Col>
<Col>₹500.00 </Col>
</Row>
<Row id='orderdetail_testandprice' > 
<Col> Total</Col>
<Col>₹1500.00 </Col>
</Row>
<Row  id='orderdetail_testandprice'> 
<Col> GST</Col>
<Col>₹100.00</Col>
</Row>
<hr style={{width:'65%'}}/>
<Row  id='orderdetail_testandprice2'> 
<Col> Grand Total</Col>
<Col>₹1600.00</Col>
</Row>

<Row id='starrating_maindiv'>  
  
  <Col md={3} xs={12}  id='rateus_text'> Rate us </Col>
  <Col md={8} xs={12} id='rateus_star'> <StarRating/> </Col>
  <Col md={2} style={{background:'none'}} ></Col>
    </Row>
        </Col>
        <Col md={1}></Col>
    </Row>
</Container>

    </div>
  )
}

export default Orderdetails
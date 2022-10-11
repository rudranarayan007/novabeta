import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Faqcomp from '../../components/Faqcomp/Faqcomp'
import './Faq.css'
function Faq() {
  return (
    <div>
        <Container>

            <Row id="faq_title"> 
           
            Frequently Asked Questions
            </Row>
 <Faqcomp
        title="What is Payment gateway ?
        "
        content="No, you dont need to pay instapay, where there is no transcation happening .
        With one of the lowestt transction happening . With one of the lowest transction 
        charges in the industry , pay only when you get paid ! "
      />
      <Faqcomp
        title="What platform does ACME payment gateway support ?"
        content="No, you dont need to pay instapay, where there is no transcation happening .
        With one of the lowestt transction happening . With one of the lowest transction 
        charges in the industry , pay only when you get paid ! "
      />
      <Faqcomp
        title="Doees ACME provide international payments support"
        content="No, you dont need to pay instapay, where there is no transcation happening .
        With one of the lowestt transction happening . With one of the lowest transction 
        charges in the industry , pay only when you get paid ! "
      />
      </Container>
    </div>
  )
}

export default Faq
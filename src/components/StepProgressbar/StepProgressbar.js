import React from 'react'
import { Container, Row } from 'react-bootstrap'
import './StepProgressbar.css'
function StepProgressbar() {
  return (
    <div>
<Container>
<Row className='step-wizard'>
<ul class="step-wizard-list">
            <li class="step-wizard-item">
                <span class="progress-count">1</span>
                <span class="progress-label">Billing Info</span>
            </li>
            <li class="step-wizard-item ">
                <span class="progress-count">2</span>
                <span class="progress-label">Payment Method</span>
            </li>
            <li class="step-wizard-item current-item">
                <span class="progress-count">3</span>
                <span class="progress-label">Checkout</span>
            </li>
           
        </ul>


</Row>
</Container>

    </div>
  )
}

export default StepProgressbar
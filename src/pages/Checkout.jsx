

import React, {useState} from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/cart/common-section/CommonSection'
import { useSelector } from 'react-redux'
import {Container, Row, Col} from 'reactstrap'
import '../styles/checkout.css'

const Checkout = () => {

  const [enterName, setEnterName] = useState('')
  const [enterEmail, setEnterEmail] = useState('')
  const [enterPhone, setEnterPhone] = useState('')
  const [enterCountry, setEnterCountry] = useState('')
  const [enterCity, setEnterCity] = useState('')
  const [enterCodePost, setEnterCodePost] = useState('')
  const shippingInfo = []

  const cartTotalAmount = useSelector(state => state.cart.totalAmount)
  const shippingCost = 30
  const totalAmount = cartTotalAmount + Number(shippingCost)

  const submitHandler = e => {
    e.preventDefault()
    const useShippingAddress = {
      name: enterName,
      email: enterEmail,
      phone : enterPhone,
      country: enterCountry,
      city: enterCity,
      codePost: enterCodePost
    }

    shippingInfo.push(useShippingAddress)
    console.log(shippingInfo)
  }
  return (
    <Helmet title='Checkout'>
      <CommonSection title='Checkout'/>
      <section>
        <Container>
          <Row>
            <Col lg='8' md='6'>
              <h6 className='mb-4'>Shipping Adrress</h6>
              <form className="checkout__form" onSubmit={submitHandler}>
                <div className="form__group">
                  <input type="text" placeholder='Enter Your name' required onChange={(e) => setEnterName(e.target.value)}/>
                </div>
                <div className="form__group">
                  <input type="email" placeholder='Enter your email' required onChange={(e) => setEnterEmail(e.target.value)}/>
                </div>
                <div className="form__group">
                  <input type="number" placeholder='Phone number' required onChange={(e) => setEnterPhone(e.target.value)}/>
                </div>
                <div className="form__group">
                  <input type="text" placeholder='Country' required onChange={(e) => setEnterCountry(e.target.value)}/>
                </div>
                <div className="form__group">
                  <input type="text" placeholder='City' required onChange={(e) => setEnterCity(e.target.value)}/>
                </div>
                <div className="form__group">
                  <input type="number" placeholder='Postal code' required onChange={(e) => setEnterCodePost(e.target.value)}/>
                </div>
                <button className="addToCart__btn">Payement</button>
              </form>
            </Col>
            <Col lg='4' md='6'>
              <div className='checkout__bill'>
                <h6 className='d-flex align-items-center justify-content-between mb-3'>Subtotal :<span>${cartTotalAmount}</span></h6>
                <h6 className='d-flex align-items-center justify-content-between mb-3'>Shipping :<span>${shippingCost}</span></h6>
                <div className='checkout__total'>
                  <h5 className='d-flex align-items-center justify-content-between'>Total :<span>${totalAmount}</span></h5>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Checkout
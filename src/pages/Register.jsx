
import React, {useRef} from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/cart/common-section/CommonSection'
import {Container, Row, Col} from 'reactstrap'
import { Link } from 'react-router-dom'
import '../styles/login.css'

const Register = () => {
  const signUpNameRef = useRef()
  const signUpEmailRef = useRef()
  const signUpPassWordRef = useRef()
  const submitHandler = e => {
    e.preventDefault()
  }
  return (
    <Helmet title='Signup'>
      <CommonSection title='Signup' />
      <section>
        <Container>
          <Row>
            <Col lg='6' md='6' sm='12' className='col__form m-auto text-center'>
              <form className="form mb-5" onSubmit={submitHandler}>
                <div className="form__group">
                  <input ref={signUpNameRef} type="text" placeholder='Full Name' required/>
                </div>
                <div className="form__group">
                  <input ref={signUpEmailRef} type="email" placeholder='Email' required/>
                </div>
                <div className="form__group">
                  <input ref={signUpPassWordRef} type="password" placeholder='Password' required/>
                </div>
                <button type='submit' className="addToCart__btn">Sign Up</button>
              </form>
              <Link to='/login'>Already have an account? Login</Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Register
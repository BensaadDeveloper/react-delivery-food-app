

import React, {useRef} from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/cart/common-section/CommonSection'
import {Container, Row, Col} from 'reactstrap'
import { Link } from 'react-router-dom'
import '../styles/login.css'

const Login = () => {
  const loginNameRef = useRef()
  const loginPassWordRef = useRef()
  const submitHandler = e => {
    e.preventDefault()
  }
  return (
    <Helmet title='Login'>
      <CommonSection title='Login' />
      <section>
        <Container>
          <Row>
            <Col lg='6' md='6' sm='12' className='col__form m-auto text-center'>
              <form className="form mb-5" onSubmit={submitHandler}>
                <div className="form__group">
                  <input ref={loginNameRef} type="email" placeholder='Email' required/>
                </div>
                <div className="form__group">
                  <input ref={loginPassWordRef} type="password" placeholder='Password' required/>
                </div>
                <button type='submit' className="addToCart__btn">Login</button>
              </form>
              <Link to='/register'>Don't have an account? Create an acoount</Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Login
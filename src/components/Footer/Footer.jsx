import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import logo from '../../assets/images/res-logo.png'
import '../../styles/footer.css'
import {FaPaperPlane} from 'react-icons/fa'
import { RiFacebookFill, RiGithubLine, RiYoutubeLine, RiLinkedinFill} from 'react-icons/ri'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col xs='12' sm='6' md='4' lg='3' className='div___col div__log line__in-bottom' >
            <img src={logo} alt="logo restaurant" />
            <h5>Tasty Treat</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sed delectus vel.</p>
          </Col>
          <Col xs='12' sm='6' md='4' lg='3' className='div___col line__in-bottom div__delivery' >
            <h5 className='footer__title'>Delivery Time</h5>
            <ListGroup className='delivery__time-list'>
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span className='days'>Sunday - Thursday</span>
                <p className='delivery__time-item-time'>10:00am - 11:00pm</p>
              </ListGroupItem>
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span className='days'>Friday - Saturday</span>
                <p className='delivery__time-item-time'>Off Day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col xs='12' sm='6' md='4' lg='3' className='div___col line__in-bottom div__contact' >
            <h5 className='footer__title'>Contact</h5>
            <ListGroup className='delivery__time-list'>
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <p className='delivery__time-item-locat'>Location : 2500, Rue Emir Abdelkader, Constantine, Algeria</p>
              </ListGroupItem>
              <ListGroupItem className='delivery__time-item phone__mail border-0 ps-0'>
                <span className='sp__phone-email'>Phone : <span>0552 462 516</span></span>
              </ListGroupItem>
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span className='sp__phone-email'>Email : <span>myGmail@gmail.com</span></span>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col xs='12' sm='6' md='12' lg='3' className='div___col div__subsc' >
            <h5 className='footer__title'>Newsletter</h5>
            <p className='footer__subscribe'>Subscribe our newsletter</p>
            <div className="newsletter">
              <input type="email" id="" name="" placeholder="Enter your email" />
              <span><FaPaperPlane className='sent__icon'/></span>
            </div>
          </Col>
          <Col xs='12' sm='12' md='12' lg='6' className='div___col social__links d-flex justify-content-center align-items-center'>
            <span><Link to='https://www.facebook.com'><RiFacebookFill className='social__ico'/></Link></span>
            <span><Link to='https://www.github.com'><RiGithubLine className='social__ico'/></Link></span>
            <span><Link to='https://www.youtube.com'><RiYoutubeLine className='social__ico'/></Link></span>
            <span><Link to='https://www.linkedin.com'><RiLinkedinFill className='social__ico'/></Link></span>
          </Col>
          <Col xs='12' sm='12' md='12' lg='6' className='div___col div_copyright'>
            <p className='copyright__text'>Copyright 2022 - website made by BENSAAD Abdelhai.<br/> All Rights Reserved</p>
          </Col>
        </Row>
        {/* <Row className='footer__foot'>

        </Row> */}
      </Container>
    </footer>
  )
}

export default Footer
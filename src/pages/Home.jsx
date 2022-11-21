import React, {useState, useEffect} from 'react'
import Helmet from '../components/Helmet/Helmet'
import {Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap'
import heroImg from '../assets/images/hero.png'
import '../styles/hero-section.css'
import {RiArrowDropRightLine, RiCarLine, RiShieldCheckLine} from 'react-icons/ri'
import { Link } from 'react-router-dom'
import Category from '../components/UI/Category/Category'
import '../styles/home.css'
import {RiCheckboxCircleLine} from 'react-icons/ri'

import featureImg01 from '../assets/images/service-01.png'
import featureImg02 from '../assets/images/service-02.png'
import featureImg03 from '../assets/images/service-03.png'

import products from '../assets/fake-data/products'

import foodCategoryImg01 from '../assets/images/hamburger.png'
import foodCategoryImg02 from '../assets/images/pizza.png'
import foodCategoryImg03 from '../assets/images/bread.png'

import ProductCard from '../components/UI/product-card/ProductCard'

import whyImg from '../assets/images/location.png'

import netWork from '../assets/images/network.png'

import TestimonialSlider from '../components/UI/slider/TestimonialSlider'

import { useResizeDetector } from 'react-resize-detector';

const featureData = [
  {
    title: 'Quick Delivery',
    imgUrl: featureImg01,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, laboriosam?"
  },
  {
    title: 'Super Dine In',
    imgUrl: featureImg02,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, quo."
  },
  {
    title: 'Easy Pick Up',
    imgUrl: featureImg03,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, suscipit."
  },
]



const Home = () => {
  const [category, setCategory] = useState('ALL')
  const [allProducts, setAllProducts] = useState(products)

  const [hotPizza, setHotPizza] = useState([])

  useEffect(() => {
    const filtredPizza = products.filter(item => item.category === 'Pizza')
    const slicePizza = filtredPizza.slice(0,4)
    setHotPizza(slicePizza)
  }, [])

  useEffect(() => {

    if (category === 'ALL') {
      setAllProducts(products)
    }
    
    if (category === 'BURGER') {
      const filtredProducts = products.filter(item => item.category === 'Burger')
      setAllProducts(filtredProducts)
    }

    if (category === 'PIZZA') {
      const filtredProducts = products.filter(item => item.category === 'Pizza')
      setAllProducts(filtredProducts)
    }

    if (category === 'BREAD') {
      const filtredProducts = products.filter(item => item.category === 'Bread')
      setAllProducts(filtredProducts)
    }

  }, [category])

  const { width, ref } = useResizeDetector();
  

  return (
    <Helmet title = 'Home' >
      <section ref={ref}>
        <Container >
          <Row>
            {
              width > 511 ?
              <>
                <Col lg='6' md='7' sm='7' xs='7' >
                  <div className="hero__content">
                    <h5 className='mb-3'>Easy way to make an order</h5>
                    <h1 className='mb-4 hero__title'><span>HUNGRY ?</span> Just wait <br/> food at<span> your door</span></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, odit. Aut excepturi eveniet dolorem cupiditate.</p>
                    <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                      <button className='order__btn  d-flex align-items-center justify-content-between'>Order now <RiArrowDropRightLine/></button>
                      <button className='all__foods-btn'><Link to='/foods'>See all foods</Link></button>
                    </div>
                    <div className='hero__service d-flex align-items-center gap-5 mt-5'>
                      <p className='d-flex align-itmes-center gap-2'><span className='shipping__icon'><RiCarLine className='shipping__icon_i'/></span> No shipping Charge</p>
                      <p className='d-flex align-itmes-center gap-2'><span className='shipping__icon'><RiShieldCheckLine className='shipping__icon_i'/></span> 100% secure checkout</p>
                    </div>
                  </div>
                </Col>
                <Col lg='6' md='5' sm='5' xs='5'>
                  <div className="hero__image">
                    <img src={heroImg} alt="hero img" className='w-100' />
                  </div>
                </Col>
              </>
              :
              <Col lg='6' md='7' sm='7' xs='12' >
              <div className="hero__content">
                <h5 className='mb-3'>Easy way to make an order</h5>
                <h1 className='mb-4 hero__title'><span>HUNGRY ?</span> Just wait <br/> food at<span> your door</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, odit. Aut excepturi eveniet dolorem cupiditate.</p>
                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className='order__btn  d-flex align-items-center justify-content-between'>Order now <RiArrowDropRightLine/></button>
                  <button className='all__foods-btn'><Link to='/foods'>See all foods</Link></button>
                </div>
                <div className='hero__service d-flex align-items-center gap-5 mt-5'>
                  <p className='d-flex align-itmes-center gap-2'><span className='shipping__icon'><RiCarLine className='shipping__icon_i'/></span> No shipping Charge</p>
                  <p className='d-flex align-itmes-center gap-2'><span className='shipping__icon'><RiShieldCheckLine className='shipping__icon_i'/></span> 100% secure checkout</p>
                </div>
              </div>
            </Col>
            }

           

          </Row>
        </Container>
      </section> 
       <section className='pt-0'>
        <Category/>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h5 className='feature__subtitle mb-4'>What we serve</h5>
              <h2 className='feature__title'>Just sit back at home</h2>
              <h2 className='feature__title'>We will <span>take care</span></h2>
              <p className='mb-1 mt-4 feature__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, dolor!</p>
              <p className='feature__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, iusto!</p>
            </Col>
            {
              featureData.map((item,index) => (
                <Col lg='4' md='6' sm='6' key={index} className='mt-5 feature_content'>
                  <div className="feature__item text-center px-5 py-3">
                    <img src={item.imgUrl} alt="feature img" className='w-25 mb-3' />
                    <h5 className='fw-bold mb-3'>{item.title}</h5>
                    <p>{item.desc}</p>
                  </div>
                </Col>
              ))
            }
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className='populaire__foods'>Populaire Foods</h2>
            </Col>
            <Col lg='12'>
              <div className="food__category d-flex align-items-center justify-content-center">
                <button className= {`all__btn ${category === 'ALL' ? 'foodBtnActive' : '' }`} onClick={() => setCategory('ALL')}>All</button>
                <button className= {`d-flex align-items-center gap-2 ${category === 'BURGER' ? 'foodBtnActive' : '' }`} onClick={() => (setCategory('BURGER'))} ><img src={foodCategoryImg01} alt="Burger"/>Burger</button>
                <button className= {`d-flex align-items-center gap-2 ${category === 'PIZZA' ? 'foodBtnActive' : '' }`} onClick={() => setCategory('PIZZA')} ><img src={foodCategoryImg02} alt="Pizza"/>Pizza</button>
                <button className= {`d-flex align-items-center gap-2 ${category === 'BREAD' ? 'foodBtnActive' : '' }`} onClick={() => setCategory('BREAD')} ><img src={foodCategoryImg03} alt="Bread"/>Bread</button>
              </div>
            </Col>
          </Row>
          <Row>
          {
                allProducts.map((item) => (
                  <Col key={item.id} className='mt-5' lg='3' md='4' sm='6' xs='6'>
                    <ProductCard item={item}/>
                  </Col>
                ))
            }
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>

            { width > 400 ? 
            <>
            <Col lg='6' md='6' sm='7' xs='7' className='why__tasty'>
                          <div className="why__tasty-treat">
                            <h2 className='tasty__treat-title mb-4'>Why <span>Tasty Treat?</span></h2>
                            <p className='tasty__trat-descr'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel beatae in vitae magnam cumque natus totam, nihil, nisi quibusdam odio aut quas! Molestiae, excepturi tenetur enim recusandae voluptatum molestias mollitia.</p>
                            <ListGroup className='mt-5'>
                              <ListGroupItem className='border-0 ps-0'>
                                <p  className='choose__us-title d-flex align-items-center gap-2'><RiCheckboxCircleLine className='check__icon'/>Fresh and tasty foods</p>
                                <p className='choose_us-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, sunt?</p>
                              </ListGroupItem>
                              <ListGroupItem className='border-0 ps-0'>
                                <p className='choose__us-title d-flex align-items-center gap-2'><RiCheckboxCircleLine className='check__icon'/>Quality support</p>
                                <p className='choose_us-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, sunt?</p>
                              </ListGroupItem>
                              <ListGroupItem className='border-0 ps-0'>
                                <p className='choose__us-title d-flex align-items-center gap-2'><RiCheckboxCircleLine className='check__icon'/>Order from any location</p>
                                <p className='choose_us-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, sunt?</p>
                              </ListGroupItem>
                            </ListGroup>
                          </div>
                        </Col>
                        <Col lg='6' md='6' sm='5' xs='5' className='location_img '>
                        <img src={whyImg} alt="why tasty treat" className='w-100' />
                      </Col>
            </>
             : 
             <Col lg='6' md='6' sm='7' xs='12' className='why__tasty'>
                          <div className="why__tasty-treat">
                            <h2 className='tasty__treat-title mb-4'>Why <span>Tasty Treat?</span></h2>
                            <p className='tasty__trat-descr'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel beatae in vitae magnam cumque natus totam, nihil, nisi quibusdam odio aut quas! Molestiae, excepturi tenetur enim recusandae voluptatum molestias mollitia.</p>
                            <ListGroup className='mt-5'>
                              <ListGroupItem className='border-0 ps-0'>
                                <p  className='choose__us-title d-flex align-items-center gap-2'><RiCheckboxCircleLine className='check__icon'/>Fresh and tasty foods</p>
                                <p className='choose_us-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, sunt?</p>
                              </ListGroupItem>
                              <ListGroupItem className='border-0 ps-0'>
                                <p className='choose__us-title d-flex align-items-center gap-2'><RiCheckboxCircleLine className='check__icon'/>Quality support</p>
                                <p className='choose_us-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, sunt?</p>
                              </ListGroupItem>
                              <ListGroupItem className='border-0 ps-0'>
                                <p className='choose__us-title d-flex align-items-center gap-2'><RiCheckboxCircleLine className='check__icon'/>Order from any location</p>
                                <p className='choose_us-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, sunt?</p>
                              </ListGroupItem>
                            </ListGroup>
                          </div>
                        </Col>
           }
          </Row>
        </Container>
      </section>
      <section className='pt-0'>
        <Container>
          <Row>
            <Col lg='12 text-center mb-5' className='hot__pizza-div'>
              <h2 className='hot__pizza'>Hot Pizza</h2>
            </Col>
            {
              hotPizza.map(item => (
                <Col lg='3' md='4' sm='6' xs='6' key={item.id}><ProductCard item={item}/></Col>
              ))
            }
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            {width > 400 ?
            <>
              <Col lg='7' md='6' sm='8' xs='8'>
                <div className='testimonial'>
                  <h5 className='testimonial__subtitle  mb-4'>Testimonial</h5>
                  <h2 className='testimonial__title mb-4'>What our <span>customers</span> are saying</h2>
                  <p className='testimonial__desc'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus eveniet nam eius pariatur ipsa aspernatur sed, mollitia magni commodi fuga.</p>
                  <TestimonialSlider />
                </div>            
              </Col>
              <Col lg='5' md='6' sm='4' xs='4' className='testimonial__big-img' >
                <img src={netWork} alt="testimonial img" className='w-100' />
              </Col>
            </>
            :
            <Col lg='6' md='6' sm='8' xs='12'>
            <div className='testimonial'>
              <h5 className='testimonial__subtitle  mb-4'>Testimonial</h5>
              <h2 className='testimonial__title mb-4'>What our <span>customers</span> are saying</h2>
              <p className='testimonial__desc'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus eveniet nam eius pariatur ipsa aspernatur sed, mollitia magni commodi fuga.</p>
              <TestimonialSlider />
            </div>            
          </Col>
          
            }
          </Row>
        </Container>
      </section>
    </Helmet>
    
  )
}

export default Home


import React, {useState, useEffect} from 'react'
import products from '../assets/fake-data/products'
import { useParams } from 'react-router-dom'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/cart/common-section/CommonSection'
import { Container, Row, Col } from 'reactstrap'
import '../styles/productDetails.css'
import ProductCard from '../components/UI/product-card/ProductCard'
import { useDispatch } from 'react-redux'
import { cartActions } from '../store/shopping-cart/cartSlice'

const FoodDetails = () => {
  const {id} = useParams()
  const [tab, setTab] = useState('desc')
  const [entredName, setEntredName] = useState('')
  const [entredEmail, setEntredEmail] = useState('')
  const [reviewMsg, setReviewMsg] = useState('')
  const product = products.find(product => product.id === id)
  const [previewImg, setPreviewImg] = useState(product.image01)
  const {title, price, category, desc, image01} = product
  const relatedProduct = products.filter(item => item.category === category)
  const dispatch = useDispatch()
  const addItem = () => {
    dispatch(cartActions.addItem({
      id,
      title,
      price,
      image01,
    }))
  }

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(entredName, entredEmail, reviewMsg)
  }

  useEffect(() => {
    setPreviewImg(product.image01)
  }, [product])

  useEffect(() =>{
    window.scrollTo(0,0)
  }, [product])

  return (
    <Helmet title='product-details'>
      <CommonSection title={title}/>
      <section>
        <Container>
          <Row>
            <Col lg='2' md='2' sm='4' xs='4'>
              <div className="product__images " >
                <div className="img__item" onClick={() => setPreviewImg(product.image01)}>
                  <img src={product.image01} alt="" className='w-50' />
                </div>
                <div className="img__item" onClick={() => setPreviewImg(product.image02)}>
                  <img src={product.image02} alt="" className='w-50' />
                </div>
                <div className="img__item" onClick={() => setPreviewImg(product.image03)}>
                  <img src={product.image03} alt="" className='w-50' />
                </div>
              </div>
            </Col>
            <Col lg='4' md='4' sm='8' xs='8'>
              <div className="product__main-img">
                <img src={previewImg} alt="" className='w-100' />
              </div>
            </Col>
            <Col lg='6' md='6'>
              <div className="single__product-content">
                <h2 className='product__title mb-3'>{title}</h2>
                <p className='product__price'>Price :<span>${price}</span></p>
                <p className='category'>Category :<span>{category}</span></p>
                <button className="addToCart__btn" onClick={addItem} >Add to Cart</button>
              </div>
            </Col>
            <Col lg='12'>
              <div className="tabs d-flex align-items-center mt-4 gap-5">
                <h6 className={tab === 'desc' ? 'tab__active' : ''} onClick={() => setTab('desc')} >Description</h6>
                <h6 className={tab === 'rev' ? 'tab__active' : ''} onClick={() => setTab('rev')}>Review</h6>
              </div>

              {
                  tab === 'desc' ?
                                  <div className="tab__content">
                                    <p>{desc}</p>                
                                  </div>  : 
                                  <div className="tab__form mb-3">
                                    <div className="review mb-3">
                                      <p className="user__name mb-0">Jhon Doe</p>
                                      <p className="user__email mb-2">jhondoe@gmail.com</p>
                                      <p className='feedback__text'>great product</p>
                                    </div>
                                    <div className="review mb-3">
                                      <p className="user__name mb-0">Jhon Doe</p>
                                      <p className="user__email mb-2">jhondoe@gmail.com</p>
                                      <p className='feedback__text'>great product</p>
                                    </div>
                                    <div className="review">
                                      <p className="user__name mb-0">Jhon Doe</p>
                                      <p className="user__email mb-2">jhondoe@gmail.com</p>
                                      <p className='feedback__text'>great product</p>
                                    </div>
                                    <form className='form' onSubmit={submitHandler}>
                                      <div className='form__group'>
                                        <input type="text" placeholder='Enter your name' onChange={e => setEntredName(e.target.value)} required />
                                      </div>
                                      <div className='form__group'>
                                        <input type="email" placeholder='Enter your email' onChange={e => setEntredEmail(e.target.value)} required />
                                      </div>
                                      <div className='form__group'>
                                        <textarea rows={5} type="text" placeholder='Write your review' onChange={e => setReviewMsg(e.target.value)} required />
                                      </div>
                                      <button  type='submit' className='addToCart__btn'>Submit</button>                                    
                                    </form>
                                  </div>
                }



            </Col>
            <Col lg='12' className='might__like-div'>
                <h3 className='might__like'>You might also like</h3>
            </Col>
            {
              relatedProduct.map(item => (
                <Col lg='3' md='4' sm='6' xs='6' className='mb-4' key={item.id}>
                  <ProductCard item={item}/>
                </Col>
              ))
            }
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default FoodDetails
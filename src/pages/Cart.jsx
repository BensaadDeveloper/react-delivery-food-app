

import React from 'react';
import CommonSection from '../components/UI/cart/common-section/CommonSection'
import Helmet from '../components/Helmet/Helmet'
import { useSelector, useDispatch } from 'react-redux';
import '../styles/cart-page.css'
import {Container, Row, Col} from 'reactstrap'
import {RiDeleteBinLine} from 'react-icons/ri' 
import {cartActions} from '../store/shopping-cart/cartSlice'
import { Link } from 'react-router-dom';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.cartItems)
  const totalAmount = useSelector(state => state.cart.totalAmount)
  return (
    <Helmet>
      <CommonSection title='Your Cart' />
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              {
                cartItems.length === 0 ? <h5 className='text-center'>Your cart is empty</h5> :
                  <>
                  <table className='table table-bordered'>
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Product Title</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        cartItems.map(item => (<Tr item={item} key={item.id}/>))
                      }                      
                    </tbody>
                  </table>

                  <div className='cart__footer'>
                      <h6>Subtotal : $<span className='cart__subtotal'>{totalAmount}</span></h6>
                      <p>Taxes and shipping wil calculated at checkout</p>
                      <div className='cart_page-btn'>
                        <button className="addToCart__btn"><Link to='/foods'>Continue Shopping</Link></button>
                        <button className="addToCart__btn"><Link to='/checkout'>Proceed To Checkout</Link></button>
                      </div>
                  </div>
                  </>
                
              }
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
};

const Tr = props => {
  const {id, image01, title, price, quantity} = props.item
  const dispatch = useDispatch()
  const deleteItemHandler = () => {
    dispatch(cartActions.deleteItem(id))
  }
  return (
    <tr className='table__row'>
      <td className='text-center cart__img-box'><img src={image01} alt="img food" /></td>
      <td className='text-center table__cell'>{title}</td>
      <td className='text-center table__cell'>${price}</td>
      <td className='text-center table__cell'>{quantity}XP</td>
      <td className='text-center table__cell'><RiDeleteBinLine className='cart__item-del' onClick={deleteItemHandler}/></td>
    </tr>
  )
}

export default Cart
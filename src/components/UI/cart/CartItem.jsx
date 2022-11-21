

import React from 'react'
import {ListGroupItem} from 'reactstrap'
import {RiCloseLine, RiAddLine, RiSubtractLine} from 'react-icons/ri'
import '../../../styles/cart-item.css'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../../store/shopping-cart/cartSlice'

const CartItem = ({item}) => {

    const {id, title, image01,price, quantity, totalPrice} = item
    const dispatch = useDispatch()
    const incrementItem = ()=> {
        dispatch(cartActions.addItem({
            id, title, image01, price, quantity
        }))
    }

    const decreaseItem = () => {
        dispatch(cartActions.removeItem(id))
    }

    const deleteItem = () => {
        dispatch(cartActions.deleteItem(id))
    }

  return (
    <ListGroupItem className='border-0 cart__item'>
        <div className="cart__item-info d-flex align-items-center gap-2" key={id}>
            <img src={image01} alt="product img" />
            <div className="cart__product-info d-flex w-100 align-items-center justify-content-between gap-4">
                <div>
                    <h6 className='cart__product-title'>{title}</h6>
                    <p className='d-flex gap-5 align-items-center cart__product-price'>{quantity}x <span>${totalPrice}</span></p>
                    <div className='d-flex justify-content-between align-items-center increase__decrease-btn'>
                        <span className='increase__btn' onClick={incrementItem}><RiAddLine/></span>
                        <span className='quantity'>{quantity}</span>
                        <span className='decrease__btn' onClick={decreaseItem} ><RiSubtractLine/></span>
                    </div>
                </div>
                <span className='delete__btn' onClick={deleteItem} ><RiCloseLine/></span>
            </div>
        </div>
    </ListGroupItem>
  )
}

export default CartItem
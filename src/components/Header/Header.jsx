import React, {useRef, useEffect, useState} from 'react'
import { Container } from 'reactstrap'
import logo from '../../assets/images/res-logo.png'
import { NavLink, Link } from 'react-router-dom'
import {FaShoppingCart, FaUserAlt, FaHome} from 'react-icons/fa'
import {IoFastFood} from 'react-icons/io5'
import {GoMail} from 'react-icons/go'
import { useResizeDetector } from 'react-resize-detector';
import '../../styles/header.css'
import { useSelector, useDispatch } from 'react-redux'
import { cartUiActions } from '../../store/shopping-cart/cartUiSlice'


const nav__link = [
  {
    display : 'Home',
    path : '/home',
    icon : <FaHome className='menu__link-icon'/>,
  },
  {
    display : 'Foods',
    path : '/foods',
    icon : <IoFastFood className='menu__link-icon'/>,
  },
  {
    display : 'Cart',
    path : '/cart',
    icon : <FaShoppingCart className='menu__link-icon'/>,
  },
  {
    display : 'Contact',
    path : '/contact',
    icon : <GoMail className='menu__link-icon last-icon'/>,
  },
]



const Header = () => {
  const menuRef = useRef(null)
  const menuToggleRef = useRef(null)
  const totalQuantity = useSelector(state => state.cart.totalQuantity)
  const dispatch = useDispatch()
  const toggleMenu = () => {
    menuRef.current.classList.toggle('menu--open');
    menuToggleRef.current.classList.toggle('open');
  }

  const toggleCart = () => {
    dispatch(cartUiActions.toggle())
  }

  // const [showIcon, setShowIcon] = useState(false);

  // useEffect (() => {
  //   if (window.matchMedia("(max-width:767px)").matches) {
  //     setShowIcon(true)
  //   } else {
  //     setShowIcon(false)
  //   }
  // }, [])
  // // const toggleMenu = () => {
  // //   menuRef.current.classList.toggle('menu--open');
  // //   menuToggleRef.current.classList.toggle('open');

  // // }

  useEffect(()=> {
    window.addEventListener('scroll', ()=> {
      if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        ref.current.classList.add('header__shrink')
      } else {
        ref.current.classList.remove('header__shrink')
      }
    })
    return ()=> window.removeEventListener('scroll')
  }, [])

  const { width, ref } = useResizeDetector();
  return (
    <header ref={ref} className="header" >
      <Container>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          <div className="logo">
            <img src={logo} alt="logo restaurant" />
            <h5>Tasty Treat</h5>
          </div>

          {/* ======== Menu ======== */}
          <div ref={menuRef}  className="menu">
            {
              nav__link.map((item,index) => (
                <NavLink to={item.path} key={index} className={navClass => navClass.isActive ? 'active__menu' : 'd-flex align-items-start justify-content-start'}>{width <= 767.75 && item.icon}{item.display}</NavLink>
              ))
            }
          </div>
          {/* <div className="navigation"   >
            <div ref={menuRef}  className="menu d-flex align-items-center gap-5">
              {
                nav__link.map((item,index) => (
                  <NavLink to={item.path} key={index} className={navClass => navClass.isActive ? 'active__menu' : ''}  >{item.display}</NavLink>
                ))
              }
            </div>
          </div> */}

          {/* ======== Nav Right Icons ======== */}
          <div className="nav__right d-flex align-items-center gap-4">
            <span className="cart__icon"  >
              <FaShoppingCart className='cart_icon' onClick={toggleCart}/>
              <span className="cart__badge">{totalQuantity}</span>
            </span>
            <span className="user">
              <Link to='/login'><FaUserAlt className='user_icon'/></Link>
            </span>
            <div ref={menuToggleRef} onClick={toggleMenu} className='menu-toggle'>
              <div className='hamberger__icon'></div>
            </div>
            
            {/* <span className="mobile__menu" onClick={toggleMenu}>
              <GiHamburgerMenu className='menu_icon'/>
            </span> */}
          </div>

        </div>
      </Container>

    </header>
  )
}

export default Header
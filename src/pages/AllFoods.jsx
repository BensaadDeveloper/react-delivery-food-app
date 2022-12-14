

import React, {useState} from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/cart/common-section/CommonSection'
import { Container, Col, Row} from 'reactstrap';
import {RiSearchLine} from 'react-icons/ri'
import products from '../assets/fake-data/products'
import ProductCard from '../components/UI/product-card/ProductCard'
import '../styles/all-foods.css'
import '../styles/pagination.css'
import ReactPaginate from 'react-paginate';

const AllFoods = () => {

  const [searchTerm, setSearchTerm] = useState('')
  const [pageNumber, setPageNumber] = useState(0)

  const productPerPage = 8
  const visitedPage = pageNumber * productPerPage
  const displayPage = products.slice(visitedPage, visitedPage + productPerPage)
  const pageCount = Math.ceil(products.length / productPerPage)

  const changePage = ({selected}) => {
    setPageNumber(selected)
  }
  // const [productData, setProductData] = useState(products)

  console.log('State is :', searchTerm)

  return (
    <Helmet title='All-Foods'>
      <CommonSection title='All Foods'/>

      <section>
        <Container>
          <Row>
            <Col lg='6' md='6' sm='6' xs='12'>
              <div className="search__widget d-flex align-items-center justify-content-between">
                <input type="text" className="text" placeholder="I'm looking for..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
                <span><RiSearchLine/></span>
              </div>
            </Col>
            <Col lg='6' md='6' sm='6' xs='12' className='mb-5 sorting__widget-div'>
              <div className="sorting__widget" >
                <select className=''>
                  <option>Default</option>
                  <option value="ascending">Alphabetically, A-Z</option>
                  <option value="descending">Alphabetically, Z-A</option>
                  <option value="high-price">High Price</option>
                  <option value="low-price">Low Price</option>
                </select>
              </div>
            </Col>

            {
              
              displayPage.filter((item) => {
                if (searchTerm.value === "") return item
                if (item.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())) return item
              } ).map((item) => (<Col lg='3' md='4' sm='6' xs='6' key={item.id} className='mb-4' ><ProductCard item={item}/></Col>) )
            }

            <div>
              <ReactPaginate
              pageCount={pageCount}
              onPageChange={changePage}
              previousLabel='Prev'
              nextLabel='Next'
              containerClassName='paginationBttns'
              />
            </div>

          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default AllFoods
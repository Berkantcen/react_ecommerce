import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
// COMPONENTS
import Product from '../components/Product'
// STYLE
import { Row, Col } from 'react-bootstrap'

const HomeScreen = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products')
      setProducts(data)
    }
    fetchProducts()
  }, [])

  return (
    <>
      <h1>Latest Prodcuts</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} xl={3} lg={4} key={product._id}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen

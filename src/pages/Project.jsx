import React from 'react'
import Header from '../components/Header'
import Row from 'react-bootstrap/esm/Row'
import Projectcards from '../components/Projectcards'
import Col from 'react-bootstrap/esm/Col'

function Project() {
  return (
    <>
      <Header />
      <div className='d-flex justify-content-center align-items-center mt-5 flex-column'>
        <h3>All Projects</h3>
        <div className={'d-flex mt-5 w-25'}>
          <input type="text" className='form-control rounded' placeholder='Search project using technology' />
          <i class='fa-solid fa-magnifying-glass fa-rotate-90' style={{ marginLeft: '-40px', color: 'lightblue' }}></i>
        </div>
      </div>
      <Row className='mt-5 mb-5'>
        <Col md={6} lg={4}>
          <Projectcards />
        </Col>
      </Row>
    </>

  )
}

export default Project
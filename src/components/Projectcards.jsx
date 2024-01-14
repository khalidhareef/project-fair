import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import mediaplayerImage from '../assets/foto5.jpeg'

function Projectcards() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Card className='shadow text-center btn' style={{ width: '18rem' }} onClick={handleShow}>
        <Card.Img variant="top" src={mediaplayerImage} />
        <Card.Body>
          <Card.Title>Media Player</Card.Title>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Video player</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6} lg={6}>
              <img src={mediaplayerImage} width={"100%"} height={"250px"} alt="" />
            </Col>
            <Col>
              <h4>Description</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quia to
                tam cum beatae soluta molestiae dolorum e quo asperiores non aperiam deleniti
                xercitationem explicabo ea illo corporis distinctio, magnam vitae ex!</p>
                <p><span className='fw-bolder'>Technologies: </span>HTML, CSS, REACT, NODE</p>
            </Col>
          </Row>
          <div className='d-flex mt-3'>
          <a href="" style={{color:'black'}}> <i class='fa-solid fa-link '></i></a>
          <a href="" style={{color:'black'}}> <i class='fa-brands fa-github fa-2x ms-3'></i> </a>
          </div>
        </Modal.Body>

      </Modal>
    </div>
  )
}

export default Projectcards
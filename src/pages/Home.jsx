import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Projectcards from '../components/Projectcards';
import { Link } from 'react-router-dom';
import homepageImage from '../assets/foto2.jpeg'
function Home() {
    return (
        <>
            <div className='mb-5 bg-success' style={{ width: '100%', height: '80vh', backgroundColor: 'yellowgreen' }}>
                <div className='container-fluid rounded'>
                    <Row className='align-items-center p-5'>
                        <Col sm={12} md={6} lg={6} >
                            <h1 className='text-light mb-4' style={{ fontSize: "50px", fontWeight: '600' }}>Project Fair</h1>
                            <p>One stop destination for all software development projects</p>
                            <Link to={'/login'}><button className='btn btn-warning rounded'>Get Started  <i class="fa-solid fa-arrow-right"></i></button></Link>
                        </Col>
                        <Col sm={12} md={6} lg={6}>
                            <img src={homepageImage} alt="" height={'360px'} style={{ marginTop: '35px' }} />
                        </Col>
                    </Row>
                </div>
            </div>
            <div className='mt-5 allProject'>
                <div className='text-center'>
                    <h1>Explore our Projects</h1>
                    <div className=''>
                        <marquee scrollAmount={20}>
                            <div className=' d-flex ' >
                                <div className='ms-5' style={{ width: "400px" }}><Projectcards /></div>
                                <div className='ms-5' style={{ width: "400px" }}><Projectcards /></div>
                                <div className='ms-5' style={{ width: "400px" }}><Projectcards /></div>
                            </div>
                        </marquee>
                    </div>
                    <div className='text-center mt-5' style={{ fontWeight: '600', color: "red", cursor: 'pointer' }}> <Link to={'/project'}>See More</Link> </div>
                </div>
            </div>
        </>
    )
}

export default Home
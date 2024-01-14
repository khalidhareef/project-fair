import React from 'react'
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div>

            <div className="footer d-flex align-items-center justify-content-evenly w-100 mb-5 mt-5 bg-success">
                <div style={{ width: '400px' }}>
                  <Link to={'/'}> <h4>
                        <i class="fa-solid fa-file-powerpoint"></i>Media Player
                        </h4></Link> 
                    <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sapiente
                        commodi. Numquam nam harum saepe maxime. a quas doloresbr debitis.
                        Quidem, facilis cum. Molestiae saepe exercitationem quisquam aspernnemo </h6>
                </div>
                <div>

                    <h4>Links</h4>
                    <Link to={'./'} style={{ textDecoration: 'none' }}>
                        <h6>Home</h6>
                    </Link>
                    <Link to={'./login'} style={{ textDecoration: 'none' }}>
                        <h6>LOGIN</h6>
                    </Link>
                    <Link to={'./register'} style={{ textDecoration: 'none' }}>
                        <h6>Register</h6>
                    </Link>
                </div>
                <div>
                    <h4>Guides</h4>
                    <h6>React</h6>
                    <h6>React Bootstrap</h6>
                    <h6>Bootswatch</h6>
                </div>
                <div >
                    <h4>Contact Us</h4>
                    <div className="d-flex">
                        <input type="text" placeholder="Enter your Email" className="form-control" />
                        <button className="btn btn-warning ms-3">Subscribe</button>
                    </div>
                    <div className="d-flex mt-4 justify-content-evenly fs-3 ">

                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-linkedin"></i>
                        <i class="fa-brands fa-facebook"></i>

                    </div>
                </div>
            </div>
            <div className="text-center">
                <p>Copyright &#169; 2023. Media player built with react</p>
            </div>
        </div>
    )
}

export default Footer
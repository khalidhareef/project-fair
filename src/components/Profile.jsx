import React from 'react'
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';

function Profile() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className='card shadow p-5 mb-5'>
        <div className='d-flex justify-content-between'>
          <h2>Profile</h2>
          <button className='btn btn-outline-info'  onClick={() => setOpen(!open)}>
            <i class="fa-solid fa-angle-down toggle"></i></button>
      </div>
      <Collapse in={open}>
        <div className='ow justify-content-center mt-5'>
          <label htmlFor="profile">
            <input type="file" id="profile" style={{ display: 'none' }} />
            <img src="https://i.pinimg.com/736x/01/7e/6f/017e6f2d0c32627056d26a7e77c75753.jpg" alt="" width={"150px"} height={"150px"} className='rounded box-shadow ' />
            <p>  <i class="fa-solid fa-arrow-up"></i>         Click the image to upload Profile picture</p>
          </label>
          <div className='mt-2 mb-3 rounded'>
            <input type="text" name="" id="" placeholder='Github Link' className='form-control' />
          </div>
          <div>
            <input type="text" name="" id="" placeholder='Linkedin Link' className='form-control' />
          </div>
          <div className='mt-3 rounded w-100'>
            <button className='btn btn-success'>Update</button>
          </div>
        </div>
      </Collapse>
    </div >
    </>
  )
}

export default Profile
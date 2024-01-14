import React from 'react'
import AddProject from './AddProject'

function Myproject() {
  return (
    <>
      <div className='card-shadow p-5 ms-3 mb-5'>

        <div className='d-flex'>
          <h3 className='text-success ms-3'>MY Projects</h3>
          <div className='ms-auto'>
            <AddProject />
          </div>
        </div>
        <div className='mt-5'>
          <div className='border d-flex align-items-center rounded p-2'>
            <h5>Project Title</h5>
            <div className='ms-auto'>
            <button className='btn'><i class="fa-solid fa-pen-to-square text-info"></i></button>
            <button className='btn'><i class="fa-brands fa-github text-success"></i></button>
            <button className='btn'><i class="fa-solid fa-trash text-danger"></i></button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Myproject
import React from 'react'
import '../Universal.css';

export default function TextUtils() {
  return (
    <div className='bg-dark-color hv-9 pt-3'>
        <div id="text-box" className='d-flex flex-column align-items-center' >
            <textarea name="" id="" rows={12} className='wv-7 p-3 br-5 border-primary-6' placeholder='Enter your text here.... '></textarea>
        
        <div id="text-btns" className='m-3'>
            <button type="button" className='btn bg-primary-color text-white me-2 mt-2 btn-hover'>Capitalize</button>
            <button type="button" className='btn bg-primary-color text-white me-2 mt-2 btn-hover'>Capitalize</button>
            <button type="button" className='btn bg-primary-color text-white me-2 mt-2 btn-hover'>Capitalize</button>
            <button type="button" className='btn bg-primary-color text-white me-2 mt-2 btn-hover'>Capitalize</button>
            <button type="button" className='btn bg-primary-color text-white me-2 mt-2 btn-hover'>Capitalize</button>
        </div>
        
        </div>

        <div id="readings" className='ms-5'>
            <h5>Total number of Characters: </h5>
        </div>
        
    </div>
  )
}

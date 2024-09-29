import React from 'react'
import '../App.css';


export default function Header() {
  return (
    <div className='contaner bg-dark p-3 d-flex align-items-center justify-content-between ps-5 pe-5 position-relative' style={{height:'80px'}}>
      <h1 className='text-white  me-3'>Arham</h1>
      
       <nav id='nav-menu' className='pt-3 wp-3'>
        <ul className='d-flex justify-content-around text-white list-unstyled'>
          <li> <a href="/" className='link-cl  active'> Home </a></li>
          <li> <a href="/" className='link-cl'> About </a></li>
          <li> <a href="/" className='link-cl'> Projects </a></li>
          <li> <a href="/" className='link-cl'> Services </a></li>
        </ul>
       </nav>

       <div id='search' className=''>
        <input type='search' id='srch' className=''/>
        <button className='mb-1 ms-2 btn bg-secondary-color pe-4  ps-4 btn-hover'>Search</button>
       </div>
      <div id="drop-togle" className='position-relative bg-secondary-color' style={{width:'40px', height:'40px'}}>
        <i id='togle-open' class="bi bi-list position-absolute top-0" style={{fontSize:'30px'}} ></i>
        <i id='togel-close' class="bi bi-x-lg " style={{fontSize:'30px'}}></i>
        
      </div>

      <div id="drop-menu" className='d-none bg-primary position-absolute top-100 end-0 me-1 wv-10'  style={{height:'210px', boxSizing:'border-box'}}>
        <ul className='d-flex flex-column align-items-center text-white list-unstyled'>
            <li className='drop-link'> <a href="/" className='link-cl '> Home </a></li>
            <li className='drop-link'> <a href="/" className='link-cl '> About </a></li>
            <li className='drop-link'> <a href="/" className='link-cl '> Projects </a></li>
            <li className='drop-link'> <a href="/" className='link-cl'> Services </a></li>
          </ul>
        </div>
    </div>
  )
}

import React from 'react'
import '../App.css';
import {useRef} from 'react';
import {useState} from 'react';

export default function Header() {

  const [menuOpen, setMenuOpen] = useState(false);
  const togelOpen = useRef(null);
  const togelClose = useRef(null);
  const dorpMenu = useRef(null);


  const DropdownMenu = ()=>{

    if(menuOpen === false)
    {
      console.log("open")
      togelOpen.current.style.display = 'none';
      
      togelClose.current.style.display = 'block';
      
      dorpMenu.current.style.height = '0px';
      dorpMenu.current.style.opacity = '0';
      dorpMenu.current.style.overflow = 'hidden';
      dorpMenu.current.style.transition = 'all .3s ease-in-out';


      setMenuOpen(true);
    }
    else
    {
      console.log("Close")
      togelOpen.current.style.display = 'block';
      
      togelClose.current.style.display = 'none';
      
      dorpMenu.current.style.opacity = '1';
      dorpMenu.current.style.height = '220px';


      setMenuOpen(false);
    }

    
  }



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
      <div id="drop-togle" className='position-relative bg-secondary-color' style={{width:'40px', height:'40px'}} onClick={DropdownMenu}>
        <i ref={togelOpen}  id='togle-open' class="bi bi-list position-absolute top-0" style={{fontSize:'30px'}} ></i>
        <i ref={togelClose} id='togel-close' class="bi bi-x-lg " style={{fontSize:'30px'}}></i>
        
      </div>
      <div ref={dorpMenu} id="drop-menu" className='bg-secondary-color position-absolute top-100 start-0 pt-2 wv-10 rounded'>
        <ul className='d-flex flex-column align-items-center text-white list-unstyled'>
            <li className='drop-link'> <a href="/" className='down-link-cl'> Home </a></li>
            <li className='drop-link'> <a href="/" className='down-link-cl'> About </a></li>
            <li className='drop-link'> <a href="/" className='down-link-cl'> Projects </a></li>
            <li className='drop-link'> <a href="/" className='down-link-cl'> Services </a></li>
          </ul>
        </div>
    </div>
  )
}

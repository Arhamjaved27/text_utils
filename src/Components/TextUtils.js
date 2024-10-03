import React from 'react'
import '../Universal.css';
import { useState } from 'react';

export default function TextUtils() {

    const [text, setText] = useState(0);
    const [totalLatters, setTotalLatters] = useState(0);
   
    const textBox= (event)=>{
        setText(event.target.value);
    }

    const  OnUpHandle = ()=>{
        console.log("Upper case text change");
        let newText = text.toUpperCase(); 
        setText(newText);
        
    }
    const  OnDownHandle = ()=>{
        console.log("Lower case text change");
        let newText = text.toLowerCase(); 
        setText(newText);
        
    }

    const OnClearText= ()=>{
        setText("");
    }
    
  return (
    <div className='bg-dark-color hv-9 pt-3'>
        <div id="text-box" className='d-flex flex-column align-items-center' >
            <h3 className='ms-5 txt-primary-color'>Enter Text Below To Analys</h3>
            <textarea value={text} name="" id="" rows={12} className='wv-7 p-3 br-5 border-primary-6 txt-color-dark' placeholder='Enter your text here.... ' onChange={textBox}></textarea>
        
        <div id="text-btns" className='m-3'>
            <button type="button" className='btn bg-primary-color text-white me-2 mt-2 btn-hover' onClick={OnUpHandle} >Upper Case</button>
            <button type="button" className='btn bg-primary-color text-white me-2 mt-2 btn-hover' onClick={OnDownHandle}>Lower Case</button>
            <button type="button" className='btn bg-primary-color text-white me-2 mt-2 btn-hover' onClick={OnClearText}>Clear Text</button>
            <button type="button" className='btn bg-primary-color text-white me-2 mt-2 btn-hover'>Copy Text</button>
            <button type="button" className='btn bg-primary-color text-white me-2 mt-2 btn-hover'>Remove Extra Spaces</button>
        </div>
        
        </div>

        <div id="readings" className='ms-5'>
            <h5 className='d-inline'></h5>
            <p> <strong className='txt-color-prinary'>Total number of Characters:</strong> {text} </p>
        </div>
        
    </div>
  )
}

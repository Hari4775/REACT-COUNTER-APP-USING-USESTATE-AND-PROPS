import Button from 'react-bootstrap/Button';
import { useState } from 'react';

import React from 'react'

const Counter = (props) => {
    
    
    
  return (
  <div>
    <div  className="row mb-5">
      <div   className='col-5 m-5'>   <h3  style={{color: "white"}}>COUNTER ONE =<span style={{color: "yellow",fontSize:"50px",fontStyle:"initial",fontWeight:"bolder"}} >{props.ctwo}</span></h3>   </div>
    

      <div className='col-5 m-5'>    <h3  style={{color: "white"}}>COUNTER TWO =<span style={{color: "red",fontSize:"50px",fontStyle:"initial", fontWeight:"bolder", }}> {props.cone} </span></h3>  </div>

    </div>
</div>
  )
}

export default Counter
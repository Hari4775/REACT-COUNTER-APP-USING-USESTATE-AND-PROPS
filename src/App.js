/* eslint-disable react-hooks/rules-of-hooks */
import Button from 'react-bootstrap/Button';
import './App.css';
import Form from 'react-bootstrap/Form';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Counter from './Counter';





function App() {

  const [valueone,setValueone]=useState(0)
  const [valuetwo,setValuetwo]=useState(0)

  const[checkone,setCheckone]=useState(false)
  const[checktwo,setChecktwo]=useState(false)




  const add=()=>{
    if (checkone==true && checktwo==true){ setValueone(valueone+1);
       setValuetwo (valuetwo+1);
       }
    else if (checkone==true && checktwo==false)
    { setValueone(valueone+1) ; 
      setValuetwo(valuetwo);
    }
    else if(checkone==false&& checktwo==true)
    { setValuetwo(valuetwo+1);
      setValueone(valueone);
    }
   
  }

const sub=()=>{
    if (checkone==true && checktwo==true)
    {
       setValueone(valueone-1)
       setValuetwo (valuetwo-1)
     }
    else if (checkone==true && checktwo==false)
    {
       setValueone(valueone-1) ;
       setValuetwo(valuetwo);
    }
    else if(checkone==false && checktwo==true)
    {
       setValuetwo(valuetwo-1);
       setValueone(valueone);
    }
    

};


const reset=()=>{
  setValueone(0)
  setValuetwo(0)
}


  return (

    <div className="App ">

    <div className="containeri  ">
    <div className='row GG'>    <h1 className='head' style={{color: "yellow",backgroundColor:"darkblue",fontWeight:"bolder"}}>C<span style={{color:"red"}}>O</span>UNTER <></>  APP</h1>
    </div>

    
    


    
    <Button style={{borderColor:"blue"}} onClick={add} className='m-2 mb-5 mt-5 btns' variant="dark">  INCREASE<Button className='m-2 ml-3 harii' variant="info">+</Button>
    </Button>
    
    <Button  style={{borderColor:"red", border:"solid blue"}} onClick={reset} className='m-2' variant="dark">RESET</Button>


    <Button style={{borderColor:"blue"}} onClick={sub} className='m-2 mb-5 mt-5 btns' variant="dark">DICREASE <Button className='m-2 ml-3 btns border-red' variant="info">-</Button></Button>
   
   <div className='row'>
     <div className='col-6'>
       <label>
       <input type='checkbox'  onChange={(e)=>setChecktwo(e.target.checked)}  />  <span  style={{color: "blue"}}> enable Counter 1 ONLY </span>
       </label> 
     </div>
     <div className='col-6'>
        <label>-
         <input type='checkbox'  onChange={(e)=>setCheckone(e.target.checked)}  />   <span  style={{color: "blue"}}>  enable Counter 2 ONLY </span>
       </label>   
     </div>

   </div>


      <Counter cone={valueone} ctwo={valuetwo} />
    

    </div>

    </div>
    
  );
}

export default App;

import React, { useState } from 'react'
import evelope from  '../imgs/envelope.png';
function InptSection() {
    const [name, setname] = useState('')
    const handleSubmit = event => {
        event.preventDefault(); 
        console.log( name);
        setname('');
      };
    
  return (
    <><div className='container'>
    <hr className='hr mt-50' ></hr>
    </div>
        <div className='container' style={{background:"#000000",borderRadius:"14px"}}> 
          <div className='row'>
          <div className='col-2 flex2 '>
          <div className='enve'>
            <img src ={evelope} alt ="envelope" />
          </div>
          </div>

           <div className='col-4 '>
           <div className='center'>
           <p style={{color:"#FFFFFFD8"}}>
            Get industry update with our daily newsletter 
            </p>
            <h3><a href='/' style={{color:"#FFFFFF"}}>Subscribe Now !</a></h3>
           </div>
           
           </div>
          <div className='col-6'>
            <form className='form center' onSubmit={handleSubmit}>
                <input
                type ="email"
                placeholder='Email Address'
                onChange={event => setname(event.target.value)}
                value = {name}
                
                className = "inputfld"
                />
                <button type='submit' className="button Montbold">Sign Up</button>
            </form>
          </div>

          </div>
        </div>
    </>
  )
}

export default InptSection
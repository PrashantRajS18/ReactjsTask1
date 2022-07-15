import React from 'react'
import Cards from './Cards.';
import Cardflex2 from './Cardflex2';
import Premium from './Premium'
import Truck from '../imgs/truck.png'
import Mostpop2 from '../imgs/mostpop2.png';
import Mostpop3 from '../imgs/mostpop3.png';
import Mostpop4 from '../imgs/mostpop4.png';
import Adv3 from '../imgs/adv3.png' 
function Mostpop() {                                                             
  return (
    <>
        <div className='container row' >
         <div className='col-4'>
          <div style={{marginBottom:"10px"}}>
            <h1 className='Montbold mt-20'>Most Popular</h1>
          </div>
          <div>
          <Cards src ={Truck}
          width = "100%"
        
            title = "TMT"
            body = "Quick commerce deliveries surge 500% in a year, says logistics provider Shadowfax"
          />
          </div>

         </div>
         <div className='col-4 mt-50 '>
         <div className='postion'>
          <Cardflex2  src ={Mostpop2}
          className = "flex"
            title = "CONSUMER"
            body = "Consumer firm Madbow bags $2 mn funding at $13 mn valuation"
          />
          <Premium 
          className ="Montbold Premiumtag1-2 "
         />
          </div>
          <hr className ="hr"></hr>
          <div className='postion'>
          <Cardflex2  src ={Mostpop3}
          className = "flex"
            title = "ECONOMY"
            body = "Indian shares hit three-week lows in broad-based selling"
          />
          <Premium 
          className ="Montbold Premiumtag1-2 "
         />
          </div>
          <hr className ="hr"></hr>
          <div>
          <Cardflex2  src ={Mostpop4}
          className = "flex"
            title = "MANUFACTURING"
            body = "HDFC Capital marks initial close at $1.88 bn for its affordable housing fund 3"
          />
          </div>
          <hr className ="hr"></hr>
         </div>
         <div className='col-1 mt-50'>
         <hr className='vrt'></hr>
         </div>
        <div className='col-3'>
        <div className='adv3'>
        <p className='adtxt Mont'>Advertisement</p>
        <div style={{textAlign:"center"}}>
        <img src={Adv3} className ="adimg3" width="100%" alt = "add 1" />
        </div>
            
        </div>
        </div>
        
        </div>
        <div className='container'>
        <hr className='hr mt-50' ></hr>
        </div>
        
    </>
  )
}

export default Mostpop
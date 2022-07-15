import React from 'react'
import Cards from './Cards.';
import Cardflex2 from './Cardflex2';
import Premium from './Premium';
import Editorimg1 from '../imgs/editorimg1.png' 
import Editorimg2 from '../imgs/editorimg2.png'
import tmt from '../imgs/tmt.png'
import consumer from '../imgs/consumer.png'
import Adv3 from '../imgs/adv3.png' 
function Editor() {
  return (
    <>
        <div className='container row' >
         <div className='col-4'  >
          <div style={{marginBottom:"30px"}}>
            <h1>Editor's Pick</h1>
          </div>
          <div className='postion'>   
          <Cards src ={Editorimg1}
          width = "100%"
        
            title = "ECONOMY"
            body = "EMERGING MARKETS - Asian markets mixedas they digest Chinese data South Korean stocks fall"
          />
           <Premium className="Montbold Premiumtag1-1" />
          </div>
          <hr className ="hr mt-30"></hr>
         </div>
         <div className='col-4 mt-50 '>
         
         <div className='postion'>
          <Cardflex2  src ={Editorimg2}
          className = "flex"
            title = "FINANCE"
            body = "RIL invests Rs 7600 crores in acquisitions to strengthen retail arm"
          />
          <Premium 
          className ="Montbold Premiumtag1-2 "
         />
         
           
          </div>
          <hr className ="hr"></hr>
          <div>
          <Cardflex2  src ={tmt}
          className = "flex"
            title = "TMT"
            body = "Dailyhunt parent raises close to $28 mn at $3.1 bn valuation"
          />
          </div>
          <hr className ="hr"></hr>
          <div>
          <Cardflex2  src ={consumer}
          className = "flex"
            title = "CONSUMER"
            body = "Delivery race among Indian grocery startups brings road safety risks"
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
        <img src={Adv3} className ="adimg3" height="" width="100%" alt = "add 1" />
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

export default Editor
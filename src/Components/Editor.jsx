import React from 'react'
import Cards from './Cards.';
import Cardflex2 from './Cardflex2';
import Premium from './Premium';
import Editorimg1 from '../imgs/editorimg1.png' 
import Editorimg2 from '../imgs/editorimg2.png'
import tmt from '../imgs/tmt.png'
import consumer from '../imgs/consumer.png'
import Adv3 from '../imgs/adv3.png' 
function Editor(props) {
  return (
    <>
        <div className='container row' >
         <div className='col-4'  >
          <div style={{marginBottom:"30px"}}>
            <h1> {props.item.section_name}</h1>
          </div>
          <div className='postion'>   
          <Cards src ={props.item.stories_list[0].file_url}
          width = "100%"
        
            title = {props.item.stories_list[0].industry_details[0].name}
            body = {props.item.stories_list[0].title}
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
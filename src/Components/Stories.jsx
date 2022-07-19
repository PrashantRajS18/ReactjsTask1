import React from 'react'
import Cardflex2 from './Cardflex2'
import { Adv } from './Adv'
import Premium from './Premium'
import stories1 from '../imgs/stories1.png'
import stories2 from '../imgs/stories2.png'
import stories3 from '../imgs/stories3.png'
import stories4 from '../imgs/stories4.png'
import stories5 from '../imgs/stories5.png'
import stories6 from '../imgs/stories6.png'
import stories7 from '../imgs/stories7.png'
import stories8 from '../imgs/stories8.png'
import stories9 from '../imgs/stories9.png'
import stories10 from '../imgs/stories10.png'
import stories11 from '../imgs/stories11.png'
import stories12 from '../imgs/stories12.png'
import Adv2 from '../imgs/adv2.png' 
function Stories() {
  return (
    <>
    <div className='container'>
     <div className='row'>
     <div className='col-6'>
     <Cardflex2  src ={stories1}
     width = "100%"
     className = "editorcards"
    sectitle = "More Stories"
            title = "FINANCE"
            body = "DSG Consumer Partners likely to raise nearly $125 mn for new fund"
          />
     </div>
     <div className=' col-6 mt-40 postion' >
     <Cardflex2  src ={stories2}
     width = "100%"
     className = "editorcards"
            title = "ECONOMY"
            body = "GLOBAL MARKETS - Asia shares fall as Treasury yields hit fresh highs"
          />
         <Premium 
          className ="Montbold Premiumtag1-3 "
         />
     </div>
     </div>
     <div className='row'>
     <div className='col-6 postion' >
     <Cardflex2  src ={stories3}
     width = "100%"
     className = "editorcards"
    
            title = "CONSUMER"
            body = "RPSG Capital Ventures to raise Rs 500 cr for consumer-focused fund"
          />
          <Premium 
          className ="Montbold Premiumtag1-3 "
         />
     </div>
     <div className=' col-6 ' >
     <Cardflex2  src ={stories4}
     width = "100%"
     className = "editorcards"
    
            title = "TMT"
            body = "RPSG Capital Ventures to raise Rs 500 cr for consumer-focused fund"
          />
     </div>
     </div>
     <div className='row'>
     <div className='col-6'>
     <Cardflex2  src ={stories5}
     width = "100%"
     className = "editorcards"
            title = "PEOPLE"
            body = "Jobs portal Apna appoints former PayU’s Shantanu Preetam as its first CTO"
          />
     </div>
     <div className=' col-6 postion ' >
     <Cardflex2  src ={stories6}
     width = "100%"
     className = "editorcards"
            title = "FINANCE"
            body = "Actis in talks to acquire Welspun group’s roads for up to Rs 10,000 cr"
          />
          <Premium 
          className ="Montbold Premiumtag1-3 "
         />
     </div>
     </div>
     <div className='row none'>
     <div className='col-6 '>
     <Cardflex2  src ={stories7}
     width = "100%"
     className = "editorcards"
            title = "CONSUMER"
            body = "Actor Tiger Shroff, BharatPe’s Ashneer Grover, others back Freadom"
          />
     </div>
     </div>
 </div>
 <Adv className="adv1 hide" src ={Adv2} width = "80%" />
 <div className='container'>
     <div className='row'>
     <div className='col-6 '>
     <Cardflex2  src ={stories7}
     width = "100%"
     className = "editorcardsh"
            title = "CONSUMER"
            body = "Actor Tiger Shroff, BharatPe’s Ashneer Grover, others back Freadom"
          />
     </div>
     <div className=' col-6 hide postion ' >
     <Cardflex2  src ={stories8}
     width = "100%"
     className = "editorcardsh"
            title = "INFRASTRUCTURE"
            body = "Shadowfax’s pivot pays off as focus sharpens on last mile delivery"
          />
          <Premium 
          className ="Montbold Premiumtag1-3 "
         />
     </div>
     </div>
     <div className='row'>
     <div className='col-6 hide postion'>
     <Cardflex2  src ={stories9}
     width = "100%"
     className = "editorcardsh"
    
            title = "ECONOMY"
            body = "Indian shares slip after five-day rally; HCL top drag ahead of results"
          />
          <Premium 
          className ="Montbold Premiumtag1-3 "
         />
     </div>
     <div className=' col-6 hide ' >
     <Cardflex2  src ={stories10}
     width = "100%"
     className = "editorcardsh"
            title = "HEALTHCARE"
            body = "Health Care At Home India secures $15 mn from new PE investor ABC World Asia"
          />
     </div>
     </div>
     <div className='row'>
     <div className='col-6 postion hide'>
     <Cardflex2  src ={stories11}
     width = "110%"
     className = "editorcardsh"
            title = "CONSUMER"
            body = "Dogsee Chew raises Rs 50 cr in Series A from Mankind Pharma; Sixth Sense Ventures"
          />
          <Premium 
          className ="Montbold Premiumtag1-3 "
         />
     </div>
     <div className=' col-6 hide ' >
     <Cardflex2  src ={stories12}
     width = "100%"
     className = "editorcardsh"
            title = "FINANCE"
            body = "Walton Street BlackSoil Real Estate Debt Fund II invests in two housing projects"
          />
     </div>
     </div>
 </div>
    </>

  )
}

export default Stories